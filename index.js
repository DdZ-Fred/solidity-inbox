require('dotenv').config();
const web3 = require('./web3');
const InboxContract = require('./build/contracts/Inbox.json');

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

const main = async () => {
  const accounts = await web3.eth.getAccounts();
  const [deployer, owner] = accounts;

  const inbox = await new web3.eth.Contract(InboxContract.abi)
  // Calls the contract constructor method and so the argument
  // is actually the initialMessage
    .deploy({
      data: InboxContract.bytecode,
      arguments: ['Hi There'],
    })
    .send({
      from: deployer,
      gas: 1_000_000, // gasLimit
      gasPrice: '2',
    })
    .on('transactionHash', (transactionHash) => {
      console.log(`[TRANSACTION-HASH] ${transactionHash}`);
    })
    .on('receipt', (receipt) => {
      console.log(`[CONTRACT-ADDRESS] ${receipt.contractAddress}`);
    });
  console.log('[Accounts]', { accounts, deployer, inbox });
};

main();
