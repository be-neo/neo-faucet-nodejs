# neo-local-faucet
Node faucet for neo-local

## Features
* Request NEO/GAS for an existing address
* Generate a new account (WIF and address will be displayed) and fill it with NEO/GAS
* Automatic GAS claims for the faucet account

## Environment variables
* `NEOSCAN` The address of your neo-local NEOSCAN instance. The standard value is `localhost:4000`
* `MIN_BLOCK` the minimum amount of blocks that need to have passed before reapplying. The standard value is `5000`
* `FAUCET_WIF` the WIF of the Faucet account. The standard value is `KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr`
* `FAUCET_ADDRESS` The domain where the faucet is located. The standard value is `localhost`
* `PORT` The port where the faucet is located. The standard value is `4002`
* NEO_REWARD The amount of NEO the faucet rewards. The standard value is `100`
* GAS_REWARD The amount of GAS the faucet rewards. The standard value is `2000`
