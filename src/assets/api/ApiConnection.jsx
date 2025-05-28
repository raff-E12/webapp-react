import axios from 'axios';
import React, { createContext, use, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const ApiContext = createContext();

function ApiConnection({children}) {
  const [isMovies, setMovies] = useState([]);
  const [isReviews, setReviews] = useState([]);
  const [isUpdate, setUpdate] = useState(true);
  const [isID, SetID] = useState(0);
  const [isUser, SetUser] = useState("");
  const [isVote, SetVote] = useState(0);
  const [isText, SetText] = useState("");
  const [isAVG, setAVG] = useState(0);
  const [isTitle, setTitle] = useState("");
  const [isDirector, setDirector] = useState("");
  const [isGenre, setGenre] = useState("");
  const [isDate, SetDate] = useState("");
  const [isDescription, SetDescription] = useState("");
  const [isImg, setImg] = useState("");
  const navigate_link = useNavigate();
  

  // Gestione della lista di Film
  async function Movies_List() {
    try {
      const api_link = "http://localhost:4000/api/movies/all";
      const fetch_api = await axios.get(api_link);
      const data = await fetch_api.data;
      setMovies(data.result);
      // console.log(isMovies);
    } catch (error) {
      navigate_link("/404-list");
      throw new Error(error);
    }
  }

// Gestione della lista di recensioni
 async function Reviews_list() {
    setUpdate(true); // Gestione di Caricamento.
    // console.log(isUpdate);
    try {
      const api_link = `http://localhost:4000/api/reviews/${isID}`;
      const fetch_api = await axios.get(api_link);
      const data = await fetch_api.data;
      // console.log(data);
    if (data.code === 404 && Array.isArray(data.result) && data.result.length === 0) {
        setAVG(0);
        setUpdate(false); 
        setReviews([]);
     
    } else {
      setAVG(Number(data.result[0].average_rating));
      setReviews(data.result);
    } 
    } catch (error) {
      throw new Error(error);
    }
    setTimeout(() => {
      setUpdate(false);
    }, 1000);
  }

  // Gestione di aggiunta delle recensioni
  async function Add_Reviews(){
    try {
    const object_composition = {
      movie_id: isID,
      name: isUser,
      vote: isVote,
      text: isText
    }
    const url_api = "http://localhost:4000/api/reviews/add";
    const fetch_api = await axios.post(url_api, object_composition);
    // console.log(fetch_api.data);
    setTimeout(() =>{
      Reviews_list();
    }, 1000)
    } catch (error) {
      throw new Error(error);
    } finally {
      SetUser("");
      SetVote("");
      SetText("");
    }
  }

  const object_movies = {
    title: isTitle,
    director: isDirector,
    genre: isGenre,
    release_year: Number(isDate),
    abstract: isDescription,
    image: "../../../public/imgs/" + isImg.split("\\").pop()
  };
  
  // Gestione aggiunta dei Film
  async function Form_sending() {
  if (object_movies.title !== 0 && object_movies.director !== 0 && object_movies.genre !== 0 &&
  object_movies.release_year !== 0 && object_movies.abstract !== 0 && object_movies.image !== 0) {
    try {
    console.log(object_movies);
    const url = "http://localhost:4000/api/movies/add";
    await axios.post(url, object_movies);
    return window.alert("Aggiunto con successo");
    } catch (error) {
      window.alert("Non è stato Importato, Riprova o ricarica la pagina");
      throw new Error(error);
    } finally{
      setTitle("");
      setDirector("");
      setGenre("");
      setImg("");
      SetDescription("");
      SetDate("");
      Movies_List();
    }
        }
      }

  useEffect(() =>{ Add_Reviews() },[]);
  useEffect(() =>{ Reviews_list() },[isID]);
  useEffect(() =>{ Movies_List() },[]);
  useEffect(() => { Form_sending() }, []);

  const export_items = {
    isMovies,
    setMovies,
    SetID,
    isID,
    isReviews,
    isUpdate,
    setUpdate,
    isUser,
    isVote,
    isText,
    SetUser,
    SetVote,
    SetText,
    Add_Reviews,
    isAVG,
    setAVG,
    Form_sending,
    isTitle,
    setTitle,
    setDirector,
    isDirector,
    isGenre,
    setGenre,
    isDescription,
    SetDescription,
    isImg,
    setImg,
    isDate,
    SetDate
  }

  return (
    <ApiContext.Provider value={export_items}>
      {children}
    </ApiContext.Provider>
  )
}

function Export_Context() {
  const imp_context = useContext(ApiContext);
  return imp_context
}

export { ApiConnection, Export_Context }
