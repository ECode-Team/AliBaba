import { useState } from "react";
import { BookingPageNavbar } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpageNavbar/bookingpageNavebar";
import { BookingPageSort } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagesort/bookingpagesort";
import { TrainCloseCartItem } from "../../../Components/bookingpage/cartitem/trainCartItem/trainCloseCartItem";
import { TrainOpenCartItem } from "../../../Components/bookingpage/cartitem/trainCartItem/trainOpenCartItem";
import "../../../styles/bookingpage/bookingpage.scss";

export const Train = () => {
    const [currentSort, setCurrentSort] = useState(null);

    const handleSortChange = (sortType) => {
        setCurrentSort(sortType);
        // Here you can implement the actual sorting logic for your flights
        console.log("Sorting flights by:", sortType);
      };
    
      const sortOptions = [
        { id: "cheapest", label: "کمترین قیمت" },
        { id: "fastest", label: "زودترین زمان حرکت" },
        { id: "suggest", label: "پیشنهاد علی‌بابا" }
      ];
    return (
        <div className="booking-page">
            <div className="booking-page-sidebar">
                <h2 className="natayej">نتایج: 10</h2>
                <p>Select your train journey</p>
            </div>
            <div className="booking-page-container">
              <div className="booking-page-container-navbar">
                <BookingPageNavbar/>
              </div>
              <div className="booking-page-container-sort">
                <BookingPageSort
                  sortOptions={sortOptions}
                  onSortChange={handleSortChange}
                  initialSort={currentSort}
                />
              </div>
              <div className="alarm-1">
              <h4 className="header-title">.قیمت ها برای یک بزرگسال محاسبه شده است</h4>
              </div>
                <h1>Train Booking</h1>
                <TrainOpenCartItem />
                <TrainOpenCartItem/>
                <TrainOpenCartItem/>
                <TrainCloseCartItem/>
                <TrainCloseCartItem/>
                <TrainCloseCartItem/>
            </div>
        </div>
    );
};
