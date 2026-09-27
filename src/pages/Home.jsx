import Hero from '../components/Hero.jsx'
import AimsSection from '../components/AimsSection.jsx'
import AboutPreview from '../components/AboutPreview.jsx'
import CallToAction from '../components/CallToAction.jsx'
import NewsPreview from '../components/NewPreview.jsx'
import ProjectsPreview from '../components/ProjectPreview.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <AimsSection />
      <AboutPreview />
      <ProjectsPreview />
      <NewsPreview />
      <CallToAction />
    </>
  )
}