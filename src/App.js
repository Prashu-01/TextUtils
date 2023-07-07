// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  let txarea = document.querySelector('.form-control')
  // let container = document.querySelector('.container')

  const [mode, setmode] = useState('light');

  const togglemode = (n) => {
    switch(n){
      case 1:
        setmode('danger')
        txarea.style.backgroundColor = '#ffeded';
        break
      case 2:
        setmode('warning')
        txarea.style.backgroundColor = '#fffff2';
        break
      case 3:
        setmode('dark')
        txarea.style.backgroundColor = 'rgb(220 220 220)';
        break
      case 4:
        setmode('light')
        txarea.style.backgroundColor = 'rgb(251 251 251)';
        break
      default:
        setmode('light')
    }
    // simple dark mode 
    // if (mode === 'light') {
    //   setmode('dark');
    //   document.body.style.backgroundColor = 'black';
    //   container.style.color = 'white';
    //   txarea.style.backgroundColor = '#373737';
    //   txarea.style.color = 'grey';
    // }
    // else {
    //   setmode('light');
    //   document.body.style.backgroundColor = 'white';
    //   container.style.color = 'black';
    //   txarea.style.backgroundColor = 'white';
    // }
  }
  // let n=1

  return (
    <Router>
      <Navbar mode={mode} togglemode={togglemode} />
      <div>
        <Routes>
          <Route path="/" element={<TextArea heading="Enter your text here" mode={mode} />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
        {/* <TextArea heading="Enter your text here" mode={mode}/> */}
        {/* <About/> */}
      </div>
    </Router>
  );
}

export default App;
