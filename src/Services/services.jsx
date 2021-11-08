import React from 'react';
import './services.css'
const Services = () => {
    return ( 
        <>
        <h1 className="text-center">Services</h1>
        
        <div className="container mt-5" id="service">
        <hr />
        <h5 className="text-center mt-2">This is What I can Provide YOU.</h5>
        <div className="row">
         <div className="col-md-6">
             <div className="card">
                 <div className="card-body">
                 <h1 className="text-center"><i class="fas fa-paint-brush i mt-4"></i></h1>
                 <p className="text-center mt-4 t">Web Design</p>
                 <hr className="line mt-2"/>
                 <p className="text-center mt-3">I am a web designer with <br /> excellent experience in HTLM5 <br /> CSS3  and BOOTSTRAP4</p>
                 </div>
             </div>
         </div>
         <div className="col-md-6">
             <div className="card">
                 <div className="card-body">
                 <h1 className="text-center">  <i class="fas fa-tools mt-4 i"></i></h1>
                 <p className="text-center mt-4 t">Web Developer</p>
                 <hr className="line mt-2"/>
                 <p className="text-center mt-3">I am a web developer with <br /> excellent knowledge of REACT JS <br /> NODE JS  and EXPRESS</p>
                 </div>
             </div>
         </div>
        </div>
        </div>
        </>
         );
}
 
export default Services;