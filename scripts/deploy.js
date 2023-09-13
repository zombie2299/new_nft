async function main() {
  const MyNft = await ethers.getContractFactory("MyNft");

  // Start deployment, returning a promise that resolves to a contract object
  const nMyNft = await MyNft.deploy();
  console.log("Contract deployed to address:", nMyNft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  //0xCe868EfbfFC0Ec6508eC110f0732cBaDDF3375cB