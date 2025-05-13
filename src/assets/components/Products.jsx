import React, { useRef } from 'react'
import placeholder from "../../../public/imgs/img_placeholder.png"
import Movies from "../../assets/api/Movies_list.json"
import { useNavigate } from 'react-router'
import { Export_Context } from '../api/ApiConnection';

export default function Products() {
  const navigate_link = useNavigate();
  const { isMovies, setMovies, SetID, isID } = Export_Context();

  return (
  <section class="products" id="prodotti">
    <div class="container">
      <h2>Film in Evidenza</h2>
      <div class="product-grid">
        {isMovies.length === 0 ? <div class="loading-container">
          <div class="box-loading"></div>
          </div> : isMovies.map((element, index) =>{
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
