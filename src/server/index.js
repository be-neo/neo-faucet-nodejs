import '@babel/polyfill';

import express from 'express';

process.env.isServer = true;

import { checkAddress, home, updateFaucet } from './endpoints';
import { port, faucetSite } from './variables';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', home);

server.get('/update', updateFaucet);

server.get('/check/:addr', checkAddress);

server.listen(port);
console.log(`Serving at ${faucetSite}`);
