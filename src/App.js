import Homepage from "./pages/Homepage/Homepage";
import Poenies from "./pages/Poenies/Poenies";
import RedVelvetCake from "./pages/RedVelvetCake/RedVelvetCake";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/red-velvet-cake" element={<RedVelvetCake />}></Route>
        <Route path="/poenies" element={<Poenies />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
