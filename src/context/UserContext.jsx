/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState('')
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()

      if (data.token) {
        setToken(data.token)
      } else {
        console.error('token no encontrado', data)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Asegúrate de que estás enviando el email y la contraseña
      })

      const data = await response.json()

      if (response.ok) {
        console.log('Registro exitoso:', data)
        // Aquí puedes manejar la respuesta exitosa, si lo deseas
      } else {
        console.error('Error en el registro:', data)
      }
    } catch (err) {
      console.error('Error al intentar registrar:', err)
    }
  }

  const logout = () => setToken(null)

  return (
    <UserContext.Provider value={{ token, login, logout, register }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
