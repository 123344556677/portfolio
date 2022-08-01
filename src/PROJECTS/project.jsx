import React from 'react'
import reg from './registration.PNG'
import todo from './todo list.PNG'
import tool from './tool.PNG'
import webpage from './web.gif'
import regi from './reg.gif'
import co from './co.gif'
import './project.css'
import Carousel from 'react-elastic-carousel';
const Projects = () => {
    return ( 
        <>
        <div className="container">
         <h1 className="text-center" id="service">Projects</h1>
         
         <hr className="" />
         </div>
        <Carousel 
        enableAutoPlay
        autoPlaySpeed={26000}
         disableArrowsOnEnd={false}>
        <iframe className="reg1" src={webpage} ></iframe>
       <iframe className="reg2" src={regi} ></iframe>
       <iframe className="reg2" src={co} ></iframe>
          <img src={reg} alt="" className="reg " />
          <img src={todo} alt="" className="reg" />
      

        

        </Carousel>
        
        </>
     );
}
 
export default Projects;