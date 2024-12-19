import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import ContactCard from './Components/Contact us card/ContactCard'
import TeamCard from './Components/Team/TeamCard'
import ProjectCard from './Components/ProjectCard/ProjectCard'
// import Example from './Components/example/Example'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/example" element={<Example />} /> */}
        <Route path="/navbar" element={<Navbar />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactCard/>}/>
        <Route path='/team' element={<TeamCard/>}/>
        <Route path='/project' element={<ProjectCard/>}/>
      </Routes>
    </Router>
  )
}

export default App
