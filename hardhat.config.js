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

// stack - 0xe76734cFCcfDDD819A2245bc2f68E3da8129f7D6
// token - 0xA6252028766C0C010Df8DF49c20EC4EEe2291504