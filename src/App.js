import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Selection from "./pages/Selection";
import Recipe from "./pages/Recipe";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/:type" element={<Selection />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </>
  );
}

export default App;
