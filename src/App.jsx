import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Homepage from './assets/pages/Homepage'
import ListMovies from './assets/pages/ListMovies'
import MoviesIDSection from './assets/pages/MoviesIDSection'
import { ApiConnection } from './assets/api/ApiConnection'
import LoadingScreen from './assets/extra/LoadingScreen'
import AddMovies from './assets/pages/AddMovies'
import NotFoundPage from './assets/pages/NotFoundPage'

function App() {
  return (
    <>
    <ApiConnection>
        <Routes>
          <Route path='*' element={<NotFoundPage />}/>
          <Route index element={<Homepage />} />
          <Route path="/movies" element={<ListMovies />}/>
          <Route path='/add-movies' element={<AddMovies />} />
          <Route path='/movies/:name' element={<MoviesIDSection />}/>
          <Route path='/404-list' element={<NotFoundPage />}/>
        </Routes>
    </ApiConnection>
    <LoadingScreen />
    </>
  )
}

export default App
