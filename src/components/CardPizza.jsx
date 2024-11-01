import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export function CardPizza({ id, name, img, ingredients, price, add }) {
  return (
    <>
      <div className="card text-center" style={{ width: '22rem' }}>
        <img
          src={img}
          className="card-img-top img-pizza"
          width={'15rem'}
          height={'200px'}
        />
        <div className="card-body">
          <h5 className="card-title">Pizza {name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">
            <div>
              <h6>Ingredientes</h6>
            </div>
            <div className="nowrap">
              <p className="fs-6">🍕 {ingredients}</p>
            </div>
          </li>
          <li className="list-group-item text-center ">
            <h5 className="mb-4">Precio: ${price}</h5>

            <div className="d-flex justify-content-between">
              <Link to={`/pizza/${id}`} className="btn btn-outline-dark">
                Ver mas 👀
              </Link>
              {add}
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
