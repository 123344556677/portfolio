import React from 'react';
import './resume.css'
import {Link} from 'react-scroll'
const Resume = () => {
    return ( 
        <>
        <div className="container" id="resume">
            <div className="row">
                <div className="col-4">
               <h3 className="ml-2">RESUME</h3>
          <hr />
            <ul className="nav flex-column sticky">
                <li className="nav-item">
                      <Link to="education" className="nav-link sed" smooth={true}>Education</Link>
               </li>
               <li className="nav-item">
                      <Link to="skills" className="nav-link sed" smooth={true}>Skills</Link>
               </li>
            </ul>
            </div>
            <div className="col-sm-8" id="education">
                <h2 className="ed">Education</h2>
                <span className="ii">
                <i class="fas fa-user-graduate icon"></i>
                2020-onwards
                </span>
                <h4 className="mt-1">BS in Computer Science</h4>
                <h4 className="mt-2">University Of Central Punjab</h4>
                <span className="mt-2">CGPA:3.05</span>
                <hr className="" />
                <span className="mt-3 ii">
                <i class="fas fa-graduation-cap icon"></i>
                2018-2020
                </span>
                <h4 className="mt-1">F.S.C (Pre-Eng)</h4>
                <h4 className="mt-2">Government College Civil Lines, Lahore</h4>
                <span className="mt-2">Percentage:75%</span>
                <hr className="" />
                <span className="mt-3 ii">
                <i class="fas fa-school icon"></i>
                2018-2020
                </span>
                <h4 className="mt-1">MARICULATION (Bio)</h4>
                <h4 className="mt-2">Society Public School, Lahore</h4>
                <span className="mt-2">Percentage:90%</span>
                <hr className="" />
                <h2 className="ed mt-4" id="skills">Skills</h2>
                <div className="row">
                    <div className="col-6">
                        <h6 className="mt-3">HTML5</h6>
                        <div class="progress mt-2">
                   <div class="progress-bar bg-success" style={{width:"70%"}}>70%</div>
                        </div>
                        <h6 className="mt-3">CSS3</h6>
                        <div class="progress mt-2">
                   <div class="progress-bar bg-success" style={{width:"60%"}}>60%</div>
                        </div>
                        <h6 className="mt-3">BOOTSTRAP4</h6>
                        <div class="progress mt-2">
                   <div class="progress-bar bg-success" style={{width:"60%"}}>60%</div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h6 className="mt-3">REACT JS</h6>
                        <div class="progress mt-2">
                   <div class="progress-bar bg-success" style={{width:"50%"}}>50%</div>
                        </div>
                        <h6 className="mt-3">NODE JS and EXPRESS</h6>
                        <div class="progress mt-2">
                   <div class="progress-bar bg-success" style={{width:"35%"}}>35%</div>
                        </div>
                        <h6 className="mt-3">JAVASCRIPT</h6>
                        <div class="progress mt-2">
                   <div class="progress-bar bg-success" style={{width:"40%"}}>40%</div>
                        </div>
                        
                        
                    </div>
                    
                </div>
           </div>
        </div>
        </div>
        
        </>
     );
}
 
export default Resume;