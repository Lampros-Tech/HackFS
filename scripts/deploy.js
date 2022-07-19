const hre = require("hardhat");

async function main() {
  const mainContract = await hre.ethers.getContractFactory("Stack");
  const stack = await mainContract.deploy();

  await stack.deployed();

  console.log("MainContract deployed to:", stack.address); // 0xAc513D71FAfDB832DE52B8Be97052f08668bF4fa

  const customtoken = await hre.ethers.getContractFactory("customToken");
  const custom = await customtoken.deploy(1000,stack.address);

  await custom.deployed();

  console.log("CustomToken deployed to:", custom.address); // 0x844fC307f49d5574Cd37375d6bB95E786785234F
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
