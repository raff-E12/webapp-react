import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router'
import Placeholder from "../../../public/imgs/img_placeholder.png"

export default function MoviesIDSection() {
  const { name } = useParams(); 
  console.log(name);

  return (
   <>
   <Header />

        <section class="book-detail">
        <div class="container">
        <div class="book-header">
            <h1>Il Nome della Rosa</h1>
            <p>di Umberto Eco</p>
        </div>
        <div class="book-image">
        <img src={Placeholder} alt="Il Nome della Rosa" />
        </div>
        <div class="book-description">
            <p>
            Ambientato in un'abbazia medievale del XIV secolo, "Il Nome della Rosa" è un romanzo storico e giallo che unisce mistero, filosofia e religione in una trama avvincente. Segui il monaco Guglielmo da Baskerville e il novizio Adso da Melk in un'indagine su una serie di misteriosi omicidi.
            </p>
        </div>

        <div class="reviews">
            <h2>Recensioni degli Utenti</h2>
            <div class="review">
            <h3>Mario Rossi</h3>
            <p>
                Un capolavoro assoluto. La combinazione di mistero e filosofia rende questo libro unico nel suo genere.
            </p>
            <p class="rating">⭐⭐⭐⭐⭐</p>
            </div>
            <div class="review">
            <h3>Laura Bianchi</h3>
            <p>
                Un romanzo incredibile. Ho adorato l'intreccio della trama e l'ambientazione medievale.
            </p>
            <p class="rating">⭐⭐⭐⭐</p>
            </div>
            <div class="review">
            <h3>Giovanni Verdi</h3>
            <p>
                Molto interessante, ma in alcuni punti un po' complesso. Consigliato a chi ama i romanzi storici.
            </p>
            <p class="rating">⭐⭐⭐⭐</p>
            </div>
        </div>
        </div>
    </section>
   <Footer />
   </>
  )
}
