const fs = require('fs');
const path = require('path');
const solc = require('solc');

const contractFileName = 'Inbox.sol';
const contractPath = path.resolve(__dirname, 'contracts', contractFileName);

const contractContent = fs.readFileSync(contractPath, 'utf-8');

const input = {
  language: 'Solidity',
  sources: {
    [contractFileName]: {
      content: contractContent,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

// Check doc: https://github.com/ethereum/solc-js#readme
const output = solc.compile(JSON.stringify(input));

const outputFilePath = path.resolve(__dirname, 'contracts', 'output.json');
fs.writeFileSync(outputFilePath, output);

/**
 * Assembly => search for 'assembly' property:
 * - it enumerates all the assembly operations involved.
 *   In consequence, the GAS can be calculated base on it.
 *   Check 'assembly' & 'gasEstimates'
 * */

/**
 * ABI => Search for 'abi' property
 * - Lists all the interfaces accessible from outside
 */

/**
  * Bytecode => Search for 'bytecode' property
  * Stores the code to be deployed on the Ethereum Network
  */
