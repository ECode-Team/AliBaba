import { BookingPageNavbar } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpageNavbar/bookingpageNavebar.jsx";
import { BookingPageSort } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagesort/bookingpagesort.jsx";
import { FlightsCartItem } from "../../../Components/bookingpage/cartitem/flightsCartItem/flightsCartItem.jsx";
import "../../../Components/bookingpage/cartitem/flightsCartItem/flightsCartItem.scss";
import { FlightsOpenCartItem } from "../../../Components/bookingpage/cartitem/flightsCartItem/flightsOpenCartItem.jsx";
import "../../../styles/bookingpage/bookingpage.scss";
import { Bookingpagebuyitem } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagebuyitem/bookingpagebuyitem.jsx";
export const Flights = () => {
    return (
        <div className="booking-page">
            <div className="booking-page-container">
            <div className="booking-page-container-Navbar">
                <BookingPageNavbar />
              </div>
              <div className="booking-page-container-sort">
                <BookingPageSort />
              </div>
              <div className="booking-page-container-buyitem">
              <Bookingpagebuyitem src="../../../assets/images/credit-card-2049f059.svg"/>
              </div>
              <div className="alarm-1">
                <h4>.قیمت ها برای یک بزرگسال محاسبه شده است</h4>
                <div className="alarm-1-svg">svg</div>
              </div>
              <FlightsOpenCartItem />
              <FlightsOpenCartItem />
              <FlightsOpenCartItem />
              <h1 className="takmil">
                پرواز های تکمیل ظرفیت
              </h1>
                <FlightsCartItem />
                <FlightsCartItem />
                <FlightsCartItem />
            </div>
            <div className="booking-page-sidebar">
                <h2 className="natayej">نتایج: 10</h2>
                <p>Select your flight journey</p>
            </div>
        </div>
    );
};
