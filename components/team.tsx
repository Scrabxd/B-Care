'use client'

import React from 'react';
import Image, { StaticImageData } from 'next/image';

const MAX_VISIBILITY = 3;
const AUTOMATIC_INTERVAL = 5000;

interface CardProps {
  asset: StaticImageData;
  name: string;
  content: string;
  linkedin: string;
}

const Card: React.FC<CardProps> = ({ asset, name, content, linkedin }) => (
    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <div className="h-48 w-48 relative inline-flex flex-col bg-white rounded shadow-md -mt-1 mb-2">
            <Image layout="fill" objectFit="cover" className="team-image" src={asset} alt="Test" />
        </div>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{name}</h4>
        <p className="text-gray-600 text-center mb-1">{content}</p>
        <a href={linkedin} target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" className='linkedin-icon'>
                <path fill="#0288d1" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#fff" d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"></path>
            </svg>
        </a>
    </div>
);

export { Card };