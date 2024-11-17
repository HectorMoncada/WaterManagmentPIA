// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/ownership/Ownable.sol";

contract WaterToken is ERC20, Ownable {

    mapping(address => bool) private minters;

    constructor() ERC20("WaterToken", "WTK") {
    }

    modifier onlyMinter(address _sender){
        require(minters[_sender], "Not a minter");
        _;
    }

    //mint token
    function mint(address _to) external onlyMinter(tx.origin) {
        _mint(_to, 1);
    }

    //add minter
    function addMinter (address _minter) external {
        require(owner() == tx.origin, "You cannot add new minters ");
        minters[_minter] = true;
    }

}