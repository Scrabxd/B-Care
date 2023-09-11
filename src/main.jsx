import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
// import './index.css'
import AppRouter from './AppRouter'

import './css/style.css'

// import './css/additional-styles/utility-patterns.css';
// import './css/additional-styles/range-slider.css';
// import './css/additional-styles/toggle-switch.css';
import './css/additional-styles/theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={`font-inter antialiased bg-white text-gray-900 tracking-tight`}>
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <div className="grow">
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </div>
      </div>
    </div>
  </React.StrictMode>,
)
