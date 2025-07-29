require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

console.log(1);
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  paths: {
    sources: "./contracts",
    tests: "./test",
    artifacts: "./artifacts"
  },
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999,
      },
      //viaIR: true,
    },
  },
 
  networks: {
    hardhat: {
      forking: {
        url: process.env.RPC_URL || '',
        blockNumber: 55690400
      },
    },
  }
};
