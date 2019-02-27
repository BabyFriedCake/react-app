import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Home from './components/Home'
import News from './components/News'
import Test from './components/Test'
class App extends Component {
  // render模板 jsx
  render() {
    return (
      <div className="App">
        我是App
        <Home/>
        <News/>
        <Test/>
      </div>
    );
  }
}

export default App;

