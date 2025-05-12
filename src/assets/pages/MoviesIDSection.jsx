import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router'
import Placeholder from "../../../public/imgs/img_placeholder.png"
import Movies from "../../assets/api/Movies_list.json"
import Reviews from "../../assets/api/Reviews_list.json"

export default function MoviesIDSection() {
  const { name } = useParams(); 
  console.log(name);

  return (
   <>
   <Header />
    <section class="book-detail">
        <div class="container">
        {Movies.map((element, index) =>{
         if (element.title === name) {
             return(
            <>
            <div class="book-header">
                <h1>{element.title}</h1>
                <p>{element.director}</p>
             </div>
            <div class="book-image">
            <img src={element.image} alt="Il Nome della Rosa" />
            </div>
            <div class="book-description">
            <p>{element.abstract}</p>
            </div>
            </>
          )
         }
        })}
        
        <div class="reviews">
        <h2>Recensioni degli Utenti</h2>
        <div class="reviews">
         {Reviews.map((element, index) => {
            const movies_id_find = Movies.find(movies => { return movies.id === element.movie_id });
            if (movies_id_find) {
               return(
                <>
                <div class="review" key={index}>
                <h3>{element.name}</h3>
                <p>{element.text}</p>
                <p class="rating">⭐⭐⭐⭐⭐</p>
                </div>
                </>
             )
            }
         })}
        </div>
        </div>
        </div>
    </section>
   <Footer />
   </>
  )
}