# Treasury

Smart contract that connects a treasury to various liquidity pools and DeFi protocols, allowing for the management of funds through different platforms. The contract facilitates receiving stable coins, distributing them among protocols, swapping for different tokens, and calculating aggregated percentage yields.

## Description

The objective is to create a smart contract that connects a treasury to multiple DeFi protocols and liquidity pools, enabling the following capabilities:

- Receiving stable coins (e.g., USDC) into the treasury smart contract.
- Dynamic distribution of funds among different liquidity pools and DeFi protocols.
- Swapping received funds for other tokens such as USDT or DAI through platforms like Uniswap.
- Interaction with the Aave protocol to deposit DAI.
- Flexible adjustment of fund distribution ratios by the contract owner post deployment.
- Calculation of the aggregated percentage yield across all integrated protocols.
- Utilization of third-party services like Beefy Finance for enhanced functionalities.

## Getting Started

1. Install `NodeJS` project dependencies:

```
npm install
```

## Set your `.env` file

- You should use this [guide](https://github.com/luislucena16/treasury/blob/b49be0b5b1b302fb576fc3b6c024821e95c35ad6/.env.example), in your `ETH_FORK_URL` I recommend using a Mainnet fork

2. Launch a local Hardhat node (automatically takes over the `URL` of `ETH_FORK_URL`) - it is Mainnet forked:

- In another terminal window run the command:

```
npx hardhat node
```

## Deploy Smart Contract in local or testnet:

- In your principal terminal window run the command:

```
npx hardhat run scripts/deployTreasury.js --network hardhat
```

or

```
npx hardhat run scripts/deployTreasury.js --network mumbai
```

## Usage

The Smart Contract provides the following functions:

- `depositStableCoin`: Deposit stable coins into the treasury.
- `adjustDistributionRatios`: Dynamically change the allocation ratios for different protocols.
- `swapTokens`: Swap funds between stable coins and other tokens using Uniswap.
- `depositToAave`: Deposit DAI into the Aave protocol.
- `withdrawFromAave`: Withdraw DAI from the Aave protocol.
- `calculateAggregatedYield`: Calculate the combined percentage yield from all integrated protocols.

## Testing

Ensure the robustness of the Smart Contract by running the test suite:

`npx hardhat test`

## Document and Diagram

- You can see the complete document and flow diagram here:

[Document](https://github.com/luislucena16/treasury/blob/81895f4dc840d2cc2c4615cf4ea474123edbf099/Treasury%20Diagram.pdf)

## Bonus: Deployed Contract

Has been deployed on the Polygon Mumbai testnet. You can interact with the contract at the following address:

Deployed Contract Address: [Treausry Contract Address](https://mumbai.polygonscan.com/address/0xb200E942C4d066Dd28d67CfC6F2FDa4487a2FFEF)
