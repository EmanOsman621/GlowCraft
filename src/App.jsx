import { Routes, Route } from "react-router-dom";
import Navbar from "./components/temporary/Navbar";
import Footer from "./components/temporary/Footer";
import Login from "./Eman/Login";
import Contact from "./Eman/Contact";
import IngredientTracker from "./pages/IngredientTracker/IngredientTracker";
import Wishlist from "./pages/Wishlist/Wishlist";
import Compare from "./pages/Compare/Compare";
import TempProducts from "./pages/Temp/TempProducts";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tracker" element={<IngredientTracker />} />
          <Route path="/tracker/:id" element={<IngredientTracker />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/products" element={<TempProducts />} />
          <Route path="/products/:id" element={<TempProducts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
// export default App;