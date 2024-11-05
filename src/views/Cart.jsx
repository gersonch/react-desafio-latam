import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { formatPrice } from '../components/format'
import { UserContext } from '../context/UserContext'

export default function Cart() {
  const { cart, total, addToCart, decrement } = useContext(CartContext)
  const { token } = useContext(UserContext)
  const [stylePay, setStylePay] = useState('btn btn-primary')

  const handleIncrement = (id) => {
    addToCart(cart.find((item) => item.id === id))
  }

  const handleDecrement = (id) => {
    decrement(id)
  }

  const handleUser = () => {
    if (!token) {
      setStylePay('btn btn-dark')
      alert('debes iniciar sesion para comprar')
    } else {
      alert('pago con exito')
    }
  }

  return (
    <main className="container mt-5">
      <section className="pizzas">
        <ul className="list-group mb-5">
          {cart.map((pizza) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={pizza.id}
            >
              <div className="d-flex align-items-center">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  style={{ width: '100px' }}
                />
                <div className="ms-3">
                  <h5>{pizza.name}</h5>
                  <p>Cantidad: {pizza.quantity}</p>
                  <p>Precio: ${formatPrice(pizza.price)}</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button
                  onClick={() => handleIncrement(pizza.id)}
                  className="btn btn-success me-2"
                >
                  +
                </button>
                <button
                  onClick={() => handleDecrement(pizza.id)}
                  className="btn btn-danger"
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="border-top pt-3">
        <h4 className="text-end">Total: ${formatPrice(total)}</h4>
        <button className={stylePay} onClick={handleUser}>
          Pagar
        </button>
      </section>
    </main>
  )
}
