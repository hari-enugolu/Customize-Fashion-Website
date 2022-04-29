import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
    <Router>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} /> 
            
        </Routes>
        <Footer/>
    </Router>
</div>
  
  );
}

export default App;
