import { NavLink, Routes, Route, useLocation, Link } from "react-router-dom";
import MainDash from './components/main'
import FAQ from "../landing/faq-section";
import AboutUs from "../landing/AboutUs";
import logow from '../assets/images/bcarew.png'

// import { FaRegAddressCard, FaRegBell, FaRegCalendarAlt} from 'react-icons/fa'
import { IoLogOutOutline, IoSettingsOutline, IoNotificationsOutline, IoPeopleOutline, IoCalendarOutline } from 'react-icons/io5'

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className="relative flex flex-col items-center h-auto w-auto bg-[#34A5AB] text-white px-2">
        <div className="flex h-full flex-col justify-center">
          <Link  to="/dashdoc" className={`rounded-2xl w-auto py-2 px-2 mb-2 hover:bg-[#6DFFD61A] ${pathname === '/dashdoc' ? 'bg-[#6DFFD680]' : ''}`}>
            <div className="flex justify-center items-center"><img src={logow} alt="bcare" className="w-auto h-10 select-none" /></div>
          </Link>
          <Link to="/dashdoc/notifications" className={`pointer-events-none rounded-2xl w-auto py-4 px-4 mb-2 hover:bg-[#6DFFD61A] ${pathname === '/dashdoc/notifications' ? 'bg-[#6DFFD680]' : ''}`}>
            <div className="flex justify-center items-center"><IoNotificationsOutline size={24}/></div>
          </Link>
          <Link to="/dashdoc/list" className={`pointer-events-none rounded-2xl w-auto py-4 px-4 mb-2 hover:bg-[#6DFFD61A] ${pathname === '/dashdoc/list' ? 'bg-[#6DFFD680]' : ''}`}>
            <div className="flex justify-center items-center"><IoPeopleOutline size={24}/></div>
          </Link>
          <Link to="/dashdoc/calendar" className={`pointer-events-none rounded-2xl w-auto py-4 px-4 mb-2 hover:bg-[#6DFFD61A] ${pathname === '/dashdoc/calendar' ? 'bg-[#6DFFD680]' : ''}`}>
            <div className="flex justify-center items-center"><IoCalendarOutline size={24}/></div>
          </Link>
          <Link to="/dashdoc/settings" className={`pointer-events-none rounded-2xl w-auto py-4 px-4 mb-2 hover:bg-[#6DFFD61A] ${pathname === '/dashdoc/settings' ? 'bg-[#6DFFD680]' : ''}`}>
            <div className="flex justify-center items-center"><IoSettingsOutline size={24}/></div>
          </Link>
        </div>
        <div className="flex h-auto flex-col justify-center">
          <Link to="/" className='rounded-2xl w-auto py-4 px-4 mb-2 hover:bg-[#6DFFD61A] active:bg-[#6DFFD680]'>
            <div className="flex justify-center items-center"><IoLogOutOutline size={24}/></div>
          </Link>
        </div>

      </div>
      <div className="w-full h-auto overflow-hidden">
        <Routes>
          <Route path="/" element={<MainDash />} />
          <Route path="/notifications" element={<FAQ />} />
          <Route path="/list" element={<AboutUs />} />
          <Route path="/calendar" element={<FAQ />} />
          <Route path="/settings" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default Sidebar;