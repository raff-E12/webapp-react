import axios from 'axios';
import React, { createContext, use, useContext, useEffect, useState } from 'react'

const ApiContext = createContext();

function ApiConnection({children}) {
  const [isMovies, setMovies] = useState([]);
  const [isReviews, setReviews] = useState([]);
  const [isUpdate, setUpdate] = useState(null);
  const [isID, SetID] = useState(0);
  const [isUser, SetUser] = useState("");
  const [isVote, SetVote] = useState(0);
  const [isText, SetText] = useState("");
  const [isAVG, setAVG] = useState(0);
  
  async function Movies_List() {
    try {
      const api_link = "http://localhost:4000/api/movies/all";
      const fetch_api = await axios.get(api_link);
      const data = await fetch_api.data;
      setMovies(data.result);
      // console.log(isMovies);
    } catch (error) {
      throw new Error(error);
    }
  }

 async function Reviews_list() {
    try {
      setUpdate(false);
      const api_link = `http://localhost:4000/api/reviews/${isID}`;
      const fetch_api = await axios.get(api_link);
      const data = await fetch_api.data;
      setReviews(data.result);
      // console.log(isReviews);
    } catch (error) {
      throw new Error(error);
    }
    setTimeout(() =>{
      setUpdate(true);
    }, 1000)
  }

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
    Reviews_list();
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() =>{ Add_Reviews() },[]);
  useEffect(() =>{ Reviews_list() },[isID]);
  useEffect(() =>{ Movies_List() },[]);

  const export_items = {
    isMovies,
    setMovies,
    SetID,
    isID,
    isReviews,
    isUpdate,
    isUser,
    isVote,
    isText,
    SetUser,
    SetVote,
    SetText,
    Add_Reviews,
    isAVG,
    setAVG
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
