import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

export default function Navbar() {
  const { total } = useContext(CartContext)
  const totalFormateado = total.toLocaleString('es-CL') // Español (Chile)
  const { token, logout } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login') // Redirige al login después de cerrar sesión
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pizzeria Mamma Mia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                🍕Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={token ? '/profile' : '/login'}
              >
                {token ? '🔓Profile' : '🔐Login'}
              </Link>
            </li>
            <li className="nav-item">
              {token ? (
                <button className="nav-link active btn" onClick={handleLogout}>
                  🔓Logout
                </button>
              ) : (
                <Link className="nav-link active" to="/register">
                  🔐Register
                </Link>
              )}
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <button>🛒 Total ${totalFormateado}</button>
        </Link>
      </div>
    </nav>
  )
}
