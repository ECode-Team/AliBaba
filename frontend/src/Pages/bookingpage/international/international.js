import { useState } from "react";
import { Bookingpagebuyitem } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagebuyitem/bookingpagebuyitem.js";
import { BookingPageSort } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagesort/bookingpagesort.js";
import "../../../styles/bookingpage/bookingpage.scss";
import { InternationalCartItem } from "../../../Components/bookingpage/cartitem/internationalCartItem/internationalCartItem";   
import { BookingPageNavbar } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpageNavbar/bookingpageNavebar.js";

export const International = () => {
  const [currentSort, setCurrentSort] = useState(null);
  
  const handleSortChange = (sortType) => {
    setCurrentSort(sortType);
    // Here you can implement the actual sorting logic for your flights
    console.log("Sorting flights by:", sortType);
  };

  const sortOptions = [
    { id: "suggest", label: "پیشنهاد علی‌بابا" },
    { id: "expensive", label: "ارزان‌ترین" },
    { id: "cheapest", label: "سریع ترین" },
    { id: "latest", label: "زودترین" },
    { id: "earliest", label: "دیرترین" },
  ];
  return (
    <div className="booking-page">
      <div className="booking-page-sidebar">
        Sidebar
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
        <div className="booking-page-container-buyitem">
          <Bookingpagebuyitem src="../../../assets/images/credit-card-2049f059.svg" />
        </div>
        <InternationalCartItem/>
        <InternationalCartItem/>
        <InternationalCartItem/>
        <InternationalCartItem/>
        <InternationalCartItem/>
        <InternationalCartItem/>
        <InternationalCartItem/>
        <InternationalCartItem/>
      </div>
    </div>
  );
};
