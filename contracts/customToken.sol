//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Stack.sol";

contract customToken is ERC20 {
    address payable owner;
    uint256 initialSupply;
    uint256 tokenPrice = 0.00001 ether;
    Stack s = Stack(0xF43B5D563A452e3Be1607c1934f5616A86288616);

    constructor(uint256 _initialSupply) ERC20("ASK2WEB3 Token", "ASK") {
        owner = payable(msg.sender);
        _mint(owner, _initialSupply);
        initialSupply = _initialSupply;
    }

    function decimals() public pure override returns (uint8) {
        return 0;
    }

    function getTokenPrice() public view returns (uint256) {
        return tokenPrice;
    }

    function transferr(
        address _sender,
        address _recipient,
        uint256 _amount
    ) public virtual returns (bool) {
        _transfer(_sender, _recipient, _amount);
        return true;
    }

    function approve(
        address _owner,
        address _spender,
        uint256 _amount
    ) public {
        _approve(_owner, _spender, _amount);
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getTotalSupply() public view returns (uint256) {
        return initialSupply;
    }

    //Buy tokens
    function buyTokens(uint256 _numberOfTokens) public payable {
        require(
            msg.value == (_numberOfTokens * getTokenPrice()),
            "not enough value"
        );
        require(balanceOf(owner) >= _numberOfTokens, "not enough token");
        transferr(owner, msg.sender, _numberOfTokens);
        uint256 tokes = s.getTokensSold();
        tokes += _numberOfTokens;
        s.setTokenSold(tokes);
    }

    function sendTip(uint256 articleid, uint256 amount) public payable {
        address user = s.getUserFromArticleId(articleid);
        uint256 tip = s.getTipFromArticleId(articleid);
        tip += amount;
        s.setTipFromArticleId(articleid, tip);
        uint256 totaltip = s.getUserTotalTip(user);
        totaltip += amount;
        s.setUserTotalTip(user, totaltip);
        //transfer money
        transfer(user, amount);
    }
}
