import { ethers } from "hardhat";

async function main() {  
  const ERC721NativeToken = await ethers.getContractFactory("ERC721NativeToken");
  const erc721NativeToken = await ERC721NativeToken.deploy("", "", ethers.constants.AddressZero);
  await erc721NativeToken.deployed();
  console.log(`erc721NativeToken deployed to ${erc721NativeToken.address}`);

  const ERC721BridgeToken = await ethers.getContractFactory("ERC721BridgeToken");
  const erc721BridgeToken = await ERC721BridgeToken.deploy("", "", ethers.constants.AddressZero);
  await erc721BridgeToken.deployed();
  console.log(`erc721BridgeToken deployed to ${erc721BridgeToken.address}`);

  const ERC721TokenFactory = await ethers.getContractFactory("ERC721TokenFactory");
  const erc721TokenFactory = await ERC721TokenFactory.deploy(erc721BridgeToken.address, erc721NativeToken.address);
  await erc721TokenFactory.deployed();

  erc721TokenFactory.transferOwnership(process.env.FOREIGN_FACTORY_OWNER as string)

  console.log(`ERC721TokenFactory deployed to ${erc721TokenFactory.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
