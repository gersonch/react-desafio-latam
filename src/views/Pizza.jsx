import { useState, useEffect, useContext } from 'react'
import { fetchData } from '../components/fetch'
import { useParams } from 'react-router-dom'
import { formatPrice } from '../components/format'
import { CartContext } from '../context/CartContext' // Importar el contexto

export default function Pizza() {
  const { addToCart } = useContext(CartContext) // Solo necesitas las funciones aquí
  const [data, setData] = useState({})
  const [count, setCount] = useState(1)
  const { id } = useParams()

  const url = `http://localhost:5000/api/pizzas/${id}`

  // Función para incrementar la cantidad
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + count)
  }

  // Función para decrementar la cantidad
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1)
    }
  }

  useEffect(() => {
    async function getPizza() {
      const pizza = await fetchData(url)
      if (pizza) {
        setData(pizza)
      }
    }

    getPizza()
  }, [url])

  const handleAddToCart = () => {
    // Agregar la pizza al carrito con la cantidad actual
    addToCart({ ...data, quantity: count })
    // Resetear el conteo después de agregar al carrito
    // Resetea el contador a 1 después de agregar
  }

  return (
    <main className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={data.img}
            alt={data.name}
            className="img-fluid rounded"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h1>Pizza {data.name}</h1>
          <p className="fs-5">Ingredientes: {data.ingredients?.join(', ')}</p>
          <p className="fs-4">Precio: ${formatPrice(data.price)}</p>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-secondary me-2"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="fs-5">{count}</span>
            <button
              className="btn btn-secondary ms-2"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
            Agregar al carrito 🛒
          </button>
        </div>
      </div>
    </main>
  )
}
