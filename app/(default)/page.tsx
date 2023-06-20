export const metadata = {
  title: 'B-CARE',
  description: 'B- CARE landing page',
}

import Header from '@/components/header'
import Stats from '@/components/stats'
import AboutUs from '@/components/AboutUs'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq-section'
import TeamSection from '@/components/team-section'
import Roadmap from '@/components/roadmap'

export default function Home() {
  return (
    <>
      <Header />
      <Stats />
      <AboutUs />
      <Testimonials />
      <Roadmap />
      <TeamSection />
      <FAQ />
    </>
  )
}
