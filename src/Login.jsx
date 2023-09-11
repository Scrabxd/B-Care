import { useEffect, useState } from "react"

import Main from "./login/index"

import Loader from './loader'
import './css/additional-styles/content.css'

const Login = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or performing an API request
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Replace with actual data loading logic
  }, []);

  return (
    <>
      <Loader loading={loading}/>
      <div className={` ${loading ? 'content' : 'content-loaded'}`}>
        <Main/>
      </div>
    </>
  )
}

export default Login