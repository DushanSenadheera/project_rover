import { Header } from '../../components/Header/Header'
import About  from '../../components/About/About'
import { Contact } from '../../components/Contact/Contact'
import {Features} from '../../components/Features/Features'

function Landing() {
  return (
    <div className='Landing'>
      
      <Header /> 
      <About />
      <Features />
      <Contact />
      
    </div>
  )
}

export default Landing
