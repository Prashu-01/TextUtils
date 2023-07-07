import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextEditor</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Prashu-01/TextUtils">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          
          {/* color pallete */}
          <div className="palette mx-2" onClick={()=>{props.togglemode(1)}} style={{background: 'red',height: '30px',width: '30px',borderRadius: '5px'}}></div>
          <div className="palette mx-2" onClick={()=>{props.togglemode(2)}} style={{background: 'yellow',height: '30px',width: '30px',borderRadius: '5px'}}></div>
          <div className="palette mx-2" onClick={()=>{props.togglemode(3)}} style={{background: 'black',height: '30px',width: '30px',borderRadius: '5px'}}></div>
          <div className="palette mx-2" onClick={()=>{props.togglemode(4)}} style={{background: 'white',height: '30px',width: '30px',borderRadius: '5px',border:'1px solid'}}></div>
          
          {/* for toggle dark to light or vice-versa */}
          {/* <div className={` form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckChecked"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">DarkMode</label>
          </div> */}
        </div>
      </div>
    </nav>
  )
}
