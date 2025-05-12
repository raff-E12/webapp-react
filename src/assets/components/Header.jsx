import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
  <header>
    <div class="container header-top">
      <div class="logo">E-Movies</div>
      <nav>
        <ul class="nav-links">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/movies"}>Catologo</Link></li>
          <li><Link to={"/contact"}>Contatti</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
