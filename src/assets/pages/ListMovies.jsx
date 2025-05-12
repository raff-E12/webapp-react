import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Placeholder from "../../../public/imgs/img_placeholder.png"
import Movies from "../../assets/api/Movies_list.json"
import { Link, useNavigate } from 'react-router'

export default function ListMovies() {
  const navigate_link = useNavigate();

  return (
    <>
    <Header />
    <section class="catalog" id="catalogo">
    <div class="container">
      <h2>Catalogo Completo</h2>
      <div class="catalog-grid">
        {Movies.map((element, index) => {
          return(
          <div class="book" key={index}>
            <img src={element.image} alt="movies-icons" />
            <h3>{element.title}</h3>
            <p>Regista: {element.director}</p>
            <button class="btn" onClick={() => navigate_link(`/movies/${element.title}`)}>Leggi Ora</button>
          </div>
          )
        })}
      </div>
    </div>
  </section>
  <Footer />
    </>
  )
}
