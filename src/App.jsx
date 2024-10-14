import './App.css'
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Cart from './views/Cart'
import Pizza from './views/Pizza'
import NotFound from './views/NotFound'
import Profile from './views/Profile'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {' '}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path={'*'} element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
