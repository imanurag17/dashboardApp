import logo from './logo.svg';
import './Sass/main.css';
import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Component/header';
import Home from './Component/home'
import Dashboard from './Component/dashboard'
import Email from './Component/email'


class App extends Component {
  state = {  } 
  render() { 
    return (
      <>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/task' element={<Dashboard/>}/>
        <Route path='/email' element={<Email/>}/>
      </Routes>
      </BrowserRouter>
      </>
    );
  }
}
 
export default App;


<>
Hello
</>