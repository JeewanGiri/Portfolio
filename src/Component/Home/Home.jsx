import './home.scss'
import Profile from '../assets/picture.jpeg'
import Map from '../assets/map.jpg'
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
 <motion.div className='down-part' 
  initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.4,duration:1.5}}
 >
      <div className='word'>
      <div className='words'>
        <motion.h1 
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        transition={{delay:1,duration:2}}
         >HI, I AM <br/><span>{text}</span></motion.h1>
        <motion.h5 
         initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        transition={{delay:1,duration:2}}
        >I am responsible for the design and implementation of user 
        interfaces (UIs) and UI components using React, a front-end JavaScript library.</motion.h5>
      </div>
      <div  className='secondimg'>
      <motion.img src={Profile} alt='profile'
       initial={{opacity:0,rotat:100}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.5,duration:1.5}}
       />
      </div>
      </div>

    </motion.div>
   
</>
  )
}
export default Home