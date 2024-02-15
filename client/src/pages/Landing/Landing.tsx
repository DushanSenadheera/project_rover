import { Header } from '../../components/Header/Header'
import About  from '../../components/About/About'
import { Contact } from '../../components/Contact/Contact'
import { Plan } from '../../components/Plan/Plan'
import {Features} from '../../components/Features/Features'

function Landing() {
  return (
    <div className='Landing'>
      
      <Header /> 
      <About />
      <Features />
      <Plan />
      <Contact />
      
    </div>
  )
}

export default Landing
