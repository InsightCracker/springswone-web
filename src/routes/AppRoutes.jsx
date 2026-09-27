import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Programs from '../pages/Programs.jsx'
import Donate from '../pages/Donate.jsx'
import Contact from '../pages/Contact.jsx'
import News from '../pages/News.jsx'
import NewsArticle from '../pages/NewsArticle.jsx'
import Projects from '../pages/Projects.jsx'
import ProjectDetail from '../pages/ProjectDetail.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsArticle />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Route>
    </Routes>
  )
}