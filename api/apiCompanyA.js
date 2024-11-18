const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
require('dotenv').config();

const API_URL = process.env.ALCHEMY_AMOY_API_KEY_HTTPS;
const PUBLIC_KEY = process.env.PUBLIC_KEY_COMPANY_A;
const PRIVATE_KEY = process.env.PRIVATE_KEY_COMPANY_A;
const WATER_MANAGEMENT_CONTRACT_ADDRESS = process.env.WATER_MANAGEMENT_CONTRACT_ADDRESS;
const WATER_MANAGEMENT_ABI = JSON.parse(process.env.WATER_MANAGEMENT_ABI);

const web3 = createAlchemyWeb3(API_URL);
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Convertir la dirección pública a su formato de checksum
const checksumAddress = web3.utils.toChecksumAddress(PUBLIC_KEY);
console.log('Dirección con checksum:', checksumAddress);

app.post('/sensor', async (req, res) => {
    const { sensorId, siteId, value, timestamp } = req.body.data;
    console.log(sensorId, siteId, value, timestamp);

    if (!sensorId || !siteId || !value || !timestamp) {
        return res.status(400).json({ error: 'Please provide all values.' });
    }

    try {
        const waterContract = new web3.eth.Contract(
            WATER_MANAGEMENT_ABI,
            WATER_MANAGEMENT_CONTRACT_ADDRESS
        );

        // Obtener el nonce de la cuenta pública
        const nonce = await web3.eth.getTransactionCount(checksumAddress, 'pending');

        // Estimar el gas necesario para la transacción
        const gasEstimate = await waterContract.methods.pushData(sensorId, siteId, value, timestamp).estimateGas({ from: checksumAddress });

        // Construir la transacción
        const tx = {
            from: checksumAddress,
            to: WATER_MANAGEMENT_CONTRACT_ADDRESS,
            nonce: nonce,
            gas: gasEstimate,
            data: waterContract.methods.pushData(sensorId, siteId, value, timestamp).encodeABI(),
        };

        // Firmar la transacción
        const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);

        // Enviar la transacción firmada
        web3.eth.sendSignedTransaction(signedTx.rawTransaction, (err, hash) => {
            if (!err) {
                console.log('The hash of this tx is: ', hash);
                res.json({ success: true, hash: hash });
            } else {
                console.log('ERROR: ', err);
                res.status(500).json({ error: 'Failed to send transaction', details: err.message });
            }
        });

    } catch (error) {
        res.status(500).json({ error: 'Failed to send tx ', details: error.message });
    }
});

app.listen(5000, () => {
    console.log('API listening on port 5000...');
});
