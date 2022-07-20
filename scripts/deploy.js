const hre = require("hardhat");

async function main() {
  const mainContract = await hre.ethers.getContractFactory("Stack");
  const stack = await mainContract.deploy();

  await stack.deployed();

  console.log("MainContract deployed to:", stack.address); // 0x1755579435effA2ABb0cC364B2C86319C56ae81E

  const customtoken = await hre.ethers.getContractFactory("customToken");
  const custom = await customtoken.deploy(1000,stack.address);

  await custom.deployed();

  console.log("CustomToken deployed to:", custom.address); // 0xcD55421C55034f2D14768C4c174462fAdC8C03F7
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
