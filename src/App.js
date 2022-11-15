import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import TopNavigation from "./components/Layout/TopNavigation/TopNavigation";
import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";

function App() {
  return (
    <div className="App">
      <TopNavigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
      </Routes>
    </div>
  );
}

export default App;
