import { useState } from "react";
import { Bookingpageauto } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpageauto/bookingpageauto.js";
import { Bookingpagebuyitem } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagebuyitem/bookingpagebuyitem.js";
import { BookingpageFull } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpageFull/bookingpagefull.js";
import { BookingPageNavbar } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpageNavbar/bookingpageNavebar.js";
import { Bookingpagesoldout } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpageSoldOut/bookingpagesoldout.js";
import { BookingPageSort } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagesort/bookingpagesort.js";
import { FlightsCartItem } from "../../../Components/bookingpage/cartitem/flightsCartItem/flightsCartItem.js";
import "../../../Components/bookingpage/cartitem/flightsCartItem/flightsCartItem.scss";
import { FlightsOpenCartItem } from "../../../Components/bookingpage/cartitem/flightsCartItem/flightsOpenCartItem.js";
import "../../../styles/bookingpage/bookingpage.scss";

export const Flights = () => {
  const [currentSort, setCurrentSort] = useState(null);
  
  const handleSortChange = (sortType) => {
    setCurrentSort(sortType);
    // Here you can implement the actual sorting logic for your flights
    console.log("Sorting flights by:", sortType);
  };

  const sortOptions = [
    { id: "cheapest", label: "گرانترین" },
    { id: "expensive", label: "ارزان‌ترین" },
    { id: "earliest", label: "دیرترین" },
    { id: "latest", label: "زودترین" },
    { id: "suggest", label: "پیشنهاد علی‌بابا" }
  ];

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
          <BookingPageSort 
            sortOptions={sortOptions}
            onSortChange={handleSortChange}
            initialSort={currentSort}
          />
        </div>
        <div className="alarm-1">
          <div className="alarm-1-svg">svg</div>
          <h4 className="header-title">.قیمت ها برای یک بزرگسال محاسبه شده است</h4>
        </div>
        <div className="booking-page-container-full">
          <BookingpageFull/>
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
