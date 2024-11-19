# Sistema de Medición de Agua en Blockchain

Este proyecto es una aplicación descentralizada (dApp) que emula el funcionamiento de un sistema de medición de agua en una fábrica, utilizando **Blockchain** y tecnologías **IoT** simuladas.

## 🚀 Descripción del Proyecto

La aplicación consta de 4 componentes principales:

1. **Smart Contracts**: Desarrollados en **Solidity**, utilizando librerías de **OpenZeppelin**.
2. **Sensores Simulados**: Microservicios en **Node.js** que generan datos ficticios.
3. **API**: Recoge datos de los sensores y los escribe en la blockchain.
4. **Interfaz de Usuario (UI)**: Implementada con **React**.

## 📋 Tecnologías Utilizadas

- **Solidity**: Para la creación de contratos inteligentes.
  - Librerías utilizadas: `AccessControl`, `Ownable`, `Strings`.
- **OpenZeppelin ERC-20**: Para minar tokens.
- **React 18.2.0**: Para la interfaz de usuario.
- **Node.js**: Para microservicios que simulan sensores.
- **Remix**: Para desarrollo, pruebas y despliegue de contratos inteligentes.
- **Sepolia Testnet**: Red de pruebas para desplegar los contratos.
- **Metamask**: Para interactuar con la blockchain desde la dApp.

## 🌟 Características Principales

- Simulación de sensores IoT para la medición de agua.
- Registro de datos en la blockchain.
- Emisión de tokens ERC-20 como parte del sistema.
- Interfaz amigable para visualizar los datos de consumo.

## 🛠️ Instalación

### Requisitos Previos

- **Node.js** y **npm** instalados.
- Extensión **Metamask** en tu navegador.
- Conexión a la red de pruebas **Sepolia** en Metamask.

### Pasos

1. Clona este repositorio:

   ```bash
   git clone https://github.com/HectorMoncada/WaterManagmentPIA.git
   cd WaterManagmentPIA
2. Instala las dependencias:

```bash
npm install

Configura Metamask para conectarte a la red de pruebas Sepolia y añade tu clave privada para interactuar con los contratos.

Despliega el contrato inteligente usando Remix:

Sube el archivo del contrato en Remix.
Compílalo y desplégalo en la red de pruebas Sepolia.
Copia la dirección del contrato desplegado.
Configura la dirección del contrato en los archivos relevantes del frontend:

Actualiza los archivos necesarios en la carpeta frontend/ para apuntar al contrato en la red Sepolia.
Inicia la aplicación:
npm start
Abre tu navegador en http://localhost:3000 para ver la aplicación en funcionamiento.

📄 Documentación
Contratos Inteligentes: Ubicados en la carpeta contracts/.
Microservicios de Sensores: Código en sensors/.
API: Implementada en api/.
Frontend: Código fuente en frontend/.
