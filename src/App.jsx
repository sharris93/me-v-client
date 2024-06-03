import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Page Components
import Landing from './components/pages/Landing'
import Navbar from './components/views/Navbar'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
