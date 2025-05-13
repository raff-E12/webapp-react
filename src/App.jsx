import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Homepage from './assets/pages/Homepage'
import ListMovies from './assets/pages/ListMovies'
import Contactpage from './assets/pages/Contactpage'
import MoviesIDSection from './assets/pages/MoviesIDSection'
import { ApiConnection } from './assets/api/ApiConnection'

function App() {
  return (
    <>
    <ApiConnection>
        <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/movies" element={<ListMovies />}/>
          <Route path='/contact' element={<Contactpage />} />
          <Route path='/movies/:name' element={<MoviesIDSection />}/>
        </Routes>
      </BrowserRouter>
    </ApiConnection>
    </>
  )
}

export default App
