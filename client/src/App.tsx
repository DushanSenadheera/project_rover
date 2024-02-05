import './App.scss'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import About  from './components/About/About'
import { Contact } from './components/Contact/Contact'
import {Destination} from './pages/Destination/Destination'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header /> 
      <About />
      <Destination />
      <Contact />
      <Footer /> 
    </div>
  )
}

export default App
