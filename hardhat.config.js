require("hardhat-contract-sizer");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const ETH_FORK_URL = process.env.ETH_FORK_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: { sources: "contracts", tests: "test" },
  networks: {
    hardhat: {
      // url: "http://127.0.0.1:8545/",
      forking: {
        // note: an Mainnet fork is being used
        url: ETH_FORK_URL,
        blockNumber: 17971384,
      },
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      blockNumber: 17971384,
      accounts: [PRIVATE_KEY],
    },
  },
};
