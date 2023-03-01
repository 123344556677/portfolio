// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter,Route,Switch} from 'react-router-dom'
import About from './About/About';
import bimage from './bggg.png'
import Contact from './Contact/contact';
import Main from './main/main';
import Navbar from './Navbar/navbar'
import Projects from './PROJECTS/project';
import Resume from './RESUME/RESUME';
import Services from './Services/services';

function App() {
  return (
    <>
    
     <div style={{backgroundImage:`url(${bimage})`,height:"800px"}}>
    <Navbar/>
    <br /> <br /> <br />
    <Main/>
    </div>
    <br /> <br /> <br /> 
    <About/>
    <br /><br /><br />
    <Resume/>
    <br /><br /><br />
    <Services/>
    <br /><br /><br />
    {
    // <Projects/>
}
    <br /><br /><br />
    <Contact/>
    </>
  );
}

export default App;
