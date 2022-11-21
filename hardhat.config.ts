import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.7.5",

  networks: {
    local1: {
      url: "http://127.0.0.1:8545/"
    },
    local2: {
      url: "http://127.0.0.1:8546/"
    },
    gusandbox: {
      url: "https://sandbox1.japanopenchain.org:8545/",
      accounts: ["8388fe5f5e00449dd23d5080d2c4724924c7133ae89dc9587d7311296b07bb1f"]
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/de84f086752247089b65994fc7de3619",
      accounts: ["8388fe5f5e00449dd23d5080d2c4724924c7133ae89dc9587d7311296b07bb1f"]
    }
  }
};

export default config;
