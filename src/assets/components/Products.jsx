import React from 'react'
import placeholder from "../../../public/imgs/img_placeholder.png"

export default function Products() {
  return (
    
  <section class="products" id="prodotti">
    <div class="container">
      <h2>Film in Evidenza</h2>
      <div class="product-grid">
        <div class="product">
          <img src={placeholder} alt="Libro 1" />
          <h3>Titolo Libro 1</h3>
          <p>Autore: Mario Rossi</p>
          <button class="btn">Acquista Ora</button>
        </div>
        <div class="product">
          <img src={placeholder} alt="Libro 2" />
          <h3>Titolo Libro 2</h3>
          <p>Autore: Laura Bianchi</p>
          <button class="btn">Acquista Ora</button>
        </div>
        <div class="product">
          <img src={placeholder} alt="Libro 3" />
          <h3>Titolo Libro 3</h3>
          <p>Autore: Giovanni Verdi</p>
          <button class="btn">Acquista Ora</button>
        </div>
      </div>
    </div>
  </section>

  )
}
