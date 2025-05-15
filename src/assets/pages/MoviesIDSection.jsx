import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router'
import Placeholder from "../../../public/imgs/img_placeholder.png"
import Movies from "../../assets/api/Movies_list.json"
import Reviews from "../../assets/api/Reviews_list.json"
import { Export_Context } from '../api/ApiConnection'
import Rater from 'react-rater'
import ReviewsForm from '../components/ReviewsForm'


export default function MoviesIDSection() {
  const { name } = useParams(); 
  const { isMovies, setMovies, SetID, isID, isReviews, isUpdate, setAVG, isAVG, setUpdate } = Export_Context();

  return (
   <>
   <Header />
    <section className="book-detail">
        <div className="container">
        {isMovies.length === 0 ? <div className="loading-container">
          <div className="box-loading"></div>
          </div> : isMovies.map((element) =>{
         if (element.title === name) {
             SetID(Number(element.id));
             return(
            <>
            <div className="book-header">
                <h1>{element.title}</h1>
                <p>{element.director}</p>
             </div>
            <div className="book-image">
            <img src={element.image} alt="Il Nome della Rosa" />
            </div>
            <div className="book-description">
            <p>{element.abstract}</p>
            </div>
            </>
          )
         }
        })}
        
        <div className="reviews">
            <h2>Recensioni degli Utenti</h2>
           <section class="container average-rating">
              <h3>Media delle Recensioni</h3>
              <p><Rater total={5} rating={Number(isAVG)}/> {`${isAVG}/5`}</p>
            </section>
            <div className="reviews">
               {isReviews.length !== 0 && !isUpdate ? isReviews.map((element, index) => {
                     return(
                     <>
                     <div className="review" key={index}>
                     <h3>{element.name}</h3>
                     <p>{element.text}</p>
                     <p className="rating">
                       <Rater total={5} rating={Number(element.vote)}/>
                     </p>
                     </div>
                     </>
                  )
               }) : isUpdate ? <div class="loading-container">
               <div className="box-loading"></div>
               </div> : <p className='container text-center'>Ancora nessuna recensione...</p>
              }
            </div>
         </div>
        </div>
        <ReviewsForm />
    </section>
   <Footer />
   </>
  )
}