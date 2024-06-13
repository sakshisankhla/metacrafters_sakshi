# MY TOKEN project

This is a simple Solidity smart contract to create a custom  token with mint and burn functionality.

## Description

This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain. This project implements a basic Ethereum token using the Solidity programming language. The token has the ability to increase its total supply through a minting function and decrease its total supply through a burning function. It also includes a mapping to track the balances of addresses holding the token.

## Getting Started

### Installing

To run this program, we can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js


### Executing program

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., MyToken.sol). Copy and paste the following code into the file:


contract MyToken {

    // public variables here
    string public tokenName = "MyFirstToken";
    string public tokenAbbrv = "MFT";
    uint public totalSupply = 0;

    // mapping variable here
    mapping(address => uint) public balances;

    // mint function
    function mint(address _address, uint _value) public{
        totalSupply += _value;
        balances[_address] += _value;
    }
    // burn function
     function burn(address _address, uint _value) public{
        if(balances[_address] >= _value){
            totalSupply -= _value; 
        balances[_address] -= _value;
        }
    }
}


The steps to execute the program in Remix:

1. Open the Remix IDE.
2. Create a new file and paste the smart contract code into it.
3. Ensure the Solidity compiler version is set to a version between 0.8.2 and 0.9.0.
4. Compile the contract by selecting the appropriate compiler and clicking on the "Compile" button.
5. Once compiled, navigate to the "Deploy & Run Transactions" tab.
6. Deploy the contract by clicking the "Deploy" button.
7. After deployment, use the deployed contract's interface in Remix to interact with the `mint` and `burn` functions by providing the required parameters (address and value).

## Help

If you encounter any issues with deploying or interacting with the contract, consider the following:

Ensure your Solidity version is compatible with the pragma statement in the contract.
Check your Ethereum network connection and account balances.
For additional help, consult the Solidity documentation or community forums.

## Authors

sakshi sankhala

https://x.com/Sakshii_013?t=W24ugf0kSTnbxtHmFyLjZA&s=09


## License
This project is licensed under the MIT License
