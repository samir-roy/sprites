module.exports = {
  clearMocks: true,
  transform: {
    '\\.m?[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/css-stub.tsx',
  },
  testEnvironment: 'jsdom',
};
