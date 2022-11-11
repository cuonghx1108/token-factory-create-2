# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

# start network
 npx hardhat node --port 8545
 npx hardhat node --port 8546

# deploy
 npx hardhat run --network local1 scripts/deploy.ts
 npx hardhat run --network local2 scripts/deploy.ts