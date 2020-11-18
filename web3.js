const Web3 = require('web3');
const { provider } = require('./web3Provider');

module.exports = new Web3(provider());
