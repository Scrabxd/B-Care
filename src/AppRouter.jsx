import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Landing';
import Login from './Login';

import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'


const AppRouter = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    })
  })
  return (
    <div className="grow">
      <Routes>
        <Route exact path='/' element={<Landing/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes >
    </div>
  );
}

export default AppRouter;