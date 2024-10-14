import { Link } from 'react-router-dom'

export default function Profile() {
  const user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    bio: 'Soy un amante de la pizza y disfruto de los videojuegos en mi tiempo libre.',
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Perfil de Usuario</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
          <p className="card-text">{user.bio}</p>
          <Link to="/edit-profile" className="btn btn-warning">
            Editar Perfil
          </Link>
        </div>
      </div>
      <div className="text-center">
        <Link to="/" className="btn btn-danger">
          Cerrar Sesión
        </Link>
      </div>
    </div>
  )
}
