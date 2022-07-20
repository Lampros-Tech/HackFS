/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/1786917adca6412da6e31f6444c0174a",
      accounts: [
        "67cd81819a7101989d2f86d501508dd606ca4aa3f475376314f186bb4e672454",
      ],
    },
  },
};

// stack - 0x1755579435effA2ABb0cC364B2C86319C56ae81E
// token - 0xcD55421C55034f2D14768C4c174462fAdC8C03F7