# felicity -- medicine made easy
## Overview 

We are building a DApp that allows users to store medical records electronically using blockchain. We have used <b>Ethereum</b> and <b>IPFS</b>, which enables storing medical records in a decentralized way while keeping the medical redords secure.

The user enters an image of the medical record which gets stored in IPFS which returns a hash code which is then stored on the ethereum blockchain. 

The purpose of our project is to have decentralised, transferrable and immutable medical records. 

<img width="1440" alt="Screenshot 2021-05-11 at 7 26 10 AM" src="https://user-images.githubusercontent.com/54476239/117746511-2ab7ef00-b22a-11eb-8f27-15a9fa2c9451.png">

## Usage 
The current usage is quite basic, the user logs into their account and can enter a new medical record or view their previous medical records. 

**Home Page**

The home page is an interface that allows the user to login using their credentials. 

<img width="1440" alt="Screenshot 1" src="https://user-images.githubusercontent.com/54476239/117743189-f04b5380-b223-11eb-80fa-cf95ecd9de60.png">

**Upload Page**

This page allows the user to upload images of their medical records so that it can be refered to in the future by medical professionals. 

<img width="1424" alt="Screenshot 2" src="https://user-images.githubusercontent.com/54476239/117743408-69e34180-b224-11eb-868f-d7b06fcfaa89.png">


## Prerequisites

1.  You will need [Metamask](https://metamask.io/) plugin for Chrome.
2.  Make sure you have [Node.js](https://nodejs.org/en/) installed!

## Installation

1.  Install [Truffle Framework](http://truffleframework.com/) and [Ganache (gaphical version)](http://truffleframework.com/ganache/) globally.

    ```bash
    npm install -g truffle
    ```

    <strong>Note</strong>: The graphical version of Ganache seems to be more stable on Mac whereas Ganache CLI works better on Ubuntu.

2.  Run the development blockchain. On Ganache, click on <b>Quick Ethereum</b> to enable. You should see a similar page activate --

    <img width="1440" alt="Screenshot 3" src="https://user-images.githubusercontent.com/54476239/117745131-89c83480-b227-11eb-809b-89a17505e9f0.png">

3.  Open another terminal, clone this repo and install its dependencies.

    ```bash
    git clone https://github.com/deepalisingh11/felicity.git

    cd felicity

    npm install
    ```

    <strong>Note</strong>: If you get an error on install, that's okay. It should still work as long it shows installed packages message in the end.

4.  Compile, migrate, and test the smart contracts.

    ```bash
    ./node_modules/.bin/truffle compile
    ./node_modules/.bin/truffle migrate
    ./node_modules/.bin/truffle test
    ```
     
     <img width="1364" alt="Screenshot 4" src="https://user-images.githubusercontent.com/54476239/117745998-36ef7c80-b229-11eb-9462-ed2e6b79f058.png">

5.  Start the application

    ```bash
    npm run start
    ```

6.  Navigate to http://localhost:3000/ in your browser.

7.  Remember to connect [MetaMask](https://metamask.io/) to one of your local Ganache Ethereum accounts.

    <img width="316" alt="Screenshot 5" src="https://user-images.githubusercontent.com/54476239/117746417-09ef9980-b22a-11eb-8226-89831df6c242.png">
 
    - Create and connect to a custom RPC network using the Ganache RPC server (currently `http://127.0.0.1:7545`), then
    - Import a new account and use the account seed phrase provided by Ganache
    
    

## Tech Stack

- Solidity Smart Contracts
- IPFS for storing image data via Infura
- Truffle and Ganache for our development and testing framework
- React / Redux / Bootstrap 4 for our front-end development
- MetaMask for our web3 provider

## Authors
[Deepali Singh](https://github.com/deepalisingh11), [Aarushi Gajri](https://github.com/aprilerflows), and [Muskan Yadav](https://github.com/musk4n)

