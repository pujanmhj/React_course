import React from 'react';
import Nav from './component/Nav'
import Home from './component/Home';
import Footer from './component/Footer'
import Forhome from './component/Products';
import Forpractise from './component/Forpractise';

import{BrowserRouter as Router,Route,Routes }from 'react-router-dom';
function App() { 
  return (
    <div>
  <Nav></Nav>
  <Home/>
  <Footer></Footer>
    </div>
  );
}

export default App;
