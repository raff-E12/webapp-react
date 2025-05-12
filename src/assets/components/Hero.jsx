import React from 'react'
import { Link } from 'react-router'

export default function Hero() {
  return (
  <section class="hero" id="home">
    <div class="container-xxl bg-hero">
      <h1>Benvenuto nel nostro E-commerce di Film</h1>
      <p>Trova i tuoi film preferiti con un solo click</p>
      <Link to={"/movies"} className='btn'>Scopri di più</Link>
    </div>
  </section>

  )
}
