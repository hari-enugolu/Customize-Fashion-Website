import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Filterbar from "./Components/Homepage/Filterbar";
import Shoespage from "./Components/Shoespage/Shoespage";
import Bagspage from "./Components/Bagspage/Bagspage";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={[<Header />, <Filterbar />, <Homepage />]}
          ></Route>
          <Route path="/Shoes" element={[<Shoespage />]}></Route>
          <Route path="/Bags" element={[<Bagspage />]}></Route>
          <Route path="/Cart" element={[<Cart />]}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
