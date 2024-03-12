import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const loggedin = false;

const Navbar = () => {
  return (
    <>
    <div style={{display: loggedin === true? "block" : "none"}}>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/">Home</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar