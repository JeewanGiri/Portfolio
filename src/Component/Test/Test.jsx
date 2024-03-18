import { useRef } from 'react'
import {  useScroll, useTransform, motion } from "framer-motion";
const First = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
// console.log(ref.curre)
  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return (
    <>
    <div className="first_page_wrapper" ref={ref}>
      <motion.h1 style={{y:ytext}} initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,type:"spring"}}>Build fast website with Sipalaya</motion.h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sint quos corporis necessitatibus soluta. Aliquam, cum eos ipsam quis sunt, facilis ullam minus et commodi delectus, non hic quae pariatur?</p>
      <span>
        <button id='but'> + Book Meeting</button>
        <motion.button whileTap={{scale:.9}} whileHover={{scale:1.3}} transition={{duration:1,type:"spring",stiffness:200}} >Get in touch </motion.button>
      </span>
      <motion.div className="img_wrapper"  initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,type:"spring"}}>
        <motion.div className="img_after_wrapper">
        <motion.img style={{y:yBg}} src="./gfw.png" alt="" />
        </motion.div>
      </motion.div>
    </div>
    </>
  )
}

export default First