import { useInView } from 'react-intersection-observer'
import './skill.scss'
import Image1 from '/image1.png'
import Image2 from '/image2.png'
import Image3 from '/image3.jpeg'
import Image4 from '/image4.png'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
const Project = ()=>{
    const controls=useAnimation();
    const {ref,inView}=useInView();
    useEffect(()=>{
        if(inView){
          controls.start({
          y:0,opacity:1
          });
        }
      },[controls,inView])
      const control=useAnimation();
      useEffect(()=>{
        if(inView){
          control.start({
            y:0,opacity:1         
         });
        }
      },[control,inView])
    return(
        <>
        <div className="project" id='skill'>
        <div className='heading'  ref={ref}>
            <motion.h4
             initial={{y:-150}}
                animate={control}
                transition={{delay:0.5,duration:1.5}}
            > My Skills</motion.h4>
            <motion.h1
             initial={{y:200,opacity:0}}
                animate={controls}
                transition={{delay:0.5,duration:1}}
            >Technologies.</motion.h1>
        </div>
        <div className='icons'>
            <div className='figure'>
                <motion.img src={Image1} alt='image'
     animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["50%", "0%", "50%", "0%", "50%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 3
      }}                 />
        <motion.img src={Image2} alt='image' 
         animate={{
         scale: [1, 1, 1, 1, 1],
         rotate: [0, 0, 180, 180, 0],
         borderRadius: ["50%", "0%", "50%", "0%", "50%"]
      }}
         transition={{
         duration: 2,
         ease: "easeInOut",
         times: [0, 0.2, 0.5, 0.8, 1],
         repeat: Infinity,
         repeatDelay: 2
      }}
                />
                <motion.img src={Image3} alt='image' 
                      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["50%", "0%", "50%", "0%", "50%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat:Infinity,
        repeatDelay: 3
      }}                
                />
                <motion.img src={Image4} alt='image'
                  animate={{
         scale: [1, 1, 1, 1, 1],
         rotate: [0, 0, 180, 180, 0],
         borderRadius: ["50%", "0%", "50%", "0%", "50%"]
      }}
         transition={{
         duration: 2,
         ease: "easeInOut",
         times: [0, 0.2, 0.5, 0.8, 1],
         repeat: Infinity,
         repeatDelay: 2
      }}
                 />
            </div>
        </div>
        </div>
        </>
    )
}
export default Project