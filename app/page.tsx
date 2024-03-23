import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';
import { initFrame } from './utils/framesMetadata';

const frameMetadata = getFrameMetadata(initFrame);

export const metadata: Metadata = {
	title: 'frames for gg',
	description: 'LFG',
	openGraph: {
		title: 'frames for gg',
		description: 'LFG',
		images: [`${NEXT_PUBLIC_URL}/park-1.png`],
	},
	other: {
		...frameMetadata,
	},
};

export default function Page() {
	return (
		<>
			<h1>frames for gg</h1>
		</>
	);
}
