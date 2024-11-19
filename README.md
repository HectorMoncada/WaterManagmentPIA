

#Sistema de Medición de Agua en Blockchain
Este proyecto es una aplicación descentralizada (dApp) que emula el funcionamiento de un sistema de medición de agua en una fábrica, utilizando Blockchain y tecnologías IoT simuladas.

#🚀 Descripción del Proyecto
La aplicación consta de 4 componentes principales:

Smart Contracts: Desarrollados en Solidity, utilizando librerías de OpenZeppelin.
Sensores Simulados: Microservicios en Node.js que generan datos ficticios.
API: Recoge datos de los sensores y los escribe en la blockchain.
Interfaz de Usuario (UI): Implementada con React.

#📋 Tecnologías Utilizadas

Solidity: Para la creación de contratos inteligentes.
Librerías utilizadas: AccessControl, Ownable, Strings.
OpenZeppelin ERC-20: Para minar tokens.
React 18.2.0: Para la interfaz de usuario.
Node.js: Para microservicios que simulan sensores.
Remix: Para desarrollo, pruebas y despliegue de contratos inteligentes.
Sepolia Testnet: Red de pruebas para desplegar los contratos.
Metamask: Para interactuar con la blockchain desde la dApp.

#🌟 Características Principales

Simulación de sensores IoT para la medición de agua.
Registro de datos en la blockchain.
Emisión de tokens ERC-20 como parte del sistema.
Interfaz amigable para visualizar los datos de consumo.

#🛠️ Instalación

Requisitos Previos
Node.js y npm instalados.
Extensión Metamask en tu navegador.
Conexión a la red de pruebas Sepolia en Metamask.
Pasos
Clona este repositorio:

```git clone https://github.com/HectorMoncada/WaterManagmentPIA.git```
```cd WaterManagmentPIA```

#Instala las dependencias:

```npm install```
Configura Metamask con la red Sepolia y tu clave privada.

Despliega el contrato inteligente utilizando Remix y copia la dirección del contrato.

Configura la dirección del contrato en los archivos relevantes del frontend.

#Inicia la aplicación:
```npm start```

#📄 Documentación
Contratos Inteligentes: Ubicados en la carpeta contracts/.
Microservicios de Sensores: Código en sensors/.
API: Implementada en api/.
Frontend: Código fuente en frontend/.
