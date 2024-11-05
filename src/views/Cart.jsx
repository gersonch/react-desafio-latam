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

  const handleCheckout = async () => {
    if (!token) {
      setStylePay('btn btn-dark')
      alert('Debes iniciar sesión para proceder con la compra')
    } else {
      try {
        // Realizar la solicitud de pago
        const response = await fetch('http://localhost:5000/api/checkouts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            cart,
          }),
        })

        if (response.ok) {
          alert('Pago realizado con éxito')
        } else {
          const errorData = await response.json()
          alert(`Error en el pago: ${errorData.message}`)
        }
      } catch (error) {
        console.error('Error al realizar el pago:', error)
        alert('Error en el servidor. Intente nuevamente más tarde.')
      }
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
        <button className={stylePay} onClick={handleCheckout}>
          Pagar
        </button>
      </section>
    </main>
  )
}
