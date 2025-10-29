// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SimpleStorage
 * @dev A very basic contract to store and retrieve a number.
 * This is a great first contract for learning the fundamentals of Solidity.
 */
contract SimpleStorage {
    // A private state variable to store a number.
    // 'private' means it can only be accessed by functions within this contract.
    uint256 private myNumber;

    /**
     * @dev An event that is emitted when the number is changed.
     * Front-end applications can listen for these events.
     */
    event NumberChanged(address indexed who, uint256 newNumber);

    /**
     * @dev Stores a new number in the 'myNumber' state variable.
     * This is a "write" transaction and will cost gas.
     * @param _newNumber The new number to store.
     */
    function store(uint256 _newNumber) public {
        myNumber = _newNumber;
        // Emit the event to notify listeners that the number has changed.
        emit NumberChanged(msg.sender, _newNumber);
    }

    /**
     * @dev Retrieves the current value of 'myNumber'.
     * This is a "read" function (marked as 'view') and does not cost gas to call
     * from outside the blockchain (e.g., from a website).
     * @return The stored number.
     */
    function retrieve() public view returns (uint256) {
        return myNumber;
    }
}
