import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();

  const ERC721BridgeToken = await ethers.getContractFactory("ERC721BridgeToken");
  const erc721BridgeToken = await ERC721BridgeToken.deploy("", "", ethers.constants.AddressZero, 0);
  await erc721BridgeToken.deployed();

  console.log(`ERC721BridgeToken deployed to ${erc721BridgeToken.address}`);

  const ERC721TokenFactory = await ethers.getContractFactory("ERC721TokenFactory");
  const erc721TokenFactory = await ERC721TokenFactory.deploy(erc721BridgeToken.address);
  await erc721TokenFactory.deployed();

  console.log(`ERC721TokenFactory deployed to ${erc721TokenFactory.address}`);

  const rs1 = await erc721TokenFactory.connect(owner).deploy("Contract 1", "CT1", ethers.constants.AddressZero)
  await rs1.wait()

  const rs2 = await erc721TokenFactory.connect(owner).deploy("Contract 2", "CT2", ethers.constants.AddressZero)
  await rs2.wait()

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
