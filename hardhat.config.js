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
        "94a13102cdee9fc175d00a831830cfbdc575baaa70ada1e58b85d845e8a674af",
      ],
    },
  },
};

// stack - 0x4f2c50445F93bCA971Ca42830700f3a1a0D12554
// token - 0xE6A15ffDe86fA2764a00433049a65c30e70d8eBf
