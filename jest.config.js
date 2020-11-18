module.exports = {
  verbose: true,
  collectCoverage: false,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.history/',
    '/.git',
    '/contracts/',
    'test-environment.config.js',
    'truffle-config.js',
    'web3.js',
    'web3Provider.js',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  extraGlobals: ['Math'],
};
