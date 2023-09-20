import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Landing';
import Login from './Login';
import DashboardDoc from './Dashboard'
import DashboardPat from './DashboardPat'
import DashboardHos from './DashboardHos'

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
        <Route path='/dashdoc/*' element={<DashboardDoc/>}></Route>
        <Route path='/dashpat/*' element={<DashboardPat/>}></Route>
        <Route path='/dashhos/*' element={<DashboardHos/>}></Route>
      </Routes >
    </div>
  );
}

export default AppRouter;