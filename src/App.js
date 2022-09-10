import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Consultants from './components/Consultants'
import Services from './components/Services'
import Assessments from './components/Services/Assessments'
import Performance from './components/Services/Performance'
import Interim from './components/Services/Interim'
import Restructuring from './components/Services/Restructuring'
import About from './components/About'
import Story from './components/About/Story'
import Mission from './components/About/Mission'
import CaseStudies from './components/About/CaseStudies'

import './App.sass';


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/consultants" element={<Consultants />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/assessments" element={<Assessments />} />
      <Route path="/services/performance" element={<Performance />} />
      <Route path="/services/interim" element={<Interim />} />
      <Route path="/services/restructuring" element={<Restructuring />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/story" element={<Story />} />
      <Route path="/about/mission" element={<Mission />} />
      <Route path="/about/case-studies" element={<CaseStudies />} />
    </Routes>
  )
}

export default App
