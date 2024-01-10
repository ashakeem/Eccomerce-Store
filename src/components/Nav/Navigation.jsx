import React from 'react'
import './styles.css'
import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navigation = () => {
  return (
   <Fragment>
     <div className='nav'>
     <Link to='/'>
        Home
    </Link>
    <Link to='/about'>
        About
    </Link>
    <Link to='/contact'>
        Contact
    </Link>
     </div>
    <Outlet/>
   </Fragment>
    
  )
}

export default Navigation