import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from "../../../public/imgs/logo.png"

export default function AddMovies() {
  return (
    <>
    <Header />
    <div class="container-form">
     <div className='logo-icon'>
        <img src={Logo} alt="logo-sc" draggable="false" />
     </div>
      <h1 class="form-title">Aggiungi Nuovo Film</h1>
    <form action="#" method="POST" class="form">

      <div class="form-group">
        <label for="title" class="form-label">Titolo del Film</label>
        <input type="text" id="title" name="title" placeholder="Inserisci il titolo del film" class="form-input" required />
      </div>

      <div class="form-group">
        <label for="genre" class="form-label">Genere</label>
        <select id="genre" name="genre" class="form-select" required>
          <option value="">Seleziona un genere</option>
          <option value="azione">Azione</option>
          <option value="drammatico">Drammatico</option>
          <option value="commedia">Commedia</option>
          <option value="fantascienza">Fantascienza</option>
          <option value="horror">Horror</option>
          <option value="animazione">Animazione</option>
          <option value="altro">Altro</option>
        </select>
      </div>

      <div class="form-group">
        <label for="release_date" class="form-label">Data di Uscita</label>
        <input type="date" id="release_date" name="release_date" class="form-input" required />
      </div>

      <div class="form-group">
        <label for="description" class="form-label">Descrizione</label>
        <textarea id="description" name="description" rows="5" placeholder="Inserisci una descrizione del film" class="form-textarea" required></textarea>
      </div>

      <div class="form-group">
        <label for="image" class="form-label">Immagine del Film</label>
        <input type="file" id="image" name="image" accept="image/*" class="form-input" required />
      </div>

      <button type="submit" class="form-button">Aggiungi Film</button>
    </form>
  </div>
    <Footer />
    </>
  )
}
