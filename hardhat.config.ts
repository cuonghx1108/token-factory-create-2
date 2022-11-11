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
    }
  }
};

export default config;
