import { CardPizza } from "./CardPizza";
import "../App.css";
import { Banner } from "./Banner";

function formatPrice(price) {
  return new Intl.NumberFormat("es-CL").format(price);
}

export function Home() {
  return (
    <>
      <main className="">
        <Banner />
        <section className="pizzas w-75">
          <div className="m-5 row">
            <div className="col-12 col-md-4 mb-4 d-flex">
              <CardPizza
                name="Napolitana"
                price={formatPrice(5950)}
                ingredients={["mozzarella", "tomates", "jamón", "orégano"].join(
                  ", "
                )}
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiW5pVbw2nkJUAWRa2PeHDuIa7ddJIshVeQ&s"
              />
            </div>
            <div className="col-12 col-md-4 mb-4 d-flex">
              <CardPizza
                name="Española"
                price={formatPrice(6950)}
                ingredients={[
                  "mozzarella",
                  "gorgonzola",
                  "parmesano",
                  "provolone",
                ].join(", ")}
                img="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
              />
            </div>
            <div className="col-12 col-md-4 mb-4 d-flex">
              <CardPizza
                name="Pepperoni"
                price={formatPrice(6950)}
                ingredients={["mozzarella", "pepperoni", "orégano"].join(", ")}
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8yzk8sFkTRpwM8BVRIWcet5BHnv4PMuRwA&s"
              />
            </div>
            <div className="col-12 col-md-4 mb-4 d-flex">
              <CardPizza
                name="Pepperoni"
                price={formatPrice(6950)}
                ingredients={["mozzarella", "pepperoni", "orégano"].join(", ")}
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8yzk8sFkTRpwM8BVRIWcet5BHnv4PMuRwA&s"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
