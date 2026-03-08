// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract BROAP is ERC1155, ERC2981, Ownable {
    using Strings for uint256;

    struct Drop {
        uint256 maxSupply;
        uint256 minted;
        uint256 startTime;
        uint256 endTime;
        uint256 price;         // keep at 0 for free mints
        uint256 walletLimit;   // 1 for one-per-wallet
        bool active;
    }

    // tokenId => drop config
    mapping(uint256 => Drop) public drops;

    // tokenId => account => minted amount
    mapping(uint256 => mapping(address => uint256)) public mintedByWallet;

    // optional custom metadata URI per token
    mapping(uint256 => string) private _tokenURIs;

    event DropConfigured(
        uint256 indexed tokenId,
        uint256 maxSupply,
        uint256 startTime,
        uint256 endTime,
        uint256 price,
        uint256 walletLimit,
        bool active
    );

    event BROAPMinted(
        address indexed account,
        uint256 indexed tokenId,
        uint256 amount,
        uint256 value
    );

    constructor(
        address initialOwner,
        string memory baseMetadataURI,
        address royaltyReceiver,
        uint96 royaltyFeeNumerator // e.g. 500 = 5%
    ) ERC1155(baseMetadataURI) Ownable(initialOwner) {
        _setDefaultRoyalty(royaltyReceiver, royaltyFeeNumerator);
    }

    function configureDrop(
        uint256 tokenId,
        uint256 maxSupply,
        uint256 startTime,
        uint256 endTime,
        uint256 price,
        uint256 walletLimit,
        bool active
    ) external onlyOwner {
        require(endTime == 0 || endTime > startTime, "Invalid time window");
        require(maxSupply > 0, "Max supply must be > 0");

        drops[tokenId] = Drop({
            maxSupply: maxSupply,
            minted: drops[tokenId].minted, // preserve existing minted count
            startTime: startTime,
            endTime: endTime,
            price: price,
            walletLimit: walletLimit,
            active: active
        });

        emit DropConfigured(
            tokenId,
            maxSupply,
            startTime,
            endTime,
            price,
            walletLimit,
            active
        );
    }

    function setTokenURI(uint256 tokenId, string calldata newURI) external onlyOwner {
        _tokenURIs[tokenId] = newURI;
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        string memory custom = _tokenURIs[tokenId];
        if (bytes(custom).length > 0) {
            return custom;
        }

        string memory base = super.uri(tokenId);
        return string(abi.encodePacked(base, tokenId.toString(), ".json"));
    }

    function mint(uint256 tokenId, uint256 amount) external payable {
        Drop storage d = drops[tokenId];

        require(d.active, "Drop inactive");
        require(block.timestamp >= d.startTime, "Mint not started");
        if (d.endTime != 0) {
            require(block.timestamp <= d.endTime, "Mint ended");
        }

        require(amount > 0, "Amount must be > 0");
        require(d.minted + amount <= d.maxSupply, "Exceeds max supply");

        if (d.walletLimit > 0) {
            require(
                mintedByWallet[tokenId][msg.sender] + amount <= d.walletLimit,
                "Wallet limit exceeded"
            );
        }

        require(msg.value == d.price * amount, "Wrong ETH value");

        mintedByWallet[tokenId][msg.sender] += amount;
        d.minted += amount;

        _mint(msg.sender, tokenId, amount, "");

        emit BROAPMinted(msg.sender, tokenId, amount, msg.value);
    }

    function ownerMint(
        address to,
        uint256 tokenId,
        uint256 amount
    ) external onlyOwner {
        Drop storage d = drops[tokenId];
        require(d.minted + amount <= d.maxSupply, "Exceeds max supply");

        d.minted += amount;
        _mint(to, tokenId, amount, "");
    }

    function withdraw(address payable to) external onlyOwner {
        require(to != address(0), "Zero address");
        (bool ok, ) = to.call{value: address(this).balance}("");
        require(ok, "Withdraw failed");
    }

    function setDefaultRoyaltyInfo(address receiver, uint96 feeNumerator) external onlyOwner {
        _setDefaultRoyalty(receiver, feeNumerator);
    }

    function setTokenRoyaltyInfo(
        uint256 tokenId,
        address receiver,
        uint96 feeNumerator
    ) external onlyOwner {
        _setTokenRoyalty(tokenId, receiver, feeNumerator);
    }

    function clearTokenRoyaltyInfo(uint256 tokenId) external onlyOwner {
        _resetTokenRoyalty(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, ERC2981)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}