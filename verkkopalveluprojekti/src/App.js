import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/cart/contact";
import { CartItem } from "./pages/cart/cart-items";
import { ShopContextProvider } from "./context/shop-context";
import { Alkoholittomat } from "./pages/shop/alkoholittomat";
import {Miedot} from "./pages/shop/miedot";
import {Vahvat} from "./pages/shop/vahvat";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/alkoholittomat" element={<Alkoholittomat />} />
            <Route path="/miedot" element={<Miedot />} />
            <Route path="/vahvat" element={<Vahvat />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
