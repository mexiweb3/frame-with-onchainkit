import { NextRequest } from 'next/server';
import { ImageResponse } from '@vercel/og';

export const dynamic = 'error';
export const revalidate = 86400;
export const runtime = 'edge';


const generateFrameImage = async (content: React.ReactNode) => {
    const imageResponse = new ImageResponse(<div>{content}</div>, {
        width: 1200,
        height: 630,
    });
    return imageResponse;
};

export async function GET(_request: NextRequest, { params }: { params: { index: number } }) {
    const images = [<img src="https://i.ytimg.com/vi/j1FkGgTvwvU/maxresdefault.jpg" />];

    return generateFrameImage(images[params.index]);
}
