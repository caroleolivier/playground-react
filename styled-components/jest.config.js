module.exports = {
    verbose: true,
    setupFiles: [
        './enzyme-setup.js'
    ],
    // mock css modules
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
    // need both config points below for tsx to be picked up as tests to run
    testRegex: '/*.test.(ts|tsx|js)$',
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    // one transform is run per file
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest'
    }
};
