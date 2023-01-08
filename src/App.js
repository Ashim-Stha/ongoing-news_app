
import './App.css';
import Navbar from './components/Navbar.js';

import React, { Component } from 'react'
import News from './components/News';

export default class news extends Component {
  render() {
    return (
      <div>
        
        <Navbar/>
        <News/>
      </div>
    )
  }
}
