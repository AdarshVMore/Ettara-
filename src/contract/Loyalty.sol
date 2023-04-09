// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Loyalty{

    address contractOwner;
    uint orderNumber = 0;
    string[] gubblieNFTs;
    string[] badgesNfts;
    uint256 private ethToCoffeeBeanRatio = 5000; // 1 ETH = 5000 CoffeeBeans


    // constructor(){
    //     contractOwner = msg.sender;
    // }

    struct Customer {
        address customer_address;
        string funkyName;
        string tier;
        uint overAllPoints;
        uint coffeeBeans;
        string[] orders;
        string[] badges;
        string[] NFTs;
    }

    Customer[] public customers;
    address[] public allCustomers;
    address public owner = 0x607d1cB32B9030b1968a377Bec2c17ebaaf412e6;

    mapping(address => Customer) addressToCustomer;


    function addNft(string memory _hash, uint _designation) public {
        if(_designation == 0){
            gubblieNFTs.push(_hash);
        }
        if(_designation == 1){
            badgesNfts.push(_hash);
        }
    }

    function addCustomer(string memory _funkyName) public{

        allCustomers.push(msg.sender);
        addressToCustomer[msg.sender].customer_address = msg.sender;
        addressToCustomer[msg.sender].funkyName = _funkyName;
        addressToCustomer[msg.sender].overAllPoints = 0;
        addressToCustomer[msg.sender].tier = "bronze";
        addressToCustomer[msg.sender].coffeeBeans = 0;
        customers.push(Customer(msg.sender, _funkyName, "bronze", 0, 0, new string[](0), new string[](0), new string[](0)));
    }

    function earnPoints(address _customer, string memory items, uint _bill) public returns(uint){

        if(msg.sender == owner) {
            uint pointsToAdd = _bill % 20;  //100 rs spent = 5 points got
            addressToCustomer[_customer].overAllPoints += pointsToAdd;
            addressToCustomer[_customer].orders.push(items);
            orderNumber++;
            gubblieOrder(_customer);
            return(addressToCustomer[_customer].overAllPoints);        
        }
        
    }

    function giveTier(address _address) public {
        uint currentPoints = addressToCustomer[_address].overAllPoints;
        if(currentPoints >= 1000) {
            addressToCustomer[_address].tier = "Platinum";
            addressToCustomer[_address].badges.push(badgesNfts[3]);
        }
        else if(currentPoints >= 600) {
            addressToCustomer[_address].tier = "Golden";
            addressToCustomer[_address].badges.push(badgesNfts[2]);

        }
        else if(currentPoints >= 250) {
            addressToCustomer[_address].tier = "Silver";
            addressToCustomer[_address].badges.push(badgesNfts[1]);

        }
        else {
            addressToCustomer[_address].tier = "bronze";
            addressToCustomer[_address].badges.push(badgesNfts[0]);

        }   
    }

    function gubblieOrder(address _address) public {
        if (orderNumber == 100) {
            addressToCustomer[_address].NFTs.push(gubblieNFTs[0]);
        }
        if (orderNumber == 250) {
            addressToCustomer[_address].NFTs.push(gubblieNFTs[1]);
        }
        if (orderNumber == 500) {
            addressToCustomer[_address].NFTs.push(gubblieNFTs[2]);
        }
    }

    function getCustomer(address _address) public view returns(Customer memory) {
        return addressToCustomer[_address];
    }

    function getAllCustomers() public view returns(address[] memory) {
        return allCustomers;
    }

    function isOwner() public view returns(bool ) {
        if(msg.sender == owner) {
            return true;
        }
        else {
            return false;
        }
    }
}