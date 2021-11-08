import React from 'react'
import './main.css'
const Main = () => {
    
    return ( 

        <>
        <div className="container" id="home">
        <h6 className="text-center m">HELLO,I AM</h6>
        <h2 className="nam text-center ">ABDUL HANNAN</h2>
        <h6 className="text-center m">I AM A SOFTWARE ENGINEER.</h6><br />
        <div className="text-center">
        <button type="button" className="btn  btn-outline-danger mt-3" data-toggle="collapse"
         data-target="#demo">More Info</button></div> <br /> <br />
         <h5 className=" tex text-center collapse " id="demo">
         I am MERN STACK Developer. <br /> I am beginner in REACT JS,NODE JS, <br /> EXPRESS and MONGO DB.
        For  Web  Designing,<br /> I am good at HTML5,CSS3  and <br /> BOOTSTRAP4.</h5>
        <br /><br /> <br />
        </div>
        </>
     );
}
 
export default Main;