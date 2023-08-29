
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './Container/About'
import Portfolio from './Container/Portfolio'
import Projects from './Container/Projects'
import Contacts from './Container/Contacts'

function App() {

  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path="/" element={<About />} />
       <Route path="/Portfolio" element={<Portfolio />} />
       <Route path="/Projects" element={<Projects />} />
       <Route path="/Contact" element={<Contacts />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
