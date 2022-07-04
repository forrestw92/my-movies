import './App.css';
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watched from "./pages/Watched";
import Saved from "./pages/Saved";

function App() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/saved" element={<Saved />} />
        </Routes>
    </div>
   
  );
}

export default App;
