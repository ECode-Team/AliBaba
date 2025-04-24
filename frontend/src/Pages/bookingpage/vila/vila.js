import { BookingpageToggle } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagetoggle/bookingpagetoggle.js";
import { VilaCartItem } from "../../../Components/bookingpage/cartitem/vilaCartItem/vilaCartItem";
import "../../../styles/bookingpage/bookingpage.scss";
export const Vila = () => {
  return (
    <div className="booking-page">
      <div className="booking-page-sidebar">s</div>
      <div className="booking-page-container">
        <BookingpageToggle />
        <h2 className="header-title">اجاره ویلا رامسر</h2>
        <VilaCartItem />
        <VilaCartItem />
        <VilaCartItem />
        <VilaCartItem />
        <VilaCartItem />
        <VilaCartItem />
      </div>
    </div>
  );
};
