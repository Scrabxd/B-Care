import AssetTest from '@/public/images/asset-profile-test.jpg'
import Image from 'next/image'

export default function TeamSection() {
    return (
      <section id="team-section" className="relative">
  
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
  
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
              <h2 className="h2 mb-4">Meet our Team</h2>
              <p className="text-xl text-gray-600">Designers, Developers and Business manager from <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#552CB3] to-[#6DFFD6]">B-CARE</span></p>
            </div>
  
            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
  
              {/* 1st item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-xl">
                <div className="h-48 w-48 relative inline-flex flex-col bg-white rounded shadow-md -mt-1 mb-2">
                    <Image layout="fill" objectFit="cover" className="rounded" src={AssetTest} alt="Test" />
                </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
                <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
  
              {/* 2nd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-xl">
                <div className="h-48 w-48 relative inline-flex flex-col bg-white rounded shadow-md -mt-1 mb-2">
                    <Image layout="fill" objectFit="cover" className="rounded" src={AssetTest} alt="Test" />
                </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
                <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
  
              {/* 3rd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-xl">
                <div className="h-48 w-48 relative inline-flex flex-col bg-white rounded shadow-md -mt-1 mb-2">
                    <Image layout="fill" objectFit="cover" className="rounded" src={AssetTest} alt="Test" />
                </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
                <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
  
              {/* 4th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-xl">
                <div className="h-48 w-48 relative inline-flex flex-col bg-white rounded shadow-md -mt-1 mb-2">
                    <Image layout="fill" objectFit="cover" className="rounded" src={AssetTest} alt="Test" />
                </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
                <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
  
              {/* 5th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-xl">
                <div className="h-48 w-48 relative inline-flex flex-col bg-white rounded shadow-md -mt-1 mb-2">
                    <Image layout="fill" objectFit="cover" className="rounded" src={AssetTest} alt="Test" />
                </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
                <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
  
              {/* 6th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md hover:shadow-xl">
                <div className="h-48 w-48 relative inline-flex flex-col bg-white rounded shadow-md -mt-1 mb-2">
                    <Image layout="fill" objectFit="cover" className="rounded" src={AssetTest} alt="Test" />
                </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
                <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
  
            </div>
  
          </div>
        </div>
      </section>
    )
  }