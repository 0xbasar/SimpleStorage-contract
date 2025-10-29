const hre = require("hardhat");

async function main() {
  console.log("Deploying SimpleStorage contract...");

  // Get the ContractFactory for SimpleStorage
  const simpleStorage = await hre.ethers.deployContract("SimpleStorage");

  // Wait for the contract to be deployed
  await simpleStorage.waitForDeployment();

  // Log the address of the deployed contract
  console.log(`SimpleStorage deployed to: ${simpleStorage.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
