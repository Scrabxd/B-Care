import { useEffect, useState } from "react"

import Dashboard from "./dashboardPat/sidebar"

import Loader from './loader'
import './css/additional-styles/content.css'

const DashboardMain = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or performing an API request
    setTimeout(() => {
      setLoading(false);
    }, 2150); // Replace with actual data loading logic
  }, []);

  return (
    <>
      <Loader loading={loading}/>
      <div className={` ${loading ? 'content' : 'content-loaded'}`}>
        <Dashboard/>
      </div>
    </>
  )
}

export default DashboardMain