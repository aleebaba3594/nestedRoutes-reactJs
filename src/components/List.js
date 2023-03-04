import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function List() {
  return (
    <>

      <div>
        <Link to='students'> Students</Link>
      </div>
      <div>
        <Link to='teachers'> Teachers</Link>
      </div>
      <Outlet/>
    </>
  )
}

export default List
