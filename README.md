# Interface to withdraw tokens from DAOMaker V1 vault
Simple interface to withdraw since they removed the UI and they're telling the users, that "V1 vaults will be re-opened for one last time for you to unstake your DAO". Guess what? It's open and you can get your tokens back whenever. 


## How? 
Since we don't have the ABI for the contract, I just looked at some old TXs and figured out the functions and the order in which you have to call them. 

## Is it safe?
Yes, but don't take my word for it. The code is simple, written in vanilla Javascript, you can check it out [here](public/index.js). 
  I am not using any library and I tired to keep it as simple as possible.

---
For the advanced users, you can send the transactions from metamask to the contract and adding the appropriate HEX in the DATA field.

This are the essentials, again check it yourself on Etherscan, if you sent funds to the V1 vault contract you will see that is the one below and the same that I have used in the code at line 1.

Vault contract `0xE33B15629739770a27c4726a22BE61128aa1c781` - [Etherscan](https://etherscan.io/address/0xE33B15629739770a27c4726a22BE61128aa1c781)

Hex Withdraw function `0x2e1a7d4d0000000000000000000000000000000000000000000000000000000000000000` - Example on [Etherscan](https://etherscan.io/tx/0xa6819bba8fd21bdb077681a18f5159f8faeb1b6b8776fdf1b36deea39bb08eb0)

Hex unstake function `0x2e17de780000000000000000000000000000000000000000000000000000000000000000` - Example on [Etherscan](https://etherscan.io/tx/0x69e045a41d08c2d615e4dedb3763d1f4176ffcb815e17f041603254a620eef01)


---