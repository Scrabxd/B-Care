'use client'

import './carousel.scss'
import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import Image, { StaticImageData } from 'next/image';

const MAX_VISIBILITY = 3;

interface CardProps {
  asset: StaticImageData;
  title: string;
  subtitle: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ asset, title, subtitle, content }) => (
  <div className='card-carousel rounded shadow-xl max-w-auto grid gap-0 md:grid-cols-5'>
    <div className='col-span-2 p-6 grid gap-0 md:grid-cols-2' style={{backgroundImage: 'linear-gradient(135deg, #6DFFD6, #34A5AB)' }}>
        <div className='col-span-2 h-auto'>
            <div style={{ borderRadius: '50%', width: '128px', height: '128px', overflow: 'hidden' }} className='m-4'>
                <Image style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={asset} alt="Test" />
            </div>
            <h3 className="h3 mx-4">{title}</h3>
        </div>
        <h4 className="col-span-2 h4 mb-2 text-center">{subtitle}</h4>
    </div>
    <div className='col-span-3 flex items-center p-6' style={{backgroundColor:"white"}}>
        <blockquote className="text-xl mb-4 text-gray-600">{content}</blockquote>
    </div>
  </div>
);

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);

  return (
    <div className='carousel'>
      {active > 0 && (
        <button
          className='nav-carousel left text-gray-400'
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className='card-carousel-container'
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            opacity:
              Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            display:
              Math.abs(active - i) > MAX_VISIBILITY
                ? 'none'
                : 'block',
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className='nav-carousel right text-gray-400'
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

export { Carousel, Card };