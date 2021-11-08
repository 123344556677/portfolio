import React from 'react'
import pic from './self.jpeg'
import './about.css'
const About = () => {
    return ( 
        
      <>
      <div className="container" id="about">
      
          <br /><br />
          {/* <div className="col-6">
              <img src={pic} alt="" className="im mt-3" />
          </div> */}
          <br />
          <div className="col-lg-12 mt-3">
            <h3 className="about mt-3 text-center">ABOUT ME</h3>
            <h5 className="mt-3 text-center" style={{color:"grey"}}>I am a MERN STACK Developer and a Web Designer.
            I am beginner at REACT JS,<br /> NODE JS and EXPRESS and GOOD AT HTML5,CSS3 and BOOTSTRAP 4. <br /> I am also familiar with 
            basic level of JAVASCRIPT and C++. </h5>
            <br /> 
            <div className="row mt-4 justify-content-center" >
                <div className="col-md-3">
             <h5 className="q">NAME:</h5>
             <h5 className="q mt-3">AGE:</h5>
             <h5 className="q mt-3">DEGREE:</h5>
             <h5 className="q mt-3">UNIVERSITY:</h5>
             <h5 className="q mt-3">STUDY:</h5>
             </div>
             <div className="col-md-5">
             <h6 className="a">ABDUL HANNAN</h6>
             <h6 className="a mt-4">21</h6>
             <h6 className="a mt-3">BS (Computer Science)</h6>
             <h6 className="a mt-4">UNIVERSITY OF CENTRAL PUNJAB</h6>
             <h6 className="a mt-4">3rd Semester</h6>
             </div>
             </div>
              </div>
      
      <hr />
      </div>
      </>

     );
}
 
export default About;