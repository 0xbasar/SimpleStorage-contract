const { expect } = require("chai");
const { ethers } = require("hardhat");

// 'describe' is a way to group tests.
describe("SimpleStorage Contract", function () {
  let simpleStorage;
  let owner;

  // 'beforeEach' runs before each test in this 'describe' block.
  // It's a great place to set up the contract for testing.
  beforeEach(async function () {
    // Get the contract factory and signers
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    [owner] = await ethers.getSigners();

    // Deploy a new instance of the contract before each test
    simpleStorage = await SimpleStorage.deploy();
  });

  // 'it' is an individual test case.
  it("Should start with a myNumber of 0", async function () {
    // The 'expect' syntax comes from the Chai assertion library.
    // We check if the initial value of retrieve() is 0.
    expect(await simpleStorage.retrieve()).to.equal(0);
  });

  it("Should update the number when store() is called", async function () {
    // Define the new value we want to store
    const newValue = 42;

    // Call the 'store' function to update the number
    const tx = await simpleStorage.store(newValue);
    await tx.wait(); // Wait for the transaction to be mined

    // Check if the number was updated correctly
    expect(await simpleStorage.retrieve()).to.equal(newValue);
  });

  it("Should emit a NumberChanged event when store() is called", async function () {
    const newValue = 100;

    // We can use 'emit' from chai-as-promised (included in hardhat-toolbox)
    // to check if an event was emitted with the correct arguments.
    await expect(simpleStorage.store(newValue))
      .to.emit(simpleStorage, "NumberChanged")
      .withArgs(owner.address, newValue);
  });
});
