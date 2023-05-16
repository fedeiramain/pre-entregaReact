import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="container">
        <BrowserRouter>
        <NavBar />
        
        
        <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/:categoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />


        </Routes>

        <Footer />

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
