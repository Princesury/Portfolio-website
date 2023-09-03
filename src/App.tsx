
import './App.css'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './Container/About'
import Portfolio from './Container/Portfolio'
import Projects from './Container/Projects'
import Contacts from './Container/Contacts'
import SocialLinks from './Container/SocialLinks'

function App() {

  return (
    <div>
      <Navbar/>
      <About />
      <SocialLinks/>
      <Portfolio />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App
