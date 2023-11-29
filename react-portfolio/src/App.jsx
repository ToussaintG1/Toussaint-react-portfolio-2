import './App.css'
import { Route, Routes } from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'

import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App