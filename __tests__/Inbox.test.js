const {
  accounts,
  contract,
  web3, // web3 instance connected to local testing blockchain
  provider, // web3 provider, connected to local testing blockchain
} = require('@openzeppelin/test-environment');
const { bytecode } = require('../build/contracts/Inbox.json');

// const web3 = require('../web3');

// jest.mock('secp256k1');
// jest.mock('../web3Provider', () => {
//   function provider() {
//     const server = require('ganache-core').server({
//       debug: true,
//     });
//     return server.provider;
//   }
//   return { provider };
// });

// const provider = ganache.provider({
//   networkd_id: 'fred-987',
//   debug: true,
//   locked: false,
//   total_accounts: 10,
//   default_balance_ether: 20,
// });
// const web3 = new Web3(provider);

// const server = ganache.server({
//   debug: true,
// });
// const web3 = new Web3(provider());

/**
 * TESTING CYCLE
 * =============
 *
 * - Jest starts
 * - Deploy a new contract            => beforeEach
 * - Manipulate the contract          => it
 * - Make an assertion about contract => it
 */

const web3InboxContract = contract.fromArtifact('Inbox');

describe('Inbox', () => {
  const [deployer, owner] = accounts;
  let inbox = null;

  beforeEach(async () => {
    // Use one of those accounts to deploy the contract
    inbox = await web3InboxContract
      .deploy({
        data: bytecode,
        arguments: ['Hi Test!'],
      })
      .send({
        from: deployer,
        gas: 1_000_000,
        gasPrice: '2',
      });
  });

  it('deploys a contract', async () => {
    expect(accounts.length).toEqual(10);
    expect(inbox.options.address).toBeTruthy();
  });

  it('has a default message', async () => {
    // Calling the getter of the 'message' property
    const message = await inbox.methods.message().call();
    expect(message).toEqual('Hi Test!');
  });
  it('can change the message', async () => {
    // Calling the getter of the 'message' property
    const message = await inbox.methods.message().call();
    expect(message).toEqual('Hi Test!');
    const transactionsReceipt = await inbox.methods
      .setMessage('New test message')
      .send({
        from: deployer,
        gas: 1_000_000,
        gasPrise: '2',
      });
    const message2 = await inbox.methods.message().call();
    expect(message2).toEqual('New test message');
  });
});
