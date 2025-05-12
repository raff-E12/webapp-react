import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Homepage from './assets/pages/Homepage'
import ListMovies from './assets/pages/ListMovies'
import Contactpage from './assets/pages/Contactpage'
import MoviesIDSection from './assets/pages/MoviesIDSection'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route index element={<Homepage />} />
         <Route path="/movies" element={<ListMovies />}/>
         <Route path='/contact' element={<Contactpage />} />
         <Route path='/movies/:name' element={<MoviesIDSection />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
