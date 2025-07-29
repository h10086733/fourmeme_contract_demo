async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const tokenManagerAddress ="0x5c952063c7fc8610FFDB798152D69F0B9550762b";

  const TokenTradeWithFee = await ethers.getContractFactory("TokenTradeWithFee");
  const tokenTrade = await TokenTradeWithFee.deploy(tokenManagerAddress, deployer.address, 1);
  await tokenTrade.deployed();
  console.log("TokenTradeWithFee deployed to:", tokenTrade.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
