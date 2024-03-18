import { useState } from 'react';
import './Project.scss'
import {motion} from 'framer-motion'
import { Button, Popover } from 'antd';
const Project = () => {
   const [project,setProject]=useState([
      {
         image:"/analogclock.JPG",
         title:"Analog Clock",
         button:"Hover More",
         desc:"Project with Html,Css And Javascript 👩🏾‍💻 "
      },
          {
         image:"/Cafe Dashboard.JPG",
         title:"Cafe Dashboard",
         button:"Hover More",
         desc:"Amazing cafe Dashboard project with React js 🏨"
      },
          {
         image:"/portfolio.JPG",
         title:"My Portfolio",
         button:"Hover More",
         desc:"Here you will find all about me 😎"
      },
          {
         image:"/momo.JPG",
         title:"Momo Store",
         button:"Hover More",
         desc:"Project With the Reat including different libraries and animation."
      },
          {
         image:"/filterApidata.JPG",
         title:"Filter Project",
         button:"Hover More ",
         desc:"This is the example of filter in react."
      },
          {
         image:"/taskmanager.JPG",
         title:"Task Manager",
         button:"Hover More",
         desc:"This project is specally on react hooks."
      },
          {
         image:"/fashiomstore.JPG",
         title:"Html/css Page",
         button:"Hover More",
         desc:"simple Html and Css Page"
      },
          {
         image:"/github profile.JPG",
         title:"Api data fetch",
         button:"Hover More",
         desc:"Example of React fetchdata from Api "
      },
          {
         image:"/Task m.JPG",
         title:"Task with CRUDE",
         button:" Hover More",
         desc:" Task management system with crude operation"
      }
])
  // Array of color options
  const colors = ['red', 'blue', 'green', 'yellow', 'pink'];
  // Function to change the color of a specific project
  const changeProjectColor = (index, color) => {
    // Create a new array with the same projects, but change the color of the one at the given index
    const updatedProjects = project.map((project, projIndex) => 
      projIndex === index ? { ...project, color: color } : project
    );
    setProject(updatedProjects);
  };

  return (
    <>
      <div className='main-part' id='project'>
         <div className='right-div'>
              <h1>Projects<hr/></h1>
              <div className='card' >

              {
              project.map((item,index)=>{
                  return (
                     < motion.div className='card1' key={index}
                       style={{ 
                       backgroundColor: item.color,
                      }}
                     >
                       <motion.img src={item.image}alt='pic'
                          whileHover={{scale:1.2,originZ:0}}
                       transition={{type:'spring', stiffness:300}}
                       />
                       <h2>{item.title}<hr/></h2>
                       <p style={{padding:'10px'}}>
                       {
                        colors.map((color, colorIndex) => (
                         <button key={colorIndex} onClick={() => changeProjectColor(index, color)}
                            style={{ 
                            backgroundColor: color, 
                            padding: '5px', 
                            borderRadius: '50%',
                            cursor: 'pointer',
                         }}
                     >
                    </button>
                ))}
                </p>
                      <Popover content={item.desc} title={item.title} >
                     <Button >{item.button}</Button>
                       </Popover>
                    </motion.div>
                   
                  )
                 })
              }    
              </div>    
           <div className='line'></div>
         </div>
         <div className='left-div'>
        
         </div>
      </div>
    </>
  )
}

export default Project
