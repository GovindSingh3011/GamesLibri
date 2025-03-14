import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import FetchGames from "./components/FetchGames.jsx";
import FetchAllGames from "./components/FetchAllGames.jsx";
import Category from "./components/Category.jsx";
import Search from "./components/Search.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:genre" element={<FetchGames />} />
        <Route path="/search" element={<Search />} />
        <Route path="/allgames" element={<FetchAllGames />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
