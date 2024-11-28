import React from "react";
import './Header.css';

const Header=()=>{

return(
    <header className="header">
        <h1>Farm Fresh Products</h1>
        <nav>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li> 
                <li><a href="">Signup</a></li>
              <div className="login">  <li><a href="">signin</a></li></div>
            </ul>
        </nav>
    </header>


);

};

export default Header;
