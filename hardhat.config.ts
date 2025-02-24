import { HardhatUserConfig } from "hardhat/config";
import { getRemoteNetworkConfig, mnemonic } from "./config";

import "hardhat-deploy";
// To make hardhat-waffle compatible with hardhat-deploy
// we have aliased hardhat-ethers to hardhat-ethers-deploy in package.json
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "@typechain/hardhat";
import "solidity-coverage";

const accounts = {
    count: 10,
    initialIndex: 0,
    mnemonic,
    path: "m/44'/60'/0'/0",
};

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    namedAccounts: {
        deployer: 0, // Do not use this account for testing
        admin: 1,
        trader: 2,
    },
    networks: {
        goerli: { accounts, ...getRemoteNetworkConfig("goerli") },
        kovan: { accounts, ...getRemoteNetworkConfig("kovan") },
        rinkeby: { accounts, ...getRemoteNetworkConfig("rinkeby") },
        ropsten: { accounts, ...getRemoteNetworkConfig("ropsten") },
        matic: { accounts, ...getRemoteNetworkConfig("matic"), gasPrice: 8000000000 },
        "unichain-sepolia": { accounts, ...getRemoteNetworkConfig("unichain-sepolia") },
        "unichain-mainnet": { accounts, ...getRemoteNetworkConfig("unichain-mainnet") },
    },
    paths: {
        artifacts: "./artifacts",
        cache: "./cache",
        sources: "./contracts",
        tests: "./test",
        deployments: "./deployments",
    },
    solidity: {
        compilers: [
            {
                version: "0.8.10",
                settings: {
                    // https://hardhat.org/hardhat-network/#solidity-optimizer-support
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.0",
                settings: {
                    // https://hardhat.org/hardhat-network/#solidity-optimizer-support
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.6.12",
                settings: {
                    // https://hardhat.org/hardhat-network/#solidity-optimizer-support
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.5.1",
                settings: {
                    // https://hardhat.org/hardhat-network/#solidity-optimizer-support
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    typechain: {
        outDir: "typechain",
        target: "ethers-v5",
    },
    gasReporter: {
        currency: "USD",
        gasPrice: 100,
        excludeContracts: ["Mock", "ERC20"],
    },
};

export default config;
