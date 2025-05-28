import React from 'react'
import { Link } from 'react-router'
import Logo from "../../../public/imgs/logo.png"
import { Export_Context } from '../api/ApiConnection'

export default function Header() {
  const { isMovies } = Export_Context();

  return (
  <header>
    <div className="container header-top">
      <div class="logo-container">
        <i class="fa-solid fa-play"></i>
        <div className="logo-text">E-Movies</div>
      </div>
      <nav>
        {isMovies.length !== 0 ?  <ul className="nav-links">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/movies"}>Catologo</Link></li>
          <li><Link to={"/add-movies"}>Aggiungi</Link></li>
        </ul> :  <ul className="nav-links">
          <li><Link to={"/add-movies"}>Aggiungi</Link></li>
        </ul>}
      </nav>
    </div>
  </header>
  )
}
