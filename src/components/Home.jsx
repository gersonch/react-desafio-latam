/* eslint-disable react/jsx-key */
import { CardPizza } from "./CardPizza";
import "../App.css";
import { pizzas } from "./pizzas";
import { formatPrice } from "./format.js"

export function Home() {
  return (
    <>


      <main className="">
        <section className="pizzas w-75">
          <div className="m-5 row">
            {pizzas.map(pizza => (
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
