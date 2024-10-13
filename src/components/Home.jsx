/* eslint-disable react/jsx-key */
import { CardPizza } from "./CardPizza";
import { useEffect, useState } from "react";
import "../App.css";
//import { pizzas } from "./pizzas";
import { formatPrice } from "./format.js"

export function Home() {

  const [data, setData] = useState([])
  const url = 'http://localhost:5000/api/pizzas'

  useEffect(() =>{
    fetch(url)
      .then(data => data.json())
      .then(data => {
        setData(data)
      })
  },[])

  return (
    <>

      <main className="">
        <section className="pizzas w-75">
          <div className="m-5 row">
            {data.map(pizza => (
              <div className="col-12 col-md-4 mb-4 d-flex">
              <CardPizza
                name={pizza.name}
                price={formatPrice(pizza.price)}
                ingredients={pizza.ingredients.join(
                  ", "
                )}
                img={pizza.img}
              />
            </div>
            ))}

            
          </div>
        </section>
      </main>
    </>
  )
}
