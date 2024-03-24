import { viem } from "hardhat";

async function main() {
	const ggvonator = await viem.deployContract("GGVonator");

	console.log("ggvonator deployed to:", ggvonator.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
