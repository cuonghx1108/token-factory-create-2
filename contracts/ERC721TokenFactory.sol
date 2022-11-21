pragma solidity 0.7.5;

import "./ERC721TokenProxy.sol";
import "./ERC721BridgeToken.sol";

interface IMint {
  function mint(address _to, uint256 _tokenId) external;
}
contract ERC721TokenFactory {

  address[] private collections;
  address _erc721Image;

  function erc721Image() view public returns (address) {
    return _erc721Image;
  }

  function setERC721Image(address erc721Image_) public {
    _erc721Image = erc721Image_;
  }

  function deployCollection(
    string memory _name,
    string memory _symbol,
    address _bridgeContract
  ) external returns(address) {
    require(_erc721Image != address(0));
    bytes32 _salt = keccak256(abi.encodePacked(_name, _symbol));
    address bridgedToken = address(new ERC721TokenProxy{salt: _salt}(
      _erc721Image,
      _name,
      _symbol,
      _bridgeContract
    ));
    collections.push(bridgedToken);
    return bridgedToken;
  }

  function collectionByIndex(uint index) external view returns(address) {
    return collections[index];
  }

  function mint (address collection, address _to, uint256 _tokenId) external {
    IMint(collection).mint(_to, _tokenId);
  }
}