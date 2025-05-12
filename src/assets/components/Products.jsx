import React from 'react'
import placeholder from "../../../public/imgs/img_placeholder.png"
import Movies from "../../assets/api/Movies_list.json"
import { useNavigate } from 'react-router'

export default function Products() {
  const navigate_link = useNavigate();

  return (
  <section class="products" id="prodotti">
    <div class="container">
      <h2>Film in Evidenza</h2>
      <div class="product-grid">
        {Movies.map((element, index) =>{
         if (element.id > 2) {
            return(
            <>
            <div class="product" key={index}>
              <img src={element.image} alt="movies-icons" />
              <h3>{element.title}</h3>
              <p>Regista: {element.director}</p>
              <button class="btn" onClick={() => navigate_link(`/movies/${element.title}`)}>Leggi Ora</button>
           </div>
            </>
          )
         }
        })}
      </div>
    </div>
  </section>

  )
}
