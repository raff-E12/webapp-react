import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router'

export default function NotFoundPage() {
    
  return (
    <>
    <Header/>
    <div className='container-page'>
        <section className="hero" id="home">
            <div className="container-xxl bg-hero">
                <h1>404 Not Found!!</h1>
                <p>Se vuoi aggiungere un film accedi alla sezione form, oppure ricarica la pagina.</p>
                <div  className='btn-groups'>
                  <Link to={"/add-movies"} className='btn'>Aggiungi Film</Link>
                  <button className='btn' onClick={() => {window.location.replace("/")}}> Vai alla HomePage </button>
                </div>
            </div>
        </section>
    </div>
    <Footer />
    </>
  )
}
