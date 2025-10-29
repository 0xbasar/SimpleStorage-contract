# Basic Solidity Project: SimpleStorage

This is a foundational Solidity smart contract project built using the [Hardhat](https://hardhat.org/) development environment. It features a simple `SimpleStorage` contract that allows users to store and retrieve a number on the blockchain.

This project is an excellent starting point for anyone new to Web3 and smart contract development.

## What's Inside?

This project includes:
*   **`contracts/SimpleStorage.sol`**: The core smart contract, written in Solidity.
*   **`test/SimpleStorage.test.js`**: A test file to ensure the contract functions correctly.
*   **`scripts/deploy.js`**: A script to deploy the contract to a network.
*   **`hardhat.config.js`**: The Hardhat configuration file.

### The Smart Contract

The `SimpleStorage.sol` contract has two main functions:
1.  `store(uint256 _newNumber)`: A "write" function that takes a number, stores it in a state variable on the blockchain, and emits an event. This transaction costs gas.
2.  `retrieve()`: A "read" function that returns the currently stored number. This is a `view` function and does not cost gas to call.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) (version 18 or later)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/my-first-solidity-project.git
    cd my-first-solidity-project
    ```

2.  **Install dependencies:**
    This project uses Hardhat and its associated plugins. Install them using npm:
    ```bash
    npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox dotenv
    ```

### How to Use

#### 1. Compile the Contract

Compile the smart contract to generate the necessary artifacts (ABI and bytecode).
```bash
npx hardhat compile
```

#### 2. Run Tests

Run the automated tests to ensure everything is working as expected.
```bash
npx hardhat test
```
You should see output indicating that all tests have passed.

#### 3. Deploy to a Test Network

To deploy the contract, you need to connect to an Ethereum network. We will use the **Sepolia testnet**.

1.  **Create a `.env` file** in the root of your project. **This file should NOT be committed to Git.**
    ```
    # .env
    SEPOLIA_RPC_URL="YOUR_ALCHEMY_OR_INFURA_RPC_URL"
    PRIVATE_KEY="YOUR_WALLET_PRIVATE_KEY"
    ETHERSCAN_API_KEY="YOUR_ETHERSCAN_API_KEY"
    ```
    *   **SEPOLIA_RPC_URL**: Get this from a node provider like [Alchemy](https://www.alchemy.com/) or [Infura](https://www.infura.io/).
    *   **PRIVATE_KEY**: Export the private key from a wallet like MetaMask. **WARNING: Never share your private key!** It's best to use a wallet created specifically for development.
    *   **ETHERSCAN_API_KEY**: Get a free API key from [Etherscan](https://etherscan.io/) to verify your contract.

2.  **Get some Sepolia ETH** from a faucet, like [sepoliafaucet.com](https://sepoliafaucet.com/), to pay for the gas fees of deployment.

3.  **Run the deployment script:**
    ```bash
    npx hardhat run scripts/deploy.js --network sepolia
    ```
    If successful, you will see the contract address printed in the console. You can now view your deployed contract on the [Sepolia Etherscan](https://sepolia.etherscan.io/).

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
