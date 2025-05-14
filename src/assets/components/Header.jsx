import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
  <header>
    <div className="container header-top">
      <div className="logo">E-Movies</div>
      <nav>
        <ul className="nav-links">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/movies"}>Catologo</Link></li>
          <li><Link to={"/add-movies"}>Aggiungi</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
