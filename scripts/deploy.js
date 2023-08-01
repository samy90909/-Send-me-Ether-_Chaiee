// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const chai = await hre.ethers.getContractFactory("chai");
  const contract = await chai.deploy();//INstance of contract must review
  await contract.deployed();
  console.log("Address of contract:", contract.address);
  s
  const addresses = [owner.address, from1.address, contract.address];
  console.log("Before buying chai");
  await consoleBalances(addresses);//Calls

  const amount = { value: hre.ethers.utils.parseEther("1") }
  await contract, connect(form1).buyChai("form1", "Very nice chai", amount);
  await contract, connect(form1).buyChai("form2", "Very nice chaiee", amount);
  await contract, connect(form1).buyChai("form3", "Very nice chaieee", amount);

  console.log("After buying chai");
  await consoleBalances(addresses);//Calls



}
async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}
//One function->js for loop through addresses  consoles balance
async function consoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${counter}balance:`, await getBalances(address))
  }
}
async function consoleMemos(memos) {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.address;
    const message = memo.message;
    console.log(`At ${timestamp},name ${name},address ${from},message ${message}`);
  }

}




// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
