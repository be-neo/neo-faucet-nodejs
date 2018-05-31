import { wallet } from '@cityofzion/neon-js';

export const neoscan = process.env.NEOSCAN || 'localhost:4000';
export const minBlocks = process.env.MIN_BLOCK || 20;
export const faucet = new wallet.Account(process.env.FAUCET_WIF || 'KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr');

export const faucetAddress  = process.env.FAUCET_ADDRESS || 'localhost'
export const port = process.env.PORT || 4002;
export const neoReward = process.env.NEO_REWARD || 100;
export const gasReward = process.env.GAS_REWARD || 2000;

export const neoscanAddress = `http://${neoscan}/api/main_net/v1`;
export const faucetSite = `http://${faucetAddress}:${port}`;
