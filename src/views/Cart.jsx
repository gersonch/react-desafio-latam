import { useState } from 'react'
import { formatPrice } from '../components/format' // Asumiendo que ya tienes esta función para formatear los precios
import { pizzaCart as initialCart } from '../components/pizzas' // Importamos el array de pizzas

export default function Cart() {
  const [cart, setCart] = useState(initialCart)
  const [total, setTotal] = useState(
    initialCart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0),
  )

  const handleIncrement = (id) => {
    const updateCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 }
      }
      return pizza
    })
    setCart(updateCart)
    updateTotal(updateCart)
  }

  const handleDecrement = (id) => {
    const updateCart = cart.map((pizza) => {
      if (pizza.id === id && pizza.count > 0) {
        return { ...pizza, count: pizza.count - 1 }
      }
      return pizza
    })
    setCart(updateCart)
    updateTotal(updateCart)
  }

  const updateTotal = (updateCart) => {
    const newTotal = updateCart.reduce(
      (acc, pizza) => acc + pizza.price * pizza.count,
      0,
    )
    setTotal(newTotal)
  }

  return (
    <>
      <main className="container mt-5">
        <section className="pizzas">
          <ul className="list-group mb-5">
            {cart.map((pizza) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={pizza.id}
              >
                <div className="d-flex align-items-center">
                  {/* Imagen de la pizza */}
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    className="img-thumbnail"
                    style={{ width: '100px' }}
                  />
                  {/* Información de la pizza */}
                  <div className="ms-3">
                    <h5 className="mb-1">{pizza.name}</h5>
                    <p className="mb-1">Cantidad: {pizza.count}</p>
                    <p className="mb-1">Precio: ${formatPrice(pizza.price)}</p>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => handleIncrement(pizza.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDecrement(pizza.id)}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Sección del total */}
        <section className="border-top pt-3">
          <h4 className="text-end">Total: ${formatPrice(total)}</h4>
        </section>
      </main>
    </>
  )
}
