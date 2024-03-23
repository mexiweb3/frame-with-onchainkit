import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL, NEYNAR_ONCHAIN_KIT } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
	const body: FrameRequest = await req.json();
	const { isValid, message } = await getFrameMessage(body, { neynarApiKey: NEYNAR_ONCHAIN_KIT });

	if (!isValid) {
		return new NextResponse('Message not valid', { status: 500 });
	}

	const text = message.input || '';
	let state = {
		page: 0,
		isHome: false,
	};
	try {
		state = JSON.parse(decodeURIComponent(message.state?.serialized));
	} catch (e) {
		console.error(e);
	}

	/**
	 * Use this code to redirect to a different page
	 */
	if (message?.button === 3) {
		return NextResponse.redirect(
			'https://www.google.com/search?q=cute+dog+pictures&tbm=isch&source=lnms',
			{ status: 302 },
		);
	}
	if (message?.button === 1 && !state.isHome) {
		state = {
			page: 0,
			isHome: true,
		};
	}

	return new NextResponse(
		getFrameHtmlResponse({
			buttons: [
				{
					label: `State: ${state?.page || 0} & ${body.untrustedData.buttonIndex || 0}`,
				},
				{
					// action: 'post',
					label: state.isHome ? 'Hello' : 'Back',
					// target: `${NEXT_PUBLIC_URL}`,
				},
				{
					action: 'post_redirect',
					label: 'Dog pictures',
				},
			],
			image: {
				src: `${NEXT_PUBLIC_URL}/park-1.png`,
			},
			postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
			state: {
				page: state?.page + 1,
				time: new Date().toISOString(),
			},
		}),
	);
}

export async function POST(req: NextRequest): Promise<Response> {
	return getResponse(req);
}

export const dynamic = 'force-dynamic';
