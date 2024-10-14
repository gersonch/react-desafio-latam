import { Link } from 'react-router-dom'

export default function Navbar() {
  const total = 0
  const totalFormateado = total.toLocaleString('es-CL') // Español (Chile)
  const token = false
  return (
    <>
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
                <Link className="nav-link active" to="/login">
                  {token ? '🔓Profile' : '🔐Login'}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/register">
                  {token ? '🔓Logout' : '🔐Register'}
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/cart">
            <button>🛒 Total ${totalFormateado}</button>
          </Link>
        </div>
      </nav>
    </>
  )
}
