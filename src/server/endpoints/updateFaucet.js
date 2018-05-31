import { get } from 'axios';

import faucetStatus from './../faucetStatus';
import { faucet, neoscanAddress } from './../variables';

export default async (req, res) => {

  const status = await faucetStatus(neoscanAddress, faucet.address);
  const { data: { height } } = await get(`${neoscanAddress}/get_height`);
  res.send({
    faucetStatus: status,
    blockHeight: height
  });
};
