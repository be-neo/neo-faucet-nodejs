import Neon from '@cityofzion/neon-js';
import { faucet } from './variables';

const checkAddress = address => {
  if (Neon.is.address(address) && address !== faucet.address) {
    return true;
  } else {
    return false;
  }
};

export default checkAddress;
