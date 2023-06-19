export const metadata = {
  title: 'B-CARE',
  description: 'B- CARE landing page',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import FAQ from '@/components/faq-section'
import TeamSection from '@/components/team-section'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <FAQ />
      <TeamSection />
      <Newsletter />
    </>
  )
}
