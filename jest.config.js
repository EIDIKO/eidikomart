

// jest.config.js or package.json
module.exports  = {
  'preset': 'ts-jest',
  'testEnvironment': 'node',
  'coverageDirectory': './coverage',
  'collectCoverage': true,
  'collectCoverageFrom': ['src/**/*.ts'],
  'coverageReporters': ['lcov', 'text', 'text-summary'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  
};


module.exports = {
 
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      'branches': 80,
      'functions': 80,
      'lines': 80,
      'statements': 80
    }
  }
};


