pragma solidity 0.7.5;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./interfaces/IOwnable.sol";

/**
 * @title ERC721BridgeToken
 * @dev template token contract for bridged ERC721 tokens.
 */
contract ERC721Custom is ERC721 {
    address public bridgeContract;

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
    }

    /**
     * @dev Mint new ERC721 token.
     * Only bridge contract is authorized to mint tokens.
     * @param _to address of the newly created token owner.
     * @param _tokenId unique identifier of the minted token.
     */
    function mint(address _to, uint256 _tokenId) external {
        _safeMint(_to, _tokenId);
    }
}
