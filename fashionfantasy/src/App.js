import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Filterbar from "./Components/Homepage/Filterbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Filterbar />, <Homepage />]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
