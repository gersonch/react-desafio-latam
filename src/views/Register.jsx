import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
//import { Banner } from '../components/Banner'

function Register() {
  const { register } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value)
  }

  async function checkInfo(e) {
    e.preventDefault()

    if (password === confirmPassword) {
      console.log('tus contraseñas coinciden')
      await register(email, password)
      alert('registro exitoso')
      navigate('/login')
    } else {
      alert('Verifica tus datos. Las contraseñas deben ser iguales.')
    }
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-start align-items-center mt-5 gap-4 min-vh-100">
        <h2>Registrate aquí</h2>
        <form className="w-25" onSubmit={checkInfo}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Correo electronico
            </label>
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              value={password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password2" className="form-label">
              Repetir Contraseña
            </label>
            <input
              value={confirmPassword}
              type="password"
              className="form-control"
              id="Password2"
              onChange={handleConfirmPassword}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </form>
      </div>
    </>
  )
}

export default Register
