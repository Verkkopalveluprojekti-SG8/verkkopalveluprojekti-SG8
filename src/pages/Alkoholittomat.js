import React from 'react'





export default function Alkoholittomat() {


  {categories.map(category => (
    <li className="nav-item">
    <Link className="nav-link" to="/">{category.name}</Link>
  </li>
  ))}


  
  return (
    <div>Tervetuloa Ryyst-verkkokkauppaan!</div>
  )
}




