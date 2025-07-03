import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Components/footer";
import { Navbar } from "./Components/navbar";
import { Bus } from "./Pages/bookingpage/bus/bus";
import { Flights } from "./Pages/bookingpage/flights/flights";
import { Hotel } from "./Pages/bookingpage/hotel/hotel";
import { International } from "./Pages/bookingpage/international/international";
import { Vila } from "./Pages/bookingpage/vila/vila";
import Detail from "./Pages/detailpage";
import { Homepage } from "./Pages/homepage";
import { Payment } from "./Pages/paymentpage";
import { Userpage } from "./Pages/userpage";
import { Train } from "./Pages/bookingpage/train/train";
import { FetchAPI } from "./Components/fetch";
import "../src/styles/general.scss";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    FetchAPI();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Booking/bus" element={<Bus />} />
        <Route path="/Booking/train" element={<Train />} />
        <Route path="/Booking/hotel" element={<Hotel />} />
        <Route path="/Booking/flights" element={<Flights />} />
        <Route path="/Booking/international" element={<International />} />
        <Route path="/Booking/vila" element={<Vila />} />
        <Route path="/DetailPage" element={<Detail />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/UserPage" element={<Userpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

