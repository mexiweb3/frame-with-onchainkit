"use client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';
import { initFrame } from './utils/framesMetadata';
import { FrameMetadata } from '@coinbase/onchainkit/frame';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";

// const frameMetadata = getFrameMetadata(initFrame);

// export const metadata: Metadata = {
// 	title: 'Cast and Vonate',
// 	description: 'Farcaster Frames for GitcoinGrants',
// 	openGraph: {
// 		title: 'Cast and Vonate',
// 		description: 'Farcaster Frames for GitcoinGrants',
// 		images: [`${NEXT_PUBLIC_URL}/default.jpg`],
// 	},
// 	other: {
// 		...frameMetadata,
// 	},
// };

// export default function Page() {
// 	return (
// 		<>
// 			<h1>Cast and Vonate</h1>
// 		</>
// 	);
// }

// const apolloClient = new ApolloClient({
// 	uri: "https://grants-stack-indexer-v2.gitcoin.co/graphql",
// 	cache: new InMemoryCache(),
// });

// export async function getStaticProps() {
// 	const { data } = await apolloClient.query({
// 		query: gql`
// 		query {
// 			application(
// 				chainId: 8453
// 				id: "0"
// 				roundId: "0xccbde000bd8006bab437f2efbe6ecb0a3eb334af"
// 			) {
// 				id
// 				metadata
// 			}
// 		}
// 	  `,
// 	});
  
// 	return {
// 	  props: {
// 		bannerImg: data.application.metadata.application.project.bannerImg
// 	  },
// 	};
//   }

export default function HomePage() {
	// const [urlImage, setUrlImage] = useState('');

	// const router = useSearchParams();
	// console.log(router)

	// useEffect(() => {
	// 	console.log('useeffect');
	// 	apolloClient
	// 		.query({
	// 			query: gql`
	// 				query {
	// 					application(
	// 						chainId: 8453
	// 						id: "0"
	// 						roundId: "0xccbde000bd8006bab437f2efbe6ecb0a3eb334af"
	// 					) {
	// 						id
	// 						metadata
	// 					}
	// 				}
	// 	  		`,
	// 		})
	// 		.then((result) => {
	// 			console.log(result.data.application.metadata.application.project.bannerImg);
	// 			setUrlImage(result.data.application.metadata.application.project.bannerImg);
	// 		});
	// }, []);

	return (
		<FrameMetadata
			buttons={[
				{
					label: 'Vonate',
					action: "link",
					target: 'https://explorer.gitcoin.co/#/round/8453/0x5d1b2d06d472ffff89edc666101b56c35d1217d8/1'
				},
				{
					label: 'Passport',
				},
				{
					label: 'What is QF?',
				},
				{
					action: 'tx',
					label: 'Mint',
					target: `${NEXT_PUBLIC_URL}/api/tx`,
					postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
				},
			]}
			image={{
				src: `https://ipfs.io/ipfs/bafkreibq4sjhcuuaktf23xun4vetvovoh65fk23ryfs4gdgmuhipr2rlle`,
				aspectRatio: '1.91:1'
			}}
			postUrl={`${NEXT_PUBLIC_URL}/api/frame`}
		/>
	);
}