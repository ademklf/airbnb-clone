import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/airbnb-clone" element={<Home />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
