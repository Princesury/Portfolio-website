
import './App.css'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './Container/About'
import Portfolio from './Container/Portfolio'
import Skills from './Container/Skills'
import Contacts from './Container/Contacts'
import SocialLinks from './Container/SocialLinks'

function App() {

  return (
    <div>
      <Navbar/>
      <About />
      <SocialLinks/>
      <Portfolio />
      <Skills />
      <Contacts />
    </div>
  )
}

export default App
