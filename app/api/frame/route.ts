import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL, NEYNAR_ONCHAIN_KIT } from '../../config';
import { initFrame, projectFrame, passportFrame, qfFrame } from '../../utils/framesMetadata';

function getNewPageId(prevPage: number, buttonIndex: number) {
	if (prevPage === 0) {
		return buttonIndex * 10;
	}
	else if (buttonIndex === 1) {
		return 0;
	}
}

function renderFrameMetadata(page: number) {
	switch (page) {
		case 0:
			return initFrame;
		case 10:
			return projectFrame;
		case 20:
			return passportFrame;
		case 30:
			return qfFrame;
		default:
			return initFrame;
	}

}

async function getResponse(req: NextRequest): Promise<NextResponse> {
	const body: FrameRequest = await req.json();
	const { isValid, message } = await getFrameMessage(body, { neynarApiKey: NEYNAR_ONCHAIN_KIT, allowFramegear: true });
	// start in 1
	const buttonIndex = body.untrustedData.buttonIndex;

	if (!isValid) {
		return new NextResponse('Message not valid', { status: 500 });
	}

	let state = {
		page: getNewPageId(0, buttonIndex),
		// isHome: false,
	};
	try {
		state = JSON.parse(decodeURIComponent(message.state?.serialized));
	} catch (e) {
		console.error(e);
	}

	/**
	 * Use this code to redirect to a different page
	 */
	// if (buttonIndex === 1 && !state.isHome) {
	// 	state = {
	// 		page: 0,
	// 		isHome: true,
	// 	};
	// }

	return new NextResponse(
		getFrameHtmlResponse({
			...renderFrameMetadata(state?.page || 0),
			// buttons: [
			// 	{
			// 		label: `State: ${state?.page || 0} & ${body.untrustedData.buttonIndex || 0}`,
			// 	},
			// 	{
			// 		// action: 'post',
			// 		label: state.isHome ? 'Hello' : 'Back',
			// 		// target: `${NEXT_PUBLIC_URL}`,
			// 	},
			// 	{
			// 		action: 'post_redirect',
			// 		label: 'Dog pictures',
			// 	},
			// ],
			// image: {
			// 	src: `${NEXT_PUBLIC_URL}/park-1.png`,
			// },
			// postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
			state: {
				page: getNewPageId(state?.page || 0, buttonIndex),
				time: new Date().toISOString(),
			},
		}),
	);
}

export async function POST(req: NextRequest): Promise<Response> {
	return getResponse(req);
}

export const dynamic = 'force-dynamic';
