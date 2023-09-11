import React from 'react';
import { HashLoader } from 'react-spinners';

import './css/additional-styles/loader.css'

function Loader({loading}) {
  return (
    <div className={`loader fixed inset-0 flex items-center justify-center z-50 ${loading ? '' : 'loader-hidden'}`}>
      <div className=" drop-shadow-xl">
        <HashLoader color="#34A5AB" loading={true} size={150} />
      </div>
    </div>
  );
}

export default Loader;