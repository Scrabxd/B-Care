import NavBar from './landing/ui/header'
import Header from './landing/header'
import Stats from './landing/stats'
import AboutUs from './landing/AboutUs'
import Testimonials from './landing/testimonials'
import Roadmap from './landing/roadmap'
import TeamSection from './landing/team-section'
import FAQ from './landing/faq-section'
import Footer from './landing/ui/footer'

import Loader from './loader'
import './css/additional-styles/content.css'

import { useState, useEffect } from 'react'

const Landing = () => {
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
          <NavBar />
          <Header />
          <Stats />
          <AboutUs />
          <Testimonials />
          <Roadmap />
          <TeamSection />
          <FAQ />
          <Footer/>
        </div>
    </>
  )
}

export default Landing