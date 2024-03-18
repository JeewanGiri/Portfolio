import './about.scss'
import{ motion,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
const About = () => {
   const controls =useAnimation();
  const {ref,inView}=useInView();
  const transition={duration:20,type:'spring'}
  useEffect(()=>{
    if(inView){
      controls.start({
      y:-10,opacity:1
      });
    }
  },[controls,inView])
  return (
    <>
    <div className='about' ref={ref}>
    <div className='top' >
      <motion.h4 
       initial={{y:-250,opacity:0}}
        animate={controls}
        transition={{delay:0.2,type:'spring',stiffness:200}}
      >Introduction</motion.h4>
      <motion.h1
        initial={{y:-250,opacity:0}}
        animate={controls}
        transition={{delay:0.6,type:'spring',stiffness:200}}
      >Overview.</motion.h1>
      </div>
      <motion.div className='bottom'
        initial={{y:-250,opacity:0}}
        animate={controls}
        transition={{delay:1,type:'spring',stiffness:200}}
      >
      <p>
       I am a  <span>React Deleloper</span>, a premier front-end JavaScript library,
       I have dedicated the past three months to intensive training to enhance my mastery of React ecosystem.
        This includes delving deep into state management, hooks, and the Context API, thereby significantly 
        improving my capability to craft dynamic and responsive web applications. My endeavor in this 
        learning phase led me to successfully complete over 10 mini-projects, varying from straightforward
         to-do lists to intricate single-page applications (SPAs), each meticulously chosen to hone different 
         facets of my React development skills. Beyond project work, I embody a continuous learning ethos, 
         actively keeping up with the latest trends and advancements within the React community and the wider 
         field of web technologies.      </p>
      </motion.div>
    
    <div className='experience'>
        <div className="achievement">
          <motion.div className="circle" initial={{rotate:360}}
                whileInView={{rotate:-360}} transition={transition}>
          <div className="c">0-1</div>
         </motion.div>
          <span>years</span>
          <span>Experience</span>
        </div>
        <div className="achievement">
          <motion.div className="circle" initial={{rotate:360}}
                whileInView={{rotate:-360}} transition={transition}>
          <div className="c">10+</div>
         </motion.div>
          <span>completed</span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          <motion.div className="circle" initial={{rotate:360}}
                whileInView={{rotate:-360}} transition={transition}>
          <div className="c">3+</div>
          </motion.div>
          <span>months</span>
          <span>Training</span>
        </div>
        </div>
        </div>
    </>
  )
}

export default About
