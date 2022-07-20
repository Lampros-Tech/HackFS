const hre = require("hardhat");

async function main() {
  const mainContract = await hre.ethers.getContractFactory("Stack");
  const stack = await mainContract.deploy();

  await stack.deployed();

  console.log("MainContract deployed to:", stack.address); // 0xe76734cFCcfDDD819A2245bc2f68E3da8129f7D6

  const customtoken = await hre.ethers.getContractFactory("customToken");
  const custom = await customtoken.deploy(1000,stack.address);

  await custom.deployed();

  console.log("CustomToken deployed to:", custom.address); // 0xA6252028766C0C010Df8DF49c20EC4EEe2291504
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
