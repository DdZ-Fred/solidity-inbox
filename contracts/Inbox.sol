// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.8.0;

contract Inbox {
    string public message;

    constructor (string memory initialMessage) public {
        message = initialMessage;    
    }

    function setMessage(string calldata newMessage) public {
        message = newMessage;
    }
}