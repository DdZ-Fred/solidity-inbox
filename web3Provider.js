const ganache = require('ganache-core');

const provider = () => {
  // Add 'prod'
  if (process.env.NODE_ENV === 'prod') {
    console.log('[web3Provider/provider] Mode: PROD');
    return null;
  }
  // Add 'test'
  if (process.env.NODE_ENV === 'test') {
    console.log('[web3Provider/provider] Mode: TEST');
    return null;
  }

  console.log('[web3Provider/provider] Mode: DEV');
  return ganache.server().provider;
};

module.exports = { provider };
