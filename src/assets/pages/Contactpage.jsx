import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contactpage() {
  return (
    <>
    <Header/>
  <section className="contacts" id="contatti">
    <div className="container">
      <h2>Contattaci</h2>
      <div className="contact-form">
        <form action="#" method="POST">
          <label for="name">Nome</label>
          <input type="text" id="name" name="name" placeholder="Inserisci il tuo nome" required />
          
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Inserisci la tua email" required />
          
          <label for="message">Messaggio</label>
          <textarea id="message" name="message" rows="5" placeholder="Scrivi il tuo messaggio..." required></textarea>
          
          <button type="submit">Invia Messaggio</button>
        </form>
      </div>
    </div>
   </section>
    <Footer/>
    </>
  )
}
