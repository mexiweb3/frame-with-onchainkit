import { FrameMetadataType } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '../config';

const initFrame: FrameMetadataType = {
    buttons: [
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
    ],
    image: {
        src: `https://ipfs.io/ipfs/bafkreibq4sjhcuuaktf23xun4vetvovoh65fk23ryfs4gdgmuhipr2rlle`,
        aspectRatio: '1.91:1'
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
};

const projectFrame: FrameMetadataType = {
    buttons: [
        {
            label: 'Back',
        },
    ],
    image: {
        src: `${NEXT_PUBLIC_URL}/park-2.png`,
        aspectRatio: '1:1',
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
};

const passportFrame: FrameMetadataType = {
    buttons: [
        {
            label: 'Back',
        },
    ],
    image: {
        src: `${NEXT_PUBLIC_URL}/park-3.png`,
        aspectRatio: '1:1',
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
};

const qfFrame: FrameMetadataType = {
    buttons: [
        {
            label: 'Back',
        },
        {
            label: '<',
        },
        {
            label: '>',
        },
    ],
    image: {
        src: `${NEXT_PUBLIC_URL}/qf0.png`,
        aspectRatio: '1:1',
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
};

const qfFrame1: FrameMetadataType = {
    buttons: [
        {
            label: 'Back',
        },
        {
            label: '<',
        },
        {
            label: '>',
        },
    ],
    image: {
        src: `${NEXT_PUBLIC_URL}/qf1.png`,
        aspectRatio: '1:1',
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
};

export { initFrame, projectFrame, passportFrame, qfFrame, qfFrame1 };