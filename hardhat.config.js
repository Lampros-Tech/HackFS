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

// stack - 0xAc513D71FAfDB832DE52B8Be97052f08668bF4fa
// token - 0x844fC307f49d5574Cd37375d6bB95E786785234F