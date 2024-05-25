import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <div>
        <div className="navbar">
        <h1>Eterna</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Team</li>
            <li className='dropdown'>Details</li>
            <li>Blog</li>
        </ul>
      
        <Link to='/admin'><button>Admin</button></Link>
        </div>
    </div>
  )
}

export default Navbar