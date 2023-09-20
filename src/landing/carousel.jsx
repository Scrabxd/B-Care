import './carousel.css'
import React, { useState, useEffect } from 'react';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';
// import Image, { StaticImageData } from 'next/image';

const AUTOMATIC_INTERVAL = 5000;



const Card = ({ asset, title, subtitle, content }) => (
  <div className='card-carousel rounded-[10%] shadow-xl max-w-auto grid gap-0 grid-cols-5'>
    <div className='col-coarousel-l col-span-2 p-6 flex justify-center text-center' style={{backgroundImage: 'radial-gradient(#90ECFF, #34A5AB)' }}>
      <div className='h-auto relative flex flex-col items-center justify-center'>
        <div className='image-carousel m-4 rounded-full w-[128px] h-[128px] overflow-hidden'>
          <img className="object-cover h-full w-full" src={asset} alt="Test" />
        </div>
        <h3 className="title mx-3 text-2xl leading-snug tracking-[-0.01rem] font-bold">{title}</h3>
        <h4 className="subtitle col-span-2 font-medium mb-2 text-center">{subtitle}</h4>
      </div>
    </div>
    <div className='col-coarousel-r col-span-3 flex items-center p-6 bg-white'>
        <blockquote className="text-xl mb-4 italic text-gray-600">{content}</blockquote>
    </div>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive < count - 1 ? prevActive + 1 : 0));
    }, AUTOMATIC_INTERVAL);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className='carousel'>
      {active > 0 && (
        <button
          className='nav-carousel left text-[#7655C1] hover:text-[#552CB3]'
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeft/>
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
            '--pointer-events': active === i ? 'auto' : 'none',
            opacity: Math.abs(active - i) >= 3 ? '0' : '1',
            display: Math.abs(active - i) > 3 ? 'none' : 'block',
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className='nav-carousel right text-[#7655C1] hover:text-[#552CB3]'
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRight/>
        </button>
      )}
    </div>
  );
};

export { Carousel, Card };