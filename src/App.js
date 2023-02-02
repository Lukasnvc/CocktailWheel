import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Selection from "./pages/Selection";
import Recipe from "./pages/Recipe";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Modal key={Date.now() + "modal"} />
      <Routes location={location} key={location.pathname + Date.now()}>
        <Route path="/CocktailWheel" element={<Home />} />
        <Route path="/:type" element={<Selection />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/category/:name" element={<Category />} />
      </Routes>
      <Footer key={Date.now() + "footer"} />
    </AnimatePresence>
  );
}

export default App;
