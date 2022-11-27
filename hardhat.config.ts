import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

const dotenvConfigPath: string = process.env.DOTENV_CONFIG_PATH || "./.env";
dotenvConfig({ path: resolve(__dirname, dotenvConfigPath) });

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
      accounts: ["34f471afc29d9de9864a6536ac0cf63e8daf1310e1fcbbc8c5e0df1916f5c50b"]
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/de84f086752247089b65994fc7de3619",
      accounts: ["34f471afc29d9de9864a6536ac0cf63e8daf1310e1fcbbc8c5e0df1916f5c50b"]
    }
  }
};

export default config;
