import "./App.css";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
//import { Register } from "./components/Register";
//import { Login } from "./components/Login";
//import { Cart } from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Home />
      {/*<Register />*/}
      {/*<Login />*/}
      {/*<Cart />*/}
      <Footer />
    </>
  );
}

export default App;
