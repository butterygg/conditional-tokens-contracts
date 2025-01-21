Conditional Tokens Contracts
============================

.. image:: https://travis-ci.org/gnosis/conditional-tokens-contracts.svg?branch=master
   :target: https://travis-ci.org/gnosis/conditional-tokens-contracts
   :alt: Build Status

.. image:: https://badges.greenkeeper.io/gnosis/conditional-tokens-contracts.svg
   :target: https://greenkeeper.io/
   :alt: Greenkeeper badge

Smart contracts for conditional tokens.

`→ Online Documentation`_

.. _→ Online Documentation: https://docs.gnosis.io/conditionaltokens/

The conditional tokens contracts are deployed at the following addresses:

* Mainnet: ```0xC59b0e4De5F1248C1140964E0fF287B192407E0C```
* xDai: ```0xCeAfDD6bc0bEF976fdCd1112955828E00543c0Ce```
* Rinkeby: ```0x36bede640D19981A82090519bC1626249984c908```
* Unichain Sepolia: ```0x1301d3c29a8723fae7ee1343203ea16bd7845996```


How to deploy
-------------

1. Set `MNEMONIC` and `INFURA_API_KEY` in `.env`.
2. Deploy with Hardhat:

```sh
npx hardhat deploy --network unichain-sepolia
```

License
-------

All smart contracts are released under the `LGPL 3.0`_ license.

Security and Liability
~~~~~~~~~~~~~~~~~~~~~~

All contracts are **WITHOUT ANY WARRANTY**; *without even* the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

.. _LGPL 3.0: https://www.gnu.org/licenses/lgpl-3.0.en.html
