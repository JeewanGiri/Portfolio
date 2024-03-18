import Home from './Home/Home'
import About from './About/About'
import Skill from './Skill/Skill'
import Contact from './Contact/Contact'
// import Test from './Test/Test'
import './dashborad.scss'
import Project from './Project/Project'
import Footer from './Footer/Footer'
const Dashboard = () => {
  return (
    <>

      <section>
        <Home/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <Skill/>
      </section>
      <section>
        <Project/>
      </section>
      <section>
        <Contact/>
      </section> 
      <section>
        <Footer/>
      </section>
    </>
  )
}

export default Dashboard
