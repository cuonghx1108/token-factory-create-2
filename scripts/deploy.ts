import { ethers } from "hardhat";

async function main() {
  // const [owner] = await ethers.getSigners();
  
  const ERC721BridgeToken = await ethers.getContractFactory("ERC721BridgeToken");
  const erc721BridgeToken = await ERC721BridgeToken.deploy("", "", ethers.constants.AddressZero);
  await erc721BridgeToken.deployed();
  console.log(`erc721BridgeToken deployed to ${erc721BridgeToken.address}`);

  // const ERC721Custom = await ethers.getContractFactory("ERC721Custom");
  // const erc721Custom = await ERC721Custom.deploy("", "");
  // await erc721Custom.deployed();
  // console.log(`erc721Custom deployed to ${erc721Custom.address}`);

  const ERC721TokenFactory = await ethers.getContractFactory("ERC721TokenFactory");
  const erc721TokenFactory = await ERC721TokenFactory.deploy();
  await erc721TokenFactory.deployed();

  console.log(`ERC721TokenFactory deployed to ${erc721TokenFactory.address}`);

  // const rs0 = await erc721TokenFactory.connect(owner).deployERC721BridgeTokenImage();
  // await rs0.wait()

  // const erc721BridgeToken = await erc721TokenFactory.erc721Image()
  // console.log(`ERC721BridgeToken deployed to ${erc721BridgeToken}`);

  // const rs1 = await erc721TokenFactory.connect(owner).deployCollection("SADR1", "SADR1")
  // await rs1.wait()

  // const collection = await erc721TokenFactory.collectionByIndex(0);
  // console.log("collection", collection);

  // const rs2 = await erc721TokenFactory.mint(collection, owner.address, 1)
  // await rs2.wait()

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
