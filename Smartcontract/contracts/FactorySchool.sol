// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

import "./School.sol"; // Import the SchoolSystem contract

contract SchoolSystemFactory {
    address[] public deployedSchoolSystems; // Store addresses of deployed SchoolSystem contracts
    
    // Event emitted when a new SchoolSystem contract is deployed
    event SchoolSystemDeployed(address indexed schoolSystem, address indexed owner);
    
    // Function to deploy a new SchoolSystem contract
    function createSchoolSystem( string memory name, string memory symbol) external {
        SchoolSystem newSchoolSystem = new SchoolSystem( name, symbol); // Deploy a new instance of SchoolSystem
        deployedSchoolSystems.push(address(newSchoolSystem)); // Store the address of the deployed contract
        emit SchoolSystemDeployed(address(newSchoolSystem), msg.sender); // Emit an event
    }
    
    // Function to get the number of deployed SchoolSystem contracts
    function getDeployedSchoolSystemsCount() external view returns (uint) {
        return deployedSchoolSystems.length;
    }
}
