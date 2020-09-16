require("chai/register-should");
require("chai").use(require("chai-as-promised"));
const HDWalletProvider = require("truffle-hdwallet-provider");

const config = {
  networks: {
    mainnet: {
      host: "localhost",
      port: 8545,
      network_id: "1"
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: "3"
    },
    kovan: {
      host: "localhost",
      port: 8545,
      network_id: "42"
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4"
    },
    xdai: {
      provider: function() {
        return new HDWalletProvider("mnemonic here", "https://dai.poa.network");
      },
      network_id: 100,
      gas: 8000000,
      gasPrice: 1000000000
    },
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    }
  },
  mocha: {
    enableTimeouts: false,
    grep: process.env.TEST_GREP,
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "USD",
      excludeContracts: ["Migrations"]
    }
  },
  compilers: {
    solc: {
      version: "0.5.10",
      settings: {
        optimizer: {
          enabled: true
        }
      }
    }
  }
};

const _ = require("lodash");

try {
  _.merge(config, require("./truffle-local"));
} catch (e) {
  if (e.code === "MODULE_NOT_FOUND" && e.message.includes("truffle-local")) {
    // eslint-disable-next-line no-console
    console.log("No local truffle config found. Using all defaults...");
  } else {
    // eslint-disable-next-line no-console
    console.warn("Tried processing local config but got error:", e);
  }
}

module.exports = config;