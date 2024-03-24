// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GGVonator is ERC721URIStorage {
    uint256 private _nextTokenId;

    constructor() ERC721("GameItem", "ITM") {}

    function awardItem(string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 tokenId = _nextTokenId++;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }
}