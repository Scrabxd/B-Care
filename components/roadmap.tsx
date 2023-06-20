import AssetTest from '@/public/images/asset-profile-test.jpg'
import Image from 'next/image'

export default function Roadmap() {
    return (
      <section id="roadmap" className="relative">
  
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
  
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-6 md:py-10">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
              <h2 className="h2 mb-2"><span className="bg-clip-text text-transparent bg-gradient-to-b from-[#552CB3] to-[#6DFFD6]">B-CARE</span> Roadmap</h2>
            </div>
  
            {/* Items */}
            <div className="timeline">
              <div className="timeline-step">
                <div className="timeline-icon border-q0 mb-14">
                  <svg className="svg-q0" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 48 64" style={{transform: "rotate(-45deg)"}}>
                    <path fill="#6DFFD6" d="M24 0C10.746 0 0 10.746 0 24c0 5.219 1.711 10.008 4.555 13.93.051.094.059.199.117.289l16 24a4.001 4.001 0 0 0 6.656 0l16-24c.059-.09.066-.195.117-.289C46.289 34.008 48 29.219 48 24 48 10.746 37.254 0 24 0Zm0 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"/>
                  </svg>
                </div>
                <div className="timeline-info">
                  <h4 className='h4 mb-2 text-[#6DFFD6]'>Q3 2023</h4>
                  <div className="line bg-[#6DFFD6]"></div>
                  <ul className="list-inside text-gray-600 text-left">
                    <li>• Project Settlement</li>
                    <li>• Beta Android App</li>
                    <li>• Cancer Tracker</li>
                    <li>• Social Website</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-step mt-24">
                <div className="timeline-icon border-q1 mb-14">
                  <svg className="svg-q1" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 60 64" style={{transform: "rotate(-45deg)"}}>
                    <path fill="#2392F5" d="m42.681 1.403-3.505 4.512c5.48 2.379 9.433 6.81 9.885 11.978H11.686c.448-5.168 4.312-9.597 9.792-11.978l-3.505-4.512c-.18-.328-.089-.656.181-.822.27-.165.63-.081.9.166l3.594 4.759a23.287 23.287 0 0 1 7.728-1.313c2.786 0 5.302.494 7.728 1.313l3.594-4.76a.62.62 0 0 1 .808-.165c.267.163.36.494.18.822h-.005ZM22.464 13.134c1.167 0 2.067-.822 2.067-1.887 0-.985-.9-1.888-2.067-1.888-1.078 0-2.067.903-2.067 1.888 0 1.065.989 1.887 2.067 1.887Zm15.994 0c1.167 0 2.067-.822 2.067-1.887 0-.985-.9-1.888-2.067-1.888-1.078 0-2.067.903-2.067 1.888 0 1.065.989 1.887 2.067 1.887ZM.813 39.3V24.125c0-2.134 1.796-3.938 4.223-3.938 2.337 0 4.134 1.806 4.134 3.938V39.3c0 2.216-1.797 3.938-4.134 3.938-2.427 0-4.223-1.722-4.223-3.938Zm50.582 0V24.125c0-2.134 1.886-3.938 4.224-3.938 2.337 0 4.223 1.806 4.223 3.938V39.3c0 2.216-1.886 3.938-4.223 3.938-2.338 0-4.224-1.722-4.224-3.938Zm-39.62 8.778v-27.81H49.15v27.81c0 1.64-1.527 3.035-3.324 3.035h-3.682v8.612c0 2.134-1.886 3.856-4.224 3.856-2.337 0-4.223-1.722-4.223-3.856v-8.612h-6.558v8.612c0 2.134-1.797 3.856-4.134 3.856-2.427 0-4.224-1.722-4.224-3.856v-8.612h-3.775c-1.707 0-3.231-1.394-3.231-3.035Z"/>
                  </svg>
                </div>
                <div className="timeline-info">
                  <h4 className='h4 mb-2 text-[#2392F5]'>Q1 2024</h4>
                  <div className="line bg-[#2392F5]"></div>
                  <ul className="list-inside text-gray-600 text-left">
                    <li>• Android App Launch</li>
                    <li>• Pre-Sale on Nomo Zeniq</li>
                    <li>• Public Launch on Zeniq Smart Chain</li>
                    <li>• Audit Contract</li>
                    <li>• Diabetes Tracker</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-step">
                <div className="timeline-icon border-q2 mb-14">
                  <svg className="svg-q2" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 46 57" style={{transform: "rotate(-45deg)"}}>
                    <path fill="#552CB3" fill-rule="evenodd" d="M31.291 9.1c1.969-2.41 3.296-5.763 2.933-9.1-2.837.114-6.269 1.913-8.303 4.318-1.826 2.135-3.42 5.546-2.992 8.817 3.164.248 6.394-1.624 8.362-4.035Zm7.096 21.181c.08 8.627 7.481 11.497 7.563 11.534-.06.202-1.182 4.089-3.899 8.107-2.35 3.472-4.789 6.929-8.63 7.003-3.773.071-4.988-2.263-9.305-2.263-4.313 0-5.662 2.188-9.233 2.334-3.708.14-6.534-3.756-8.9-7.216-4.844-7.076-8.544-19.997-3.575-28.718 2.468-4.33 6.878-7.075 11.667-7.143 3.639-.072 7.076 2.477 9.302 2.477 2.225 0 6.402-3.064 10.792-2.614 1.838.077 6.998.75 10.31 5.654-.268.169-6.157 3.635-6.092 10.845Z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div className="timeline-info">
                  <h4 className='h4 mb-2 text-[#552CB3]'>Q2 2024</h4>
                  <div className="line bg-[#552CB3]"></div>
                  <ul className="list-inside text-gray-600 text-left">
                    <li>• Launch</li>
                    <li>• Infuencer Marketing</li>
                    <li>• Beta iOS App</li>
                    <li>• Team Expansion</li>
                    <li>• Hypertension Tracker</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-step mt-24">
                <div className="timeline-icon border-q3 mb-14">
                  <svg className="svg-q3" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="-5 -5 53 80" style={{transform: "rotate(-45deg)"}}>
                    <path fill="#34A5AB" d="M47.969 6.35a2.011 2.011 0 0 0-2.188 0c-7.656 4.744-13.343 1.725-19.687-1.725-6.563-3.45-14.219-7.331-24.063-1.51C1.375 3.764.937 4.41.937 5.273V58.53c0 1.294.875 2.157 2.188 2.157 1.313 0 2.188-.863 2.188-2.157V36.753c7.218-3.881 12.468-1.078 18.593 2.156 4.157 2.157 8.75 4.529 14 4.529 3.063 0 6.563-.863 10.063-3.02.656-.43 1.093-1.077 1.093-1.94V8.291c0-.863-.437-1.51-1.093-1.941Z"/>
                  </svg>
                </div>
                <div className="timeline-info">
                  <h4 className='h4 mb-2 text-[#34A5AB]'>Q3 2024</h4>
                  <div className="line bg-[#34A5AB]"></div>
                  <ul className="list-inside text-gray-600 text-left">
                    <li>• Alpha Diagnosis IA</li>
                    <li>• Renal Insufficiency Tracker</li>
                    <li>• Beta iOS App</li>
                    <li>• Associations Expansion</li>
                    <li>• iOS App Launch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }