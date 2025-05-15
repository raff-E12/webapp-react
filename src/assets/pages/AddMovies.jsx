import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from "../../../public/imgs/logo.png"
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Export_Context } from '../api/ApiConnection';

export default function AddMovies() {
    const { Form_sending, isTitle, 
    setTitle, setDirector,
    isDirector,
    isGenre,
    isDate,
    SetDate,
    setGenre,
    isDescription,
    SetDescription,
    isImg,
    setImg, } = Export_Context();

  return (
    <>
    <Header />
    <div className="container-form">
     <div className='logo-icon'>
        <img src={Logo} alt="logo-sc" draggable="false" />
     </div>
      <h1 className="form-title">Aggiungi Nuovo Film</h1>
    <form action="#" method="POST" className="form" onSubmit={e => Form_sending(e.preventDefault())}>

      <div className="form-group">
        <label for="title" className="form-label">Titolo del Film</label>
        <input type="text" id="title" name="title" placeholder="Inserisci il titolo del film" className="form-input" required value={isTitle} onChange={e => setTitle(e.target.value)}/>
      </div>

    <div className="form-group">
        <label for="title" className="form-label">Regista</label>
        <input type="text" id="director" name="director" placeholder="Inserisci il nome del regista" className="form-input" required value={isDirector} onChange={e => setDirector(e.target.value)}/>
      </div>

      <div className="form-group">
        <label for="genre" className="form-label">Genere</label>
        <select id="genre" name="genre" className="form-select" required value={isGenre} onChange={e => setGenre(e.target.value)}>
          <option value="">Seleziona un genere</option>
          <option value="Action">Azione</option>
          <option value="Dramatic">Drammatico</option>
          <option value="Comedy">Commedia</option>
          <option value="Science Fiction">Fantascienza</option>
          <option value="Horror">Horror</option>
          <option value="Animation">Animazione</option>
          <option value="Another">Altro</option>
        </select>
      </div>

      <div className="form-group">
        <label for="release_date" className="form-label">Data di Uscita</label>
        <input type="text" id="release_date" name="release_date" className="form-input" placeholder='Es:2002..' required value={isDate} onChange={e => SetDate(e.target.value)}/>
      </div>

      <div className="form-group">
        <label for="description" className="form-label">Descrizione</label>
        <textarea id="description" name="description" rows="5" placeholder="Inserisci una descrizione del film" className="form-textarea" required value={isDescription} onChange={e => SetDescription(e.target.value)}></textarea>
      </div>

      <div className="form-group">
        <label for="image" className="form-label">Immagine del Film</label>
        <input type="file" id="image" name="image" accept="image/*" className="form-input" required  value={isImg} onChange={e => setImg(e.target.value)}/>
      </div>

      <button type="submit" className="form-button">Aggiungi Film</button>
    </form>
  </div>
    <Footer />
    </>
  )
}
