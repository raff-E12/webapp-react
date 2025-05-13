import React from 'react'
import { Export_Context } from '../api/ApiConnection';

export default function ReviewsForm() {
  const { isUser, isVote, isText, SetUser, SetVote, SetText, Add_Reviews } = Export_Context();

  return (
    <>
  <section className="container form-container" onSubmit={(e) => Add_Reviews(e.preventDefault())}>
    <h2>Aggiungi una Recensione</h2>
    <form action="#" method="POST">
      <div className="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" placeholder="Inserisci il tuo nome" required onChange={(e) => SetUser(e.target.value)} value={isUser}/>
      </div>
      <div className="form-group">
        <label for="review">Recensione</label>
        <textarea id="review" name="review" rows="4" placeholder="Scrivi la tua recensione..." required onChange={(e) => SetText(e.target.value)} value={isText}></textarea>
      </div>
      <div className="form-group">
        <label for="rating">Valutazione</label>
        <select id="rating" name="rating" required onChange={(e) => SetVote(e.target.value)} value={isVote}>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      <div className="form-group">
        <button type="submit">Invia Recensione</button>
      </div>
    </form>
  </section>
    </>
  )
}
