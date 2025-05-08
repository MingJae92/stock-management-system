import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
   
    </Routes>
  );
}

export default App;
