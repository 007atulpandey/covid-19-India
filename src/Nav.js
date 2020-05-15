import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
function Nav() {
  
  return (
    <nav>
        <Link className="link" to="/"><h3>Logo  </h3></Link>
        <ul className="nav-links">
        <Link className="link" to="/about"><li>About   </li></Link>
        <Link className="link" to="/shop"><li>Covid-19 India   </li></Link>
            </ul>
            <div id="main" className ="action" onClick={addEventListener=>{  document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").classList.add('hidden');         }}>
                <div className="line">
                  </div>
                  <div className="line">
                  </div>
                  <div className="line">
                  </div>
              </div>
              <div id="mySidenav" class="sidenav">
              <a href="javascript:void(0)" class="closebtn" onClick={ addEventListener=>{ document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").classList.remove('hidden')}}>&times;</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
</div>

     </nav>
  );
}

export default Nav;
