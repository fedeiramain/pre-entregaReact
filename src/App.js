import NavBar from "./components/Navbar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="container">
        <ItemListContainer greeting={"I-Store"} />
        <NavBar />
        <CartWidget />
    </div>
  );
}

export default App;
