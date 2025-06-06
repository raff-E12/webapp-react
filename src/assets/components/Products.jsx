import React, { useRef, useState } from 'react'
import placeholder from "../../../public/imgs/img_placeholder.png"
import Movies from "../../assets/api/Movies_list.json"
import { useNavigate } from 'react-router'
import { Export_Context } from '../api/ApiConnection';

export default function Products() {
  const [isCount, setCount] = useState(0);
  const navigate_link = useNavigate();
  const { isMovies, setMovies, SetID, isID } = Export_Context();

  return (
  <section className="products" id="prodotti">
    <div className="container">
      <h2>Film in Evidenza</h2>
      <div className="product-grid">
        {isMovies.length === 0 ? <div className="loading-container">
          <div className="box-loading"></div>
          </div> : isMovies.map((element, index) =>{
            
            // Sorteggio casuale in base un limite casuale.
            const random_id = isMovies[Math.floor(Math.random() * isMovies.length)].id;
         if (index < random_id) {
            return(
            <>
            <div className="product" key={index}>
              <img src={element.image} alt="movies-icons" />
              <h3>{element.title}</h3>
              <p>Regista: {element.director}</p>
              <button className="btn" onClick={() => navigate_link(`/movies/${element.title}`)}>Leggi Ora</button>
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
