import React from "react";
import {Link } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi How are you?
        </p>
        <Link to="/user">Invoices</Link>
      </header>
      
    </div>
  );
}

export default App;
