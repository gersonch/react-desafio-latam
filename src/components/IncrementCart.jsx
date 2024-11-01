/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const IncrementCart = ({ pizza }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <button className="btn btn-outline-dark" onClick={() => addToCart(pizza)}>
      Añadir 🛒
    </button>
  )
}

export default IncrementCart
