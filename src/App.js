

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import Catalogue from "../src/Pages/Catalogue/Catalogue";

import SignUp from "./Pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import PaymentHero from "./Components/PaymentHero/PaymentHero";
import PaymentSideNav from "./Components/PaymentSideNav/PaymentSideNav";
import PaymentLeasePage from "./Pages/PaymentLeasePage/PaymentLeasePage";
import LeaseSubNav from "./Components/LeaseSubNav/LeaseSubNav";
import PaymentPersonalInfo from "./Pages/PaymentPersonalInfo/PaymentPersonalInfo";







function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Signup" element={<SignUp />} />

      </Routes>
      
    
    </div>
  );
}

export default App;
