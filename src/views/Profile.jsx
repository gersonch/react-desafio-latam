import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function Profile() {
  const { token, logout } = useContext(UserContext)
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return
    }
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (!response) {
          throw new Error('Error al obtener los datos del ususario')
        }
        const data = await response.json()
        setUserData(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchUserData()
  }, [token, navigate])

  if (loading) {
    return <p>Cargando...</p>
  }
  if (!userData) {
    return <p>no se Pudo obtener datos</p>
  }

  const email = userData.email
  const username = email.split('@')[0]

  const user = {
    name: username,
    email: 'juan.perez@example.com',
    bio: 'Soy un amante de la pizza y disfruto de los videojuegos en mi tiempo libre.',
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Perfil de Usuario</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{userData.email}</h6>
          <p className="card-text">{user.bio}</p>
          <Link to="/edit-profile" className="btn btn-warning">
            Editar Perfil
          </Link>
        </div>
      </div>
      <div className="text-center">
        <Link to="/login" className="btn btn-danger" onClick={logout}>
          Cerrar Sesión
        </Link>
      </div>
    </div>
  )
}
