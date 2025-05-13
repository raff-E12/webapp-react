import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const ApiContext = createContext();

function ApiConnection({children}) {
  const [isMovies, setMovies] = useState([]);
  
  async function Api_response() {
    try {
      const api_link = "http://localhost:4000/api/movies/all";
      const fetch_api = await axios.get(api_link);
      const data = await fetch_api.data;
      setMovies(data.result);
      console.log(isMovies);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() =>{ Api_response() },[]);

  const export_items = {
    isMovies,
    setMovies
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
