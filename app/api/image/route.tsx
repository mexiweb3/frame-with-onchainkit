import { NextRequest } from 'next/server'

// import { ImageResponse } from "@vercel/og";

export const dynamic = 'error'
export const revalidate = 86400
export const runtime = 'edge'

export const FRAME_IMAGE_DIMENSIONS = {
    width: 1200,
    height: 630,
}

export async function GET(_request: NextRequest, { params }: { params: { index: number } }) {
    const images = [
        'https://i.ytimg.com/vi/j1FkGgTvwvU/maxresdefault.jpg'
    ]

    return (
        images[params.index]
    )
}