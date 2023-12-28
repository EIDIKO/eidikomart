// jest.config.js
module.exports = {
  testEnvironment: 'node',
  // Add other Jest configuration options as needed
};


module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};


