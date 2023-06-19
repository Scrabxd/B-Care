import assetTeam from '@/public/images/asset-teamwork.jpg'
import Image from 'next/image'

export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="py-6 md:py-10">

          {/* Section header */}
          <div className="max-w-3xl mx-28 text-start pb-8 md:pb-8">
            <h2 className="h2 mb-2">What are we doing</h2>
            <h2 className="h2 mb-2">in <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#552CB3] to-[#6DFFD6]">B-CARE</span></h2>
          </div>

          {/* Items */}
          <div className="max-w-auto grid gap-6 md:grid-cols-4">
            <div className="md:col-span-2 grid gap-6 md:grid-cols-2">
              {/* 1st item */}
              <div className="relative flex flex-col items-start p-6 bg-white rounded shadow-xl">
                <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#ffffff" fillRule="evenodd">
                    <rect className="fill-current text-gray-400" width="64" height="64" rx="32" />
                    <g transform="translate(16, 16)">
                      <path d="M29.064 10.802c-0.521 0.158-0.894 0.635-0.894 1.198 0 0.127 0.019 0.25 0.054 0.366l-0.002-0.009c0.336 1.088 0.529 2.338 0.529 3.634 0 7.036-5.704 12.74-12.74 12.74s-12.74-5.704-12.74-12.74c0-7.036 5.704-12.74 12.74-12.74 1.295 0 2.544 0.193 3.721 0.552l-0.090-0.024c0.105 0.032 0.226 0.050 0.351 0.050 0.691 0 1.25-0.56 1.25-1.25 0-0.561-0.369-1.035-0.877-1.194l-0.009-0.002c-1.302-0.402-2.798-0.634-4.349-0.634-8.418 0-15.242 6.824-15.242 15.242s6.824 15.242 15.242 15.242c8.418 0 15.242-6.824 15.242-15.242 0-1.55-0.231-3.045-0.661-4.454l0.028 0.108c-0.159-0.521-0.635-0.893-1.199-0.893-0.126 0-0.248 0.019-0.363 0.053l0.009-0.002zM16 8.25c0 0 0 0 0.001 0 0.611 0 1.206 0.070 1.777 0.202l-0.053-0.010c0.086 0.021 0.185 0.033 0.286 0.033 0.69 0 1.249-0.559 1.249-1.249 0-0.596-0.418-1.095-0.977-1.22l-0.008-0.002c-0.68-0.161-1.461-0.253-2.263-0.253-5.654 0-10.238 4.584-10.238 10.238s4.584 10.238 10.238 10.238c5.654 0 10.238-4.584 10.238-10.238 0-0.803-0.093-1.585-0.267-2.335l0.014 0.069c-0.136-0.554-0.629-0.958-1.215-0.958-0.69 0-1.25 0.56-1.25 1.25 0 0.093 0.010 0.184 0.029 0.271l-0.002-0.008c0.123 0.518 0.194 1.113 0.194 1.724 0 4.281-3.47 7.751-7.751 7.751s-7.751-3.47-7.751-7.751c0-4.281 3.47-7.751 7.75-7.751h0zM20.75 5v4.482l-5.634 5.634c-0.228 0.226-0.369 0.54-0.369 0.887 0 0.69 0.56 1.25 1.25 1.25 0.347 0 0.66-0.141 0.887-0.369l5.634-5.634h4.482c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0h-1.982l0.5-0.5h4.482c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0h-1.982l1.866-1.866c0.226-0.226 0.366-0.539 0.366-0.884 0-0.691-0.56-1.251-1.251-1.251-0.346 0-0.658 0.14-0.885 0.367v0l-1.865 1.865v-1.982c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 4.482l-0.5 0.5v-1.982c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0z"/>
                    </g>
                  </g>
                </svg>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Mision</h4>
                <p className="text-gray-600 text-start">Our mission is to revolutionize cancer patient care by providing an innovative system that utilizes Non-Fungible Tokens (NFTs) to track and document the progress of patients throughout their process.</p>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-start p-6 bg-white rounded shadow-xl">
                <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#ffffff" fillRule="evenodd">
                    <rect className="fill-current text-gray-400" width="64" height="64" rx="32" />
                    <g transform="translate(16, 16)">
                      <path d="M30.941 15.177c-9.787-11.183-20.096-11.187-29.882 0-0.192 0.219-0.31 0.507-0.31 0.823s0.117 0.605 0.311 0.825l-0.001-0.001c4.893 5.591 9.919 8.427 14.939 8.427h0.001c5.021 0 10.047-2.836 14.941-8.427 0.192-0.219 0.309-0.507 0.309-0.823s-0.117-0.604-0.31-0.825l0.001 0.001zM3.682 16c8.299-8.961 16.336-8.961 24.637 0-8.301 8.961-16.34 8.961-24.637 0zM16 10.75c-2.899 0-5.25 2.351-5.25 5.25s2.351 5.25 5.25 5.25c2.899 0 5.25-2.351 5.25-5.25v0c-0.004-2.898-2.352-5.246-5.25-5.25h-0zM16 18.75c-1.519 0-2.75-1.231-2.75-2.75s1.231-2.75 2.75-2.75c1.519 0 2.75 1.231 2.75 2.75v0c-0.002 1.518-1.232 2.748-2.75 2.75h-0z"/>
                    </g>
                  </g>
                </svg>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Vision</h4>
                <p className="text-gray-600 text-start">In B-care, we envision a world where patient data is securely stored, easily accessible, and can be used to inform treatment decisions, monitor progress, and contribute to advancements in cancer research.</p>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-start p-6 bg-white rounded shadow-xl">
                <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#ffffff" fillRule="evenodd">
                    <rect className="fill-current text-gray-400" width="64" height="64" rx="32" />
                    <g transform="translate(16, 16)">
                      <path d="M29.287 19.252c-0.486-0.206-1.052-0.326-1.646-0.326-0.65 0-1.267 0.144-1.82 0.402l0.027-0.011-5.121 2.301c-0.32-1.36-1.523-2.356-2.959-2.356-0.058 0-0.115 0.002-0.172 0.005l0.008-0h-3.711l-4.691-1.375c-0.104-0.032-0.225-0.051-0.349-0.051-0.001 0-0.002 0-0.003 0h-1.669v-0.257c0-0.69-0.56-1.25-1.25-1.25v0h-3.883c-0.69 0-1.25 0.56-1.25 1.25v0 12.208c0 0.69 0.56 1.25 1.25 1.25h3.883c0.69-0 1.25-0.56 1.25-1.25v-0.44c1.596 0.316 2.993 0.738 4.33 1.278l-0.159-0.057c1.209 0.432 2.603 0.682 4.056 0.682 1.676 0 3.274-0.332 4.732-0.934l-0.082 0.030c1.271-0.563 2.351-1.16 3.372-1.839l-0.083 0.052c0.334-0.207 0.668-0.412 1.004-0.611 1.648-0.977 2.973-1.832 4.17-2.699 0.595-0.424 1.115-0.843 1.608-1.29l-0.014 0.013c0.428-0.353 0.769-0.795 0.997-1.3l0.009-0.023c0.052-0.133 0.082-0.287 0.082-0.448 0-0.093-0.010-0.184-0.029-0.271l0.002 0.008c-0.176-1.17-0.885-2.144-1.868-2.68l-0.019-0.010zM4.681 28.541h-1.383v-9.709h1.383zM28.379 22.174c-0.398 0.356-0.831 0.702-1.283 1.024l-0.046 0.031c-1.131 0.818-2.395 1.635-3.975 2.57-0.352 0.209-0.697 0.424-1.045 0.639-0.833 0.557-1.791 1.091-2.793 1.547l-0.129 0.052c-1.096 0.451-2.369 0.712-3.703 0.712-1.137 0-2.229-0.19-3.247-0.54l0.070 0.021c-1.451-0.607-3.148-1.097-4.911-1.392l-0.137-0.019v-6.48h1.489l4.691 1.375c0.105 0.032 0.226 0.051 0.351 0.051h3.891c0.443 0 0.697 0.17 0.697 0.469s-0.254 0.469-0.697 0.469h-6.809c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h7.781c0 0 0 0 0.001 0 0.185 0 0.361-0.040 0.519-0.113l-0.008 0.003 7.803-3.504c0.228-0.105 0.494-0.167 0.774-0.167 0.183 0 0.359 0.026 0.526 0.075l-0.013-0.003c0.185 0.113 0.326 0.282 0.4 0.484l0.002 0.007c-0.066 0.064-0.137 0.129-0.201 0.189zM16.060 17.075c0.23 0.254 0.561 0.413 0.929 0.413s0.699-0.159 0.928-0.412l0.001-0.001 5.96-6.607c1.172-1.091 1.919-2.627 1.969-4.338l0-0.009c0-0.014 0-0.030 0-0.047 0-1.469-0.599-2.798-1.566-3.755l-0-0c-0.986-0.973-2.34-1.574-3.836-1.574-1.321 0-2.533 0.469-3.477 1.25l0.009-0.007c-0.872-0.648-1.971-1.038-3.16-1.038-0.481 0-0.947 0.064-1.39 0.183l0.037-0.009c-1.926 0.548-3.411 2.033-3.949 3.919l-0.010 0.040c-0.107 0.405-0.168 0.869-0.168 1.348 0 1.582 0.669 3.008 1.74 4.010l0.003 0.003zM10.919 5.729c0.311-1.061 1.13-1.88 2.169-2.185l0.023-0.006c0.213-0.061 0.459-0.095 0.712-0.096h0c0.909 0.030 1.717 0.435 2.28 1.064l0.003 0.003c0.226 0.226 0.539 0.366 0.884 0.366s0.658-0.14 0.884-0.366v0c0.654-0.727 1.577-1.199 2.612-1.26l0.010-0.001c0.787 0.006 1.499 0.324 2.018 0.836l-0-0c0.518 0.556 0.836 1.305 0.836 2.128 0 1.024-0.492 1.933-1.254 2.504l-0.008 0.006c-0.016 0.015-0.031 0.030-0.044 0.046l-0.001 0.001-5.053 5.601-5.097-5.648c-0.649-0.552-1.059-1.369-1.059-2.282 0-0.253 0.031-0.498 0.090-0.733l-0.004 0.021z"/>
                    </g>
                  </g>
                </svg>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Values</h4>
                <p className="text-gray-600 text-start">We embrace cutting-edge technologies and methodologies to drive continuous improvement in cancer patient care. In B-care, we are committed to staying at the forefront of healthcare innovation and providing solutions that have a positive impact.</p>
              </div>

              {/* 4th item */}
              <div className="relative flex flex-col items-start p-6 bg-white rounded shadow-xl">
                <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#ffffff" fillRule="evenodd">
                    <rect className="fill-current text-gray-400" width="64" height="64" rx="32" />
                    <g transform="translate(16, 16)">
                      <path d="M16 20.25c4.28 0 7.75-3.47 7.75-7.75s-3.47-7.75-7.75-7.75c-4.28 0-7.75 3.47-7.75 7.75v0c0.005 4.278 3.472 7.745 7.75 7.75h0zM16 7.25c2.899 0 5.25 2.351 5.25 5.25s-2.351 5.25-5.25 5.25c-2.899 0-5.25-2.351-5.25-5.25v0c0.004-2.898 2.352-5.246 5.25-5.25h0zM13.513 13.576l-0.349 1.071c-0.039 0.116-0.061 0.249-0.061 0.387 0 0.69 0.56 1.25 1.25 1.25 0.276 0 0.531-0.089 0.738-0.241l-0.004 0.002 0.913-0.663 0.913 0.663c0.203 0.149 0.458 0.238 0.734 0.238 0.69 0 1.25-0.56 1.25-1.25 0-0.138-0.022-0.271-0.064-0.396l0.003 0.009-0.348-1.071 0.912-0.663c0.314-0.23 0.516-0.597 0.516-1.012 0-0.69-0.56-1.25-1.25-1.25-0 0-0 0-0 0h-1.129l-0.349-1.072c-0.208-0.459-0.662-0.772-1.188-0.772s-0.981 0.313-1.185 0.764l-0.003 0.008-0.349 1.072h-1.128c-0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0.414 0.201 0.781 0.512 1.009l0.004 0.002zM23.47 21.563c2.622-2.171 4.28-5.427 4.28-9.070 0-6.489-5.261-11.75-11.75-11.75s-11.75 5.261-11.75 11.75c0 3.643 1.658 6.898 4.26 9.053l0.020 0.016-2.714 8.037c-0.042 0.12-0.066 0.257-0.066 0.401 0 0.69 0.56 1.25 1.25 1.25 0.142 0 0.278-0.024 0.405-0.067l-0.009 0.003 8.605-2.867 8.605 2.867c0.118 0.041 0.254 0.064 0.395 0.064 0.69 0 1.249-0.559 1.249-1.249 0-0.144-0.024-0.281-0.069-0.41l0.003 0.009zM6.75 12.5c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001zM16.395 25.814c-0.118-0.041-0.254-0.064-0.396-0.064s-0.277 0.024-0.404 0.067l0.009-0.003-6.616 2.205 1.705-5.050c1.542 0.807 3.369 1.281 5.306 1.281s3.764-0.474 5.371-1.311l-0.064 0.031 1.705 5.050z"/>
                    </g>
                  </g>
                </svg>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Why us?</h4>
                <p className="text-gray-600 text-start">Our system is designed with the patient at its core. We understand the unique needs and concerns of cancer patients and have developed our system to be user-friendly, intuitive, and accessible to all individuals involved in their care journey.</p>
              </div>

            </div>
            <div className="md:col-span-2 relative flex flex-col gap-6">
              {/* image item */}
              <div className="h-full w-full relative inline-flex flex-col bg-white rounded shadow-xl">
                <Image  src={ assetTeam } alt="asset-teamwork" layout="fill" objectFit="cover" className="rounded"/>
              </div>
              <div className="h-12 relative flex flex-col items-center">
                <a className="btn text-white w-auto mb-4 sm:w-auto sm:mb-0 shadow-xl" style={{backgroundColor:'#2392F5'}} href="#team-section">Meet team</a>
              </div>
            </div>


{/* 
            6th item
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" strokeLinecap="square">
                    <path className="stroke-current text-white" d="M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775" />
                    <path className="stroke-current text-blue-300" d="M44.571 43.429H34.286M44.571 37.714H34.286" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  )
}