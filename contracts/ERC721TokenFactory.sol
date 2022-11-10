pragma solidity 0.7.5;

import "@openzeppelin/contracts/utils/Counters.sol";
import "./ERC721TokenProxy.sol";

contract ERC721TokenFactory {
  using Counters for Counters.Counter;

  Counters.Counter private _contractIdCounter;
  address private _tokenImageERC721;

  constructor(address tokenImageERC721_) {
    _tokenImageERC721 = tokenImageERC721_;
  }

  function tokenImageERC721() public view returns(address) {
    return _tokenImageERC721;
  }

  function deploy(
    string memory _name,
    string memory _symbol,
    address _bridgeContract
  ) external returns(address) {
    uint256 _contractId = _contractIdCounter.current();
    _contractIdCounter.increment();

    bytes32 _salt = keccak256(abi.encodePacked(_name, _symbol, _contractId));

    // This syntax is a newer way to invoke create2 without assembly, you just need to pass salt
    // https://docs.soliditylang.org/en/latest/control-structures.html#salted-contract-creations-create2
    return address(
      new ERC721TokenProxy{salt: _salt}(
        tokenImageERC721(),
         _name, 
         _symbol, 
         _bridgeContract, 
         _contractId
      )
    );
  }
}