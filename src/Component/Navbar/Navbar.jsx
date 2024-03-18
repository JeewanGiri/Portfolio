import {Link} from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
  return (
    <>
       <div className="left" >
        <h4>👩‍💻</h4>
            <h1>Jeewan</h1>
        </div>
        <div className="right">
          <ul>
          <Link spy={true} smooth={true} to="home"><li>Home</li></Link>
          <Link spy={true} smooth={true} to="about"><li>About</li></Link>
          <Link spy={true} smooth={true} to="skill"><li>Skill</li></Link>
          <Link spy={true} smooth={true} to="project"><li>Project</li></Link>
          <Link spy={true} smooth={true} to="contact"><li>Contact</li></Link>
          </ul>
        </div>
    </>
  )
}

export default Navbar
