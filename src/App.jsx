import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import ContactCard from './Components/Contact us card/ContactCard'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactCard/>}/>
      </Routes>
    </Router>
  )
}

export default App
