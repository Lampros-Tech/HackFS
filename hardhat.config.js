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

// stack - 0x5a98d2f1533C6b01479129A2D6D11FAFFdA5c7E3
// token - 0x5Dae69A81418d21d7F24dB9cFfE6D2446CCFA18e
