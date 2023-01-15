
import './App.css';
import Navbar from './components/Navbar.js';

import React, { Component } from 'react'
import News from './components/News';
import {
  
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default class news extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar/>
     <Routes>
      <Route exact path="/" element={<News key="general" pageSize={5} category="general"/>}/>
      <Route exact path="/business" element={<News key="business" pageSize={5} category="business" />} />
      <Route exact path="/sports" element={<News key="sports" pageSize={5} category="sports" />} />
      <Route exact path="/science" element={<News key="science" pageSize={5} category="science" />} />
      </Routes>
       
      </div>
      </Router>
    )
  }
}
