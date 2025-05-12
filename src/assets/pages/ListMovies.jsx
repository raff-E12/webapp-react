import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Placeholder from "../../../public/imgs/img_placeholder.png"

export default function ListMovies() {
  return (
    <>
    <Header />
    <section class="catalog" id="catalogo">
    <div class="container">
      <h2>Catalogo Completo</h2>
      <div class="catalog-grid">
        <div class="book">
          <img src={Placeholder} alt="Libro 1" />
          <h3>Titolo Libro 1</h3>
          <p>Autore: Mario Rossi</p>
          <button class="btn">Acquista Ora</button>
        </div>
        <div class="book">
          <img src={Placeholder} alt="Libro 2" />
          <h3>Titolo Libro 2</h3>
          <p>Autore: Laura Bianchi</p>
          <button class="btn">Acquista Ora</button>
        </div>
        <div class="book">
          <img src={Placeholder} alt="Libro 3" />
          <h3>Titolo Libro 3</h3>
          <p>Autore: Giovanni Verdi</p>
          <button class="btn">Acquista Ora</button>
        </div>
        <div class="book">
          <img src={Placeholder} alt="Libro 4" />
          <h3>Titolo Libro 4</h3>
          <p>Autore: Anna Neri</p>
          <button class="btn">Acquista Ora</button>
        </div>
        <div class="book">
          <img src={Placeholder} alt="Libro 5" />
          <h3>Titolo Libro 5</h3>
          <p>Autore: Luca Blu</p>
          <button class="btn">Acquista Ora</button>
        </div>
        <div class="book">
          <img src={Placeholder} alt="Libro 6" />
          <h3>Titolo Libro 6</h3>
          <p>Autore: Silvia Gialli</p>
          <button class="btn">Acquista Ora</button>
        </div>
      </div>
    </div>
  </section>
  <Footer />
    </>
  )
}
