import './navbar.css';
import {Link} from 'react-scroll'
import React, { useState } from 'react';
// import {HashLink as Link } from 'react-router-hash-link'
const Navbar = () => {
    const [navbar,setnavbar]=useState(false)
    const settingnavbar=()=>{
        if(window.scrollY>=80){
                setnavbar(true)
            }
            else{
                setnavbar(false)
            }
         }
         window.addEventListener('scroll',settingnavbar)
    
    return ( 
        <>
        
        <nav className={navbar ?'navbar navbar-expand-md navbar-dark bg-dark fixed-top':'navbar navbar-expand-md navbar-dark'}  >
         
               
            <h3 className=" name ml-2">Abdul Hannan</h3>
             <h1 className="coma">.</h1>
            <button class="navbar-toggler" type="button" data-target="#ha" data-toggle="collapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="ha">
             <ul className="navbar-nav mx-auto">
                   <Link to="home" className="nav-link bar" style={{color:"white"}}><li className="nav-item">HOME</li></Link>
                    <Link to="about"   smooth={true}
                     className="nav-link bar" style={{color:"white"}}><li className="nav-item">ABOUT</li></Link>
                    <Link to="resume"  smooth={true}
                     className="nav-link bar" style={{color:"white"}}><li className="nav-item">RESUME</li></Link>
                    <Link to="service" smooth={true}
                     className="nav-link bar" style={{color:"white"}}><li className="nav-item">SERVICES</li></Link>
                    <Link to="project" smooth={true}
                     className="nav-link bar" style={{color:"white"}}><li className="nav-item">PROJECTS</li></Link>
                    <Link to="contact" smooth={true}
                     className="nav-link bar" style={{color:"white"}}><li className="nav-item">CONTACT</li></Link>

                    {/* <Link to="home"><li className="nav-item">HOME</li></Link>
                    <Link to="about"><li className="nav-item">About</li></Link>
                    <Link to="service"><li className="nav-item">Services</li></Link>
                    <Link to="resume"><li className="nav-item">Resume</li></Link>
                    <Link to="project"><li className="nav-item">Projects</li></Link>
                    <Link to="contact"><li className="nav-item">Contact</li></Link> */}
                    
                    
                </ul>
                </div>
               
        </nav>
        
            
        
    
    </>
     );
}
 
export default Navbar;
