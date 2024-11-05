import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  // const emailKey = 'example@example.com'
  // const key = '123456'
  const { login, token } = useContext(UserContext)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [token, navigate])

  function handleSubmit(e) {
    e.preventDefault()

    login(email, password)
  }
  return (
    <>
      <h2 className="text-center my-5">Ingresa a tu cuenta</h2>
      <div className="d-flex justify-content-center align-items-start">
        <form className="w-25" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Correo electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span id="passwordHelpInline" className="form-text">
              Debe tener al menos 6 caracteres.
            </span>
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
