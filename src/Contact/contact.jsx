import React from 'react'
import './contact.css'
const Contact = () => {
    return ( 
        <>
        <h2 className="text-center"id="contact">Contact Me</h2>
            <hr className="" />
            <h4 className="text-center">You can Contact Me Here.</h4>
        <div className="container-fluid mt-3"style={{backgroundColor:"black"}} >
       <br /><br />
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card mt-2">
                        <div className="card-body">
                     <h1 className="text-center"> <i class="fas fa-map-marker-alt pi mt-3"></i></h1>
                 <h3 className="text-center mt-4 ">Address</h3>
                 <h5 className="text-center mt-5">House# 2 St#6 Lalpul,Mughalpura,Lahore</h5>
                 <br /><br /> <br />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mt-2">
                        <div className="card-body">
                    <h1 className="text-center"><i class="fas fa-phone pi mt-3"></i></h1>
                 <h3 className="text-center mt-4 ">Contact Number</h3>
                 <h5 className="text-center mt-5">+92 3481609182</h5>
                 <br /><br /><br />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mt-2">
                        <div className="card-body">
                        <h1 className="text-center"><i class="fas fa-envelope pi mt-3"></i></h1>
                 <h3 className="text-center mt-4 ">Email Adress</h3>
                 <h5 className="text-center mt-5">Hananabdul659@gmail.com</h5>
                 <br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{backgroundColor:"red"}}/>
            <br /><br />
            <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h3 className="text-white">About</h3>
                    <h5 className="det mt-4">My name is Abdul Hannan.  I am a MERN STACK Developer and also
                    a Web Designer.</h5>
                </div>
                <div className="col-md-2 ">
                    <h3 className="text-white">Links</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                        <a href="#" className="nav-link jumb">Home</a>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link jumb">About</a>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link jumb">Resume</a>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link jumb">Services</a>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link jumb">Projects</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="text-white">Services</h3>
                    <li className="mt-3 ser">WEB DESIGN</li><br />
                    <li className="mt-2 ser">WEB DEVELOPER</li>
                </div>
                <div className="col-md-4">
                    <h3 className="text-white">Have Questions?</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a href="#" className="nav-link ques ">
                            <i class="fas fa-map-marker-alt  mt-1">
                                <span className="ml-2">House#2 St#6 Lalpul,Mughalpura,Lahore.</span>
                            </i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link ques ">
                            <i class="fas fa-envelope  mt-3">
                            <span className="ml-2">+92 3481609182</span>
                            </i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://mail.google.com/mail/u/0/?pli=1#inbox" className="nav-link ques ">
                            <i class="fas fa-phone  mt-3">
                            <span className="ml-2">hananabdul659@gmail.com</span>
                            </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container">
        <hr className="" style={{backgroundColor:"white"}} />
        <div className="row">
            <div className="col-6 mt-3">
            <a href="https://www.facebook.com/ranaabdul.hanan.75" class="ico border rounded-circle "><i class="fab fa-facebook-square"></i></a>
         <a href="#" class="ico border rounded-circle ml-3"><i class="fab fa-twitter"></i></a>
         <a href="https://www.instagram.com/direct/inbox/" class="ico border rounded-circle ml-3"><i class="fab fa-instagram"></i></a>
         <br /><br /> <br />
         </div>
       
        <div className="col-6">
            <h5 className="text-white">This Portfolio is made by Hannan Rajput.</h5>

        </div>
        </div>
        </div>
        </div>
    
        </>
     );
}
 
export default Contact;