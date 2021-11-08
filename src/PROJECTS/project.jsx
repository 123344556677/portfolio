import React from 'react'
import reg from './registration.PNG'
import todo from './todo list.PNG'
import tool from './tool.PNG'
import './project.css'
const Projects = () => {
    return ( 
        <>
        <h1 className="text-center">Projects</h1>
        <div className="container" id="project">
            <hr className="" />
            <div className="row">
                <div className="col-6">
                    <img src={reg} alt="" className="reg" />
                </div>
                <div className="col-lg-6">
                    <h3 className="text-center mt-2 h">REGISTRATION FORM</h3>
                    <h6 className="text-center mt-4 d">A  fulL MERN STACK Registratoin Form <br /> with complete backend. <br />
                    It comprises the use of REACT JS, <br /> BOOTSTRAP4  and NODE JS,EXPRESS <br /> and MONGO DB</h6>
                </div>
            </div>
            <hr />
            <div className="row">
            <div className="col-md-6">
                    <h3 className="text-center mt-5 h">TODO'S LIST</h3>
                    <h6 className="text-center mt-4 d">A  fulL REACT beginner TODO LIST  Project.<br />
                    It comprises the use of REACT JS States and Props <br /> and  BOOTSTRAP4.</h6> 
                </div>
                <div className="col-6">
                    <img src={todo} alt="" className="reg" />
                </div>
             </div>
             <hr />
             <div className="row">
             <div className="col-6">
                    <img src={tool} alt="" className="reg" />
                </div>
            <div className="col-md-6">
                    <h3 className="text-center mt-5 h">MEASURING TOOL</h3>
                    <h6 className="text-center mt-4 d">A  fulL REACT beginner MEASURING TOOL  Project.<br />
                    It comprises the use of REACT JS States and Props <br /> and  BOOTSTRAP4.</h6> 
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Projects;