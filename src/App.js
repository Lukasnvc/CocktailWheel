import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Selection from "./pages/Selection";
import Recipe from "./pages/Recipe";
import Category from "./pages/Category";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/:type" element={<Selection />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/category/:name" element={<Category />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
