const hre = require("hardhat");

async function main() {
  const customtoken = await hre.ethers.getContractFactory("customToken");
  const custom = await customtoken.deploy(1000);

  await custom.deployed();

  console.log("CustomToken deployed to:", custom.address); // 0x5Dae69A81418d21d7F24dB9cFfE6D2446CCFA18e
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
