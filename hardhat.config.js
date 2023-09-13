require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
// require("dotenv").config();
// const { API_URL, PRIVATE_KEY } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.21",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Q9MDKRvG4gAMjLFnTjpwbeadnOcKG4BH",
      accounts: ["da8acbbd56b8d157b0d6df84bfd97c29061017535fcf0993e658bb0e4447a8b1"]
    
    },
  },
};
