import React from 'react';
import Shop from './Shop';
import About from './About';
import Nav from './Nav';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
      
        
    </div>
    </Router>
  );
}

const Home=()=>{
  return (
    <h1>
      Home page
      </h1>
  )
}

export default App;
