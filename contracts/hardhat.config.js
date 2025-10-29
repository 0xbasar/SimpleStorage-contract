require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    // This configuration is for deploying to the Sepolia test network.
    // You will need to add your own environment variables.
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    // Add your Etherscan API key for contract verification
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
