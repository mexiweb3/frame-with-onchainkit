// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://frame-with-onchainkit.vercel.app/';
export const BASE_NFT_MINTER_ADDRESS = '0x32eaf7a1dc40647bcc2ad987137cd0ed57d06351';
export const NEYNAR_ONCHAIN_KIT = process.env.NEXT_NEYNAR_ONCHAIN_KIT!;
