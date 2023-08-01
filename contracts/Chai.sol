pragma solidity ^0.8.0;

contract chai {
    //STore all necessary details.
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }
    //This is dynamic array store all the sender test ether
    Memo[] memos;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyChai(string memory name, string memory message) public payable {
        require(msg.value > 0, "Please greater then zero eth");
        owner.transfer(msg.value);
        //memos is array since "Memo is struct array we will use inside push
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
//Who Deploys it Becomes OwnerS
