import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Placeholder from "../../../public/imgs/img_placeholder.png"
import Movies from "../../assets/api/Movies_list.json"
import { Link, useNavigate, useSearchParams } from 'react-router'
import { Export_Context } from '../api/ApiConnection'

export default function ListMovies() {
  const navigate_link = useNavigate();
  const { isMovies, setMovies } = Export_Context();

  return (
    <>
    <Header />
    <section class="catalog" id="catalogo">
    <div class="container">
      <h2>Catalogo Completo</h2>
      <div class="catalog-grid">
      {isMovies.length === 0 ? <div class="loading-container">
          <div class="box-loading"></div>
          </div> : isMovies.map((element, index) =>{
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
        })}
      </div>
    </div>
  </section>
  <Footer />
    </>
  )
}
