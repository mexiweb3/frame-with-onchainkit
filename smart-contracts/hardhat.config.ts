import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

dotenv.config();

const config: HardhatUserConfig = {
	solidity: {
		version: "0.8.20",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			}
		}
	},
	networks: {
		baseSepolia: {
			url: process.env.BASE_TESTNET_URL || "",
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
		},
	},
	etherscan: {
		  apiKey: {
			baseSepolia: process.env.BASESCAN_API_KEY!,
		  },
		  customChains: [
			  {
				  network: "baseSepolia",
				  chainId: 84532,
				  urls: {
					  apiURL: "https://api-sepolia.basescan.org/api",
					  browserURL: "https://api-sepolia.basescan.org/",
				  },
			  },
		  ],
	  },
	  sourcify: {
		  enabled: false
	  }
};

export default config;
