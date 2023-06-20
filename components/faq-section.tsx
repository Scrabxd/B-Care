'use client'

import Image from 'next/image'
import AssetSignin from '@/public/images/asset-faq.jpg'

export default function FAQ() {

  return (
    <section id='FAQ' className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-6 md:pt-10">

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="mb-6 pr-36">
                <h3 className="h3 mb-3">FAQ</h3>
                <p className="text-xl text-gray-600 pr-24">Answers to Your Most Commonly Asked Questions</p>
              </div>
              {/* Tabs */}
              <div className="mb-8 md:mb-0">
                <div className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg`}>
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">How does the NFT-based tracking work?</div>
                    <div className="text-gray-600">In B-care we securely record and store patient data using blockchain technology, assigning a unique NFT to each patient to represent their medical journey.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </div>
                <div className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg`}>
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">How is patient privacy and data security maintained?</div>
                    <div className="text-gray-600">We prioritize patient privacy and data security. We use encryption and blockchain to protect data.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
                <div className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg`}>
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">How does B-care benefit cancer patients?</div>
                    <div className="text-gray-600">B-care empowers patients by providing a transparent record of their journey, enabling them to track progress and monitor treatment effectiveness.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </div>
                <div className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg`}>
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Does it have any cost?</div>
                    <div className="text-gray-600"> We plan to sell this services to insurance companies so they will take the cost and be brought as a feature in their services.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
                <div className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg`}>
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1"> Is it hard to use?</div>
                    <div className="text-gray-600">We plan to make it as easy to use as possible provided the fact that it will be used by people of all ages.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs items */}
            <div className="md:col-span-6 relative flex flex-col gap-6 pb-3 pt-24" data-aos="zoom-y-out">
                <div className="h-full w-full relative inline-flex flex-col bg-white rounded shadow-md mt-16">
                    <Image layout="fill" objectFit="cover" className="rounded" src={AssetSignin} alt="Features bg" />
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}