import React, { useState } from 'react';
import bcare from '../assets/images/bcare.png';
import bcarew from '../assets/images/bcarew.png';
import { TiEye } from 'react-icons/ti'

import './loginmain.css';
import './login.css';
import './circles.css'

const Login = () => {
  const [seePassword, setSeePassword] = useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = ({target}) => setEmail(target.value);
  const onPasswordChange = ({target}) => setPassword(target.value);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your login logic here
  // };

  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <div className='body'>
      <div className='circles' data-aos="zoom-y-out">
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        {/* <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div> */}
      </div>
      <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">
          <form action="#" className="bg-white flex items-center justify-center flex-col px-16 h-full text-center">
              <img src={bcare} alt="bcare" className='w-20 h-20 select-none pointer-events-none'/>
              <h1 className='text-2xl font-bold mb-6 select-none pointer-events-none text-[#1D1D1D]'>Create Account</h1>
              <input type="text" placeholder="First Name" className="bg-gray-200 border-none py-3 px-4 my-2 w-full rounded-xl font-semibold focus:ring-[#34A5AB] focus:ring-2"/>
              <input type="text" placeholder="Last Name" className="bg-gray-200 border-none py-3 px-4 my-2 w-full rounded-xl font-semibold focus:ring-[#34A5AB] focus:ring-2"/>
              <input type="text" placeholder="SSN" className="bg-gray-200 border-none py-3 px-4 my-2 w-full rounded-xl font-semibold focus:ring-[#34A5AB] focus:ring-2"/>
              <input type="email" placeholder="Email" className="bg-gray-200 border-none py-3 px-4 my-2 w-full rounded-xl font-semibold focus:ring-[#34A5AB] focus:ring-2"/>
              <input type="password" placeholder="Password" className="bg-gray-200 border-none py-3 px-4 m-2 w-full rounded-xl font-semibold focus:ring-[#34A5AB] focus:ring-2"/>
              <input type="password" placeholder="Confirm Password" className="bg-gray-200 border-none py-3 px-4 mt-2 w-full rounded-xl font-semibold focus:ring-[#34A5AB] focus:ring-2"/>
              <button className='rounded-xl border border-[#7FB3D5] bg-[#34A5AB] text-white text-xs font-bold py-3 px-12 tracking-wide uppercase transition-transform ease-in duration-200 mt-4'>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action={`${password === 'dashdoc' ? '/dashdoc' :
                           password === 'dashpat' ? '/dashpat' :
                           password === 'dashhos' ? '/dashhos' : '/#'}`} className="bg-white flex items-center justify-center flex-col px-16 h-full text-center">
              <img src={bcare} alt="bcare" className='w-20 h-20 select-none pointer-events-none'/>
              <h1 className='text-2xl font-bold mb-6  select-none pointer-events-none text-[#1D1D1D]'>Welcome Back!</h1>
              <input type="email" placeholder="Email" value={email} onChange={onEmailChange} className="bg-gray-200 border-none py-3 px-4 my-2 w-full rounded-xl font-semibold focus:ring-[#34A5AB] focus:ring-2"/>
              {/* <div className=''> */}
                <input type={`${seePassword ? 'text' : 'password'}`} value={password} onChange={onPasswordChange} placeholder="Password" className="bg-gray-200 border-none py-3 px-4 mt-2 w-full rounded-xl font-semibold focus:ring-[#34A5AB] focus:ring-2"/>
                {/* <button className='absolute'>
                  <TiEye/>
                </button>
              </div> */}
              <a href="#" className="text-gray-700 text-sm no-underline my-4 hover:text-[#34A5AB] place-self-end hover:underline">Forgot your password?</a>
              <button className='rounded-xl border border-[#7FB3D5] bg-[#34A5AB] text-white text-xs font-bold py-3 px-12 tracking-wide uppercase transition-transform ease-in duration-200'>Login</button>
          </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                  <img src={bcarew} alt="bcare" className='w-20 h-20 select-none pointer-events-none'/>
                  <h1 className='text-2xl font-bold m-0 select-none pointer-events-none'>Welcome Back!</h1>
                  <p className='text-md leading-5 tracking-wide my-5 select-none pointer-events-none'>To stay connected with us please login with your information.</p>
                  <button className="rounded-xl border border-white bg-transparent text-white text-xs font-bold mt-3 py-3 px-12 tracking-wide uppercase transition-transform ease-in duration-200" onClick={handleSignInClick}>Login</button>
              </div>
              <div className="overlay-panel overlay-right">
                  <img src={bcarew} alt="bcare" className='w-20 h-20 select-none pointer-events-none'/>
                  <h1 className='text-2xl font-bold m-0 select-none pointer-events-none'>Create Account</h1>
                  <p className='text-md leading-5 tracking-wide my-5  select-none pointer-events-none'>Begin your journey with us towards cancer care and support.</p>
                  <button className="rounded-xl border border-white bg-transparent text-white text-xs font-bold mt-3 py-3 px-12 tracking-wide uppercase transition-transform ease-in duration-200" onClick={handleSignUpClick}>Sign Up</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Login;