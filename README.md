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

npx hardhat run --network gusandbox scripts/deploy-home.ts
npx hardhat run --network sepolia scripts/deploy-foreign.ts

---

### To deploy ERC721Factory same address at 2 network we need an account with same nonce both chains, and fund account some ETH to deploy

account: 0xa542382443eD477C5Ed79a0b267AA1BAF0f017d2
privateKey: 8388fe5f5e00449dd23d5080d2c4724924c7133ae89dc9587d7311296b07bb1f

### Deploy ERC721Factory both side

0x631df241e511795bd136C683c0F3115d6ce211B3

### Deploy ERC721Image both side

```js
deployERC721BridgeTokenImage();
```

0x75DB212A26cC2932d0B1fC64Fa22bb711C2a58Ba

### Modify bridge contract to support create2

```markdown
[ Home ] Bridge Mediator: 0xB129D94b996fE8437f5E73836F9bC1F2E980CA8d
[ Foreign ] Bridge Mediator: 0x4A6ec94Ad99Ce24682AD262df6222Ed5149C0661
```

### Home collection contract

- args: name, symbol, Foreign Bridge Address above

  0xf6f57F7aC1E0Af09f88f5325586A9aB751B5e958

---

Test 2

erc721Custom deployed to 0x766Fd92Bf77Ecf63b7Ce74299E2e1B50dF87E6Ac
ERC721TokenFactory deployed to 0x1BD8312D5e2E02Ea0015038553cF81CD65F9958f

erc721BridgeToken deployed to 0x766Fd92Bf77Ecf63b7Ce74299E2e1B50dF87E6Ac
ERC721TokenFactory deployed to 0x1BD8312D5e2E02Ea0015038553cF81CD65F9958f

[ Home ] Bridge Mediator: 0xe9C3E0848376391C50E75Fb1C09d27DDf669503C
[ Foreign ] Bridge Mediator: 0x02614b8A3Bcff717b8e7FF12D04c8B9cC897F70d

---

25/11/2022
Home

erc721BridgeToken deployed to 0xcc8a9f486a0d3D70F465Eb56E7783Bd16413B4B1
erc721NativeToken deployed to 0x8383B38963E5CEf46231d231fB7bD9500aa08Be1
ERC721TokenFactory deployed to 0xe7a382b56F8B06204D0938A6Dd311e91A1895afF

Foreign

erc721BridgeToken deployed to 0xcc8a9f486a0d3D70F465Eb56E7783Bd16413B4B1
erc721NativeToken deployed to 0x8383B38963E5CEf46231d231fB7bD9500aa08Be1
ERC721TokenFactory deployed to 0xe7a382b56F8B06204D0938A6Dd311e91A1895afF

gu-bridge-nft

[ Home ] Bridge Mediator: 0x444993E30951AC5b704fE19F6148AA04F59Fc0C6
[ Foreign ] Bridge Mediator: 0x7445721C1bE87Dc2d1Bd14F23b7C16B5EDf00e16
