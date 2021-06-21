import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Navigation=()=>{
return (
   <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
   <div className="container-fluid">
     <a className="navbar-brand" href="#">COVAXSYS</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       <ul className="navbar-nav ml-auto justify-content-center">
       <li className="nav-item"><NavLink to="/home" className="nav-link active" aria-current="page" href="#">Home</NavLink></li>
         <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Book Appointment</a></li>
         <li className="nav-item"><a className="nav-link" href="#">Vaccine Centers</a></li>
         <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
         <li className="nav-item"><NavLink to="/signup"><button class="btn btn-outline-success" type="submit">Sign In</button></NavLink></li>
       </ul>
     </div>
   </div>
 </nav>
   </div>
);
}
export default Navigation;