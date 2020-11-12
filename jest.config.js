module.exports = {
    verbose: true,
    collectCoverage: true,
    testPathIgnorePatterns: [
        '/node_modules/',
        '/.history/',
        '/.git',
        '/contracts/'
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$'
}