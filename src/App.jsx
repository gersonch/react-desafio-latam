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
import { UserContext } from './context/UserContext' // Asegúrate de que la ruta es correcta
import { useContext } from 'react' // Importa useContext desde React
import Profile from './views/Profile'

function App() {
  const { token } = useContext(UserContext) // Aquí se utiliza useContext para acceder al contexto

  return (
    <div className="contain">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/404" element={<NotFound />} />
        <Route path={'*'} element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
