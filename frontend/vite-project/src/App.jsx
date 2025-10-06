import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./Components/footer";
import { Navbar } from "./Components/navbar";
import { Bus } from "./Pages/bookingpage/bus";
import { Innerflight } from "./Pages/bookingpage/innerflight";
import { Hotel } from "./Pages/bookingpage/hotel";
import { Foreignflight } from "./Pages/bookingpage/foreignflight";
import { Vila } from "./Pages/bookingpage/Vila";
import Detail from "./Pages/detailpage.jsx";
import { Homepage } from "./Pages/homepage";
import { Payment } from "./Pages/paymentpage";
import { Userpage } from "./Pages/userpage";
import Train from "./Pages/bookingpage/train";
import { FetchAPI } from "./Components/fetch";
import { BusInfoPage } from "./Pages/BusInfoPage";
import { FlightInfoPage } from "./Pages/FlightInfoPage";
import { HotelInfoPage } from "./Pages/HotelInfoPage";
import { TrainInfoPage } from "./Pages/TrainInfoPage";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import "../src/styles/general.scss";
import { Loginpage } from "./Pages/loginpage";
import HelpCenter from "./Pages/helpcenter";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/:mode" element={<Homepage />} />
        <Route path="/info/:page" element={<InfoPageRenderer />} />
        <Route path="/Booking/bus" element={<Bus />} />
        <Route path="/Booking/train" element={<Train />} />
        <Route path="/Booking/hotel" element={<Hotel />} />
        <Route path="/Booking/Innerflight" element={<Innerflight />} />
        <Route path="/Booking/Foreignflight" element={<Foreignflight />} />
        <Route path="/Booking/Vila" element={<Vila />} />
        <Route path="/DetailPage" element={<Detail />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/UserPage" element={<Userpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Routes>
    </AnimatePresence >
  )
}

const InfoPageRenderer = () => {
  const { page } = useParams();
  switch (page?.toLowerCase()) {
    case 'innerflight':
    case 'foreignflight':
      return <FlightInfoPage />;
    case 'bus':
      return <BusInfoPage />;
    case 'hotel':
      return <HotelInfoPage />;
    case 'train':
      return <TrainInfoPage />;
    default:
      return <Homepage />; // Or a 404 page
  }
};

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