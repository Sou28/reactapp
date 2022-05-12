import React from 'react'
import {Link } from 'react-router-dom'

export const RouterTab = () => {
  console.log('Hello world')
  return (
    <div>
        <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
        <li>
        <Link to="/">About</Link>
          </li>
        <li>
        <Link to="/">Contact</Link>
        </li>
        </ul>
     </div>
  )
}



 

 
