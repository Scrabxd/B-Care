import React from 'react';
import { HashLoader } from 'react-spinners';

import './css/additional-styles/loader.css'

function Loader({loading, color}) {
  return (
    <div className={`loader fixed inset-0 flex items-center justify-center z-50 ${loading ? '' : 'loader-hidden'}`}>
      <div className=" drop-shadow-xl">
        <HashLoader color={color} loading={true} size={125} />
      </div>
    </div>
  );
}

export default Loader;