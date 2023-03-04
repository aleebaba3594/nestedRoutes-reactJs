import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <NavLink to='/'>home</NavLink>
        <div>
            
        <NavLink to='/contact'>contact</NavLink>
        </div>
        <div>

        <NavLink to='/list'>list</NavLink>
        </div>


    </div>
  )
}

export default Nav
