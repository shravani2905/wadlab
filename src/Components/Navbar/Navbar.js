import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (
    <div className="navbar">
      
      <h3 className="heading">Amazon</h3>
      <ul className="List">
        
          <li>
          <Link to="/aboutus">
            <button className="btn nav button">About Us</button>
          </Link>
        </li>
            
          <li>
          <Link to="/Signup">
            <button className="btn nav button">Sign up</button>
          </Link>
        </li>
        
        <li>
          <Link to="/signin">
            <button className="btn nav button">Signin</button>
          </Link>
        </li>
        
        <li>
          <Link to="/cart">
            <button className="btn nav button">Cart</button>
          </Link>
        </li>
        
        <li>
          <Link to="/catalogue">
            <button className="btn nav button">Catalogue</button>
          </Link>
        </li>
        
        <li>
          <Link to="/contact">
            <button className="btn nav button">Contact</button>
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Navbar;