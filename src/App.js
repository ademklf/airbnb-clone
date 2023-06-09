import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router basename="/airbnb-clone">
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
