'use client'

import { useState, useRef, useEffect } from 'react'
import {StatisticsChart1} from './statistics';

export default function Features() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-0">
            <h1 className="h2 mb-4">Statistics</h1>
            {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content Left */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6 text-center" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-6 xl:pr-8 mb-8">
                <div>
                  <h3 className="h3 mb-3">Most common types of cancer in 2020</h3>
                  <StatisticsChart1 />
                </div>
              </div>
            </div>
            {/* Content Right */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6 text-center" data-aos="fade-left">
              <div className="md:pr-4 lg:pr-6 xl:pr-8 mb-8">
                <div>
                  <h3 className="h3 mb-3">People who were affected by cancer in 2018</h3>
                  {/* <StatisticsChart2 /> */}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}