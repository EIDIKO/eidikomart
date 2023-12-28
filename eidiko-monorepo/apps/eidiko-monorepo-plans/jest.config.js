

// jest.config.js or package.json
module.exports  = {
  "preset": "ts-jest",
  "testEnvironment": "node",
  "coverageDirectory": "./coverage",
  "collectCoverage": true,
  "collectCoverageFrom": ["src/**/*.ts"],
  "coverageReporters": ["lcov", "text", "text-summary"],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
}
