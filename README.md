#STEP-1:Clone GitRepo
	
git clone url
	
#STEP-2: Install Node JS, it will give you npm as well.


#STEP-3: Now install pnpm globally


npm install -g pnpm --no-fund

#STEP-4: Now check node, npm and pnpm

node -v
npm -v
pnpm -v

#STEP-5: Now download nvm-setup.zip

Download nvm-setup.zip from
https://github.com/coreybutler/nvm-windows/releases

#STEP-6: Now install nvm-setup


Unzip nvm-setup.zip
install click on nvm-setup.exe
It will try to insall a node js, if it's already installed it ask you tocontrol it you can say yes

#STEP-6: Now check nvm version
nvm -v

#STEP-7: Use nvm version 16.14


nvm -v
C:\Users\tonda>nvm use 16.14
node v16.14.2 (64-bit) is not installed.


#STEP-7: Install nvm version 16.14


C:\Users\tonda>nvm install 16.14.2
Downloading node.js version 16.14.2 (64-bit)...
Extracting node and npm...
Complete
npm v8.5.0 installed successfully.
Installation complete. If you want to use this version, type
nvm use 16.14.2

#STEP-8: Run application

node index.js

#STEP-9: Install jest


npm install --save-dev jest

#STEP-10: Run Tests

npx jest

#STEP-10: Run Tests with npm script:

npm test



#STEP-11: Install Nx

npm install -g create-nx-workspace


npm install --global yarn

yarn global add create-nx-workspace

yarn global add nx


#STEP-11.1: code coverage

pnpm install --save-dev jest ts-jest

//in  jest.config.js add below
module.exports = {
  "preset": "ts-jest",
  "testEnvironment": "node",
  "coverageDirectory": "./coverage",
  "collectCoverage": true,
  "collectCoverageFrom": ["src/**/*.ts"],
  "coverageReporters": ["lcov", "text", "text-summary"]
}

//in package.json add below
"scripts": {
  "test": "jest",
  "test:coverage": "jest --coverage"
}



pnpm run test:coverage eidiko-monorepo-plans

#STEP-11.2: code lint

pnpm install --save-dev eslint


pnpm run test:coverage eidiko-monorepo-plans

#STEP-11.3: ESLINT for Type script


npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin



#STEP-12: Create an NX workspace


create-nx-workspace my-monorepo

#STEP-13: install @nrwl/cli as nx is not @nrwl/cli


npm install -g @nrwl/cli

#pnpm install

#pnpm nx run workspace-next:lint --configuration=ci
 