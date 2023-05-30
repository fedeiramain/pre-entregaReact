import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { CartShop } from "./components/Context/CartContext";
import Carrito from "./components/Carrito/Carrito";

function App() {
  return (
    <div>
      <div className="container">
        <BrowserRouter>
          <CartShop>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/:categoria" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
            <Footer />
          </CartShop>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
