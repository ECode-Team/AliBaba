import { TrainCartItem } from "../../../Components/bookingpage/cartitem/trainCartItem/trainCartItem";
import "../../../styles/bookingpage/bookingpage.scss";

export const Train = () => {
    return (
        <div className="booking-page">
            <div className="booking-page-container">
              <div className="alarm-1">

              <h4>.قیمت ها برای یک بزرگسال محاسبه شده است</h4>
              </div>
                <h1>Train Booking</h1>
                <TrainCartItem />
                <TrainCartItem/>
                <TrainCartItem/>
            </div>
            <div className="booking-page-sidebar">
                <h2 className="natayej">نتایج: 10</h2>
                <p>Select your train journey</p>
            </div>
        </div>
    );
};
