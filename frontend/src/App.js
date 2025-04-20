import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Pages/homepage';
import { Booking } from "./Pages/bookingpage";
import { Detail } from "./Pages/detailpage";
import { Payment } from "./Pages/paymentpage";
import { Userpage } from "./Pages/userpage";
import { Navbar } from './Components/navbar';
import { Footer } from './Components/footer';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Booking" element={<Booking />} />
                <Route path="/DetailPage" element={<Detail />} />
                <Route path="/Payment" element={<Payment />} />
                <Route path="/UserPage" element={<Userpage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;