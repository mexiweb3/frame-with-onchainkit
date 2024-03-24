import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { encodeFunctionData, parseEther } from 'viem';
import { base } from 'viem/chains';
import BaseNftContractAbi from '../../_contracts/BaseNftContractAbi';
import { BASE_NFT_MINTER_ADDRESS, NEYNAR_ONCHAIN_KIT } from '../../config';
import type { FrameTransactionResponse } from '@coinbase/onchainkit/frame';

async function getResponse(req: NextRequest): Promise<NextResponse | Response> {
  const body: FrameRequest = await req.json();
  const { isValid } = await getFrameMessage(body, { neynarApiKey: NEYNAR_ONCHAIN_KIT, allowFramegear: true });

  if (!isValid) {
    return new NextResponse('Message not valid', { status: 500 });
  }

  const data = encodeFunctionData({
    abi: BaseNftContractAbi,
    functionName: 'awardItem',
    args: ['https://ipfs.io/ipfs/bafybeiduk3eyw6pdtqp4mr6wtws3pjzu4fdcunxbisq55bf2fnrjrgvm6y'],
  });

  const txData: FrameTransactionResponse = {
    chainId: `eip155:${base.id}`, // Remember Base Sepolia might not work on Warpcast yet
    method: 'eth_sendTransaction',
    params: {
      abi: [],
      data,
      to: BASE_NFT_MINTER_ADDRESS,
      value: parseEther('0.00004').toString(), // 0.00004 ETH
    },
  };
  return NextResponse.json(txData);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
