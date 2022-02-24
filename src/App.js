import React from "react";
import { Link } from 'react-router-dom'
import './css/navbar.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="nav-element">
            <div className="nav-content active">Home</div>
            <div className="nav-content">Bills <div className="pg-icon down-arrow"></div> 
            <ul>
              <li><Link to="/add-bill">Add Bill</Link></li>
            </ul>
            </div>
            <div className="nav-content">About</div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default App;