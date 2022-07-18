const hre = require("hardhat");

async function main() {
  const customtoken = await hre.ethers.getContractFactory("customToken");
  const custom = await customtoken.deploy(1000);

  await custom.deployed();

  console.log("CustomToken deployed to:", custom.address); // 0xE6A15ffDe86fA2764a00433049a65c30e70d8eBf
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
