import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./Components/footer";
import { Navbar } from "./Components/navbar";
import { Bus } from "./Pages/bookingpage/bus";
import { Innerflight } from "./Pages/bookingpage/innerflight";
import { Hotel } from "./Pages/bookingpage/hotel";
import { Foreignflight } from "./Pages/bookingpage/foreignflight";
import { Vila } from "./Pages/bookingpage/vila";
import Detail from "./Pages/detailpage";
import { Homepage } from "./Pages/homepage";
import { Payment } from "./Pages/paymentpage";
// import { Userpage } from "./Pages/userpage";
import { Train } from "./Pages/bookingpage/train/train";
import { FetchAPI } from "./Components/fetch";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Accordion } from "./Components/mainpage/accordion";
import "../src/styles/general.scss";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/:mode" element={<Homepage />} />
        <Route path="/Booking/bus" element={<Bus />} />
        <Route path="/Booking/train" element={<Train />} />
        <Route path="/Booking/hotel" element={<Hotel />} />
        <Route path="/Booking/flights" element={<Flights />} />
        <Route path="/Booking/international" element={<International />} />
        <Route path="/Booking/vila" element={<Vila />} />
        <Route path="/DetailPage" element={<Detail />} />
        <Route path="/Payment" element={<Payment />} />
        {/* <Route path="/UserPage" element={<Userpage />} /> */}
      </Routes>
    </AnimatePresence >
  )
}

function App() {
  useEffect(() => {
    FetchAPI();
  }, []);

  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;