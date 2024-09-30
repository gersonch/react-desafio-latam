import "./App.css";
import { Footer } from "./components/Footer";

import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { Register } from "./components/Register";

function App() {
  return (
    <>
      <Navbar />
      <Register />
      {/*<Home />*/}
      <Footer />
    </>
  );
}

export default App;
