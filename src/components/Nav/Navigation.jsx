// import React from 'react'
// import './styles.css'
import { Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='nav'>
    <a>
        Home
    </a>
    <a>
        About
    </a>
    <a>
        Contact
    </a>
    <Outlet/>
    </div>
    
  )
}

export default Navigation