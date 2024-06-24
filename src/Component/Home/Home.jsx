import './home.scss'
import Profile from '../assets/picture.jpeg'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'

const Home=()=>{
const [loopNum,setLoopNum]=useState(0);
const [isDeleting,setIsDeleting]=useState(false);
const toRotate=["JEEWAN GIRI","React Developer","Frontend Developer"]
const [text,setText]=useState('');
const [delta,setDelta]=useState(300-Math.random()*100)
const period=2000;
useEffect(()=>{
  let ticker=setInterval(()=>{
    tick();
  },delta)
  return()=>{clearInterval(ticker)};
},[text]);
const tick=()=>{
  let i =loopNum % toRotate.length;
  let fullText=toRotate[i];
  let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length +1)
  setText(updatedText);
  if(isDeleting){
    setDelta(prevDelta=>prevDelta /2)
  }
  if(!isDeleting && updatedText===fullText){
    setIsDeleting(true)
    setDelta(period);

  }else if(isDeleting&&updatedText===''){
    setIsDeleting(false)
    setLoopNum(loopNum+1);
    setDelta(500);
  }
}
  return(
<>
<div className="main-div" id='home' >
    <motion.div className="top-part"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.2,duration:1.5}}
    >
        <div className="left">
        <h4>👩‍💻</h4>
            <h1>Jeewan</h1>
        </div>
        <div className="right">
          <ul>
          <Link spy={true} smooth={true} to="home"><motion.li whileHover={{scale:1.2,originX:0,color:'green'}}
                transition={{type:'spring', stiffness:300}} >Home</motion.li></Link>
          <Link spy={true} smooth={true} to="about"><motion.li  whileHover={{scale:1.2,originX:0,color:'green'}}
                transition={{type:'spring', stiffness:300}}>About</motion.li></Link>
          <Link spy={true} smooth={true} to="skill"><motion.li  whileHover={{scale:1.2,originX:0,color:'green'}}
                transition={{type:'spring', stiffness:300}}>Skills</motion.li></Link>
          <Link spy={true} smooth={true} to="project"><motion.li  whileHover={{scale:1.2,originX:0,color:'green'}}
                transition={{type:'spring', stiffness:300}}>Projects</motion.li></Link>
          <Link spy={true} smooth={true} to="contact"><motion.li  whileHover={{scale:1.2,originX:0,color:'green'}}
                transition={{type:'spring', stiffness:300}}>Contact</motion.li></Link>
          </ul>
        </div>
    </motion.div>
</div>
 <div className="homepage">
      <div className="top">
      <h1>HI, I AM <br/><span>{text}</span></h1>
        <h5><i>I am responsible for the design and implementation of user 
        interfaces (UIs) and UI components using React, a front-end JavaScript library.</i></h5>
        <div className="btn">
        <div className="btn1">
        <button>Hire Me</button>
        </div>
        <div className="btn2">
        <button>Download CV</button>
        </div>
        </div>
      </div>
      <div className="image">
        <img src="/public/pp.png" alt="pp"/>
      </div>
    </div>
</>
  )
}
export default Home