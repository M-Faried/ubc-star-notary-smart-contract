pragma solidity ^0.8.0;

contract StarNotaryV1 {
    string public starName;
    address public starOwner;

    event starClaimed(address owner);

    constructor(){
        starName = "Awesome Udacity Star";
    }

    function claimStar() public {
        starOwner = msg.sender;
        emit starClaimed(msg.sender);
    }
}