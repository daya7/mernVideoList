import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container  ">
          <Link className="navbar-brand  " to="/">My Favorite Videos</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              
              <li className="nav-item">
                <Link className="nav-link " to="/form">Create New Video</Link>
              </li>
                      
            </ul>
            
          </div>
        </div>
      </nav>
    )
}

export default Navbar
