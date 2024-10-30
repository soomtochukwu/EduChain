"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("hardhat-deploy");
require("dotenv").config();
const config = {
  solidity: "0.8.19",
  networks: {
    "arbitrum-sepolia": {
      url: process.env.ArbitrumSepoliaURL,
      accounts: [process.env.PVK],
      chainId: 421614,
      blockConfirmations: 6,
    },
  },
  etherscan: {
    apiKey: process.env.ARBKEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  sourcify: {
    enabled: false,
  },
};
exports.default = config;
