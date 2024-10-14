import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <main className="text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">Página no encontrada</p>
        <Link to="/" className="btn btn-primary">
          Volver a la página principal
        </Link>
      </main>
    </div>
  )
}
