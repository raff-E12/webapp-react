import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Homepage from './assets/pages/Homepage'
import ListMovies from './assets/pages/ListMovies'
import MoviesIDSection from './assets/pages/MoviesIDSection'
import { ApiConnection } from './assets/api/ApiConnection'
import LoadingScreen from './assets/extra/LoadingScreen'
import AddMovies from './assets/pages/AddMovies'

function App() {
  return (
    <>
    <ApiConnection>
        <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/movies" element={<ListMovies />}/>
          <Route path='/add-movies' element={<AddMovies />} />
          <Route path='/movies/:name' element={<MoviesIDSection />}/>
        </Routes>
      </BrowserRouter>
    </ApiConnection>
    <LoadingScreen />
    </>
  )
}

export default App
