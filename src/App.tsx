
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './Container/About'
import Portfolio from './Container/Portfolio'
import Projects from './Container/Projects'
import Contacts from './Container/Contacts'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
