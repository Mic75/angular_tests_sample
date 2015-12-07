# angular_tests_sample
A basic setup for angular unit tests using [karma](http://karma-runner.github.io/0.13/index.html) with [jasmine](http://jasmine.github.io/) and [phantomjs](http://phantomjs.org/)

## Prerequisites

### Linux & OS X
[Node Version Manager](https://github.com/creationix/nvm) (NVM). This tool allows you easily install and manage multiple version of Node.js on the same system.
To install or update nvm, you can use the install script using cURL:

   curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash


### Windows
NVM not being compatible with Windows. Download the installer from Node.js website [here](https://nodejs.org/dist/v4.2.3/node-v4.2.3-x86.msi) and run it.

## Pre-installation
### Linux & OS X
Navigate at the root of the repository and run:
   nvm install
The command will install the good version of node thanks to the .nvmrc file.

### Windows
Nothing to do. Just ensure that the version of you node.js installation matches the one from the .nvmrc file of this repository.
To check your node version:
   node -v

## Installation
Under the root folder of the repository, run:
   npm install

## Run the tests
If everythig went good so far, congrats, you're done!
Just run the following command to see if the tests are properly running:
   npm run test
