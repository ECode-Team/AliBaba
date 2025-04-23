import { Bookingpagebuyitem } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagebuyitem/bookingpagebuyitem.js";
import { BookingPageNavbar } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpageNavbar/bookingpageNavebar.js";
import { Bookingpagesoldout } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpageSoldOut/bookingpagesoldout.js";
import { BookingPageSort } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagesort/bookingpagesort.js";
import { FlightsCartItem } from "../../../Components/bookingpage/cartitem/flightsCartItem/flightsCartItem.js";
import "../../../Components/bookingpage/cartitem/flightsCartItem/flightsCartItem.scss";
import { FlightsOpenCartItem } from "../../../Components/bookingpage/cartitem/flightsCartItem/flightsOpenCartItem.js";
import "../../../styles/bookingpage/bookingpage.scss";
import { Bookingpageauto } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpageauto/bookingpageauto.js";
import { Bookingpagefull } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpageFull/bookingpagefull.js";
export const Flights = () => {
  return (
    <div className="booking-page">
      <div className="booking-page-sidebar">
        <h2 className="natayej">نتایج: 10</h2>
        <p>Select your flight journey</p>
      </div>
      <div className="booking-page-container">
        <div className="booking-page-container-Navbar">
          <BookingPageNavbar />
        </div>
        <div className="booking-page-container-sort">
          <BookingPageSort />
        </div>
        <div className="alarm-1">
        <div className="alarm-1-svg">svg</div>

          <h4>.قیمت ها برای یک بزرگسال محاسبه شده است</h4>
        </div>
        <div className="booking-page-container-full">
          <Bookingpagefull/>
        </div>
        <div className="booking-page-container-auto">
          <Bookingpageauto/>
        </div>
        <div className="booking-page-container-soldout">
          <Bookingpagesoldout/>
        </div>
        <div className="booking-page-container-buyitem">
          <Bookingpagebuyitem src="../../../assets/images/credit-card-2049f059.svg" />
        </div>

        <FlightsOpenCartItem />
        <FlightsOpenCartItem />
        <FlightsOpenCartItem />
        <h1 className="takmil">پرواز های تکمیل ظرفیت</h1>
        <FlightsCartItem />
        <FlightsCartItem />
        <FlightsCartItem />
      </div>

    </div>
  );
};
