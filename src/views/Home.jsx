/* eslint-disable react/jsx-key */
import { CardPizza } from '../components/CardPizza.jsx'
import { useEffect, useState } from 'react'
import { Banner } from '../components/Banner.jsx'
import '../App.css'
//import { pizzas } from "./pizzas";
import { formatPrice } from '../components/format.js'
import { fetchData } from '../components/fetch.js'

function Home() {
  const [data, setData] = useState([])
  const url = 'http://localhost:5000/api/pizzas'

  useEffect(() => {
    async function getPizzas() {
      const pizzas = await fetchData(url)
      if (pizzas) {
        setData(pizzas)
      }
    }

    getPizzas()
  }, [])

  return (
    <>
      <Banner />
      <main className="">
        <section className="pizzas w-75">
          <div className="m-5 row">
            {data.map((pizza) => (
              <div className="col-12 col-md-4 mb-4 d-flex">
                <CardPizza
                  name={pizza.name}
                  price={formatPrice(pizza.price)}
                  ingredients={pizza.ingredients.join(', ')}
                  img={pizza.img}
                  id={pizza.id}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
