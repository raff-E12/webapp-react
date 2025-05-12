import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Homepage from './assets/pages/Homepage'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
