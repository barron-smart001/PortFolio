import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Navbar  from './ControlRoom/Navbar';
import About from './ControlRoom/About'
import Project from './ControlRoom/Project'
import Home from './ControlRoom/Home'
import Contact from './ControlRoom/Contact'

const App = () => {
  return (
   <>
   <div>

       <Router>

 <Navbar />

   <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/About" element={<About/>} />
       <Route path="/Project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>

  </Router>
   </div>
   </> 
  )
}

export default App