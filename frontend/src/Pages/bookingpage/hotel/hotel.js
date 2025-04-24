import { useState } from "react";
import { Bookingpagebuyitem } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagebuyitem/bookingpagebuyitem";
import { BookingPageNavbar } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpageNavbar/bookingpageNavebar";
import { BookingPageSort } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagesort/bookingpagesort";
import "../../../styles/bookingpage/bookingpage.scss";
import { HotelCartItem } from "../../../Components/bookingpage/cartitem/hotelCartItem/hotelCartItem";
export const Hotel = () => {
  const [currentSort, setCurrentSort] = useState(null);

  const handleSortChange = (sortType) => {
    setCurrentSort(sortType);
    // Here you can implement the actual sorting logic for your flights
    console.log("Sorting flights by:", sortType);
  };

  const sortOptions = [
    { id: "expensive", label: "پیش فرض" },
    { id: "latest", label: "کمترین قیمت" },
    { id: "suggest", label: "بیشترین قیمت" },
  ];

  return (
    <div className="booking-page">
      <div className="booking-page-sidebar">
        <h2 className="natayej">نتایج: 10</h2>
        <p>Select your train journey</p>
      </div>
      <div className="booking-page-container">
        <div className="booking-page-container-navbar">
          <BookingPageNavbar />
        </div>
        <div className="booking-page-container-sort">
          <BookingPageSort
            sortOptions={sortOptions}
            onSortChange={handleSortChange}
            initialSort={currentSort}
          />
        </div>
        <div className="booking-page-container-buyitem">
          <Bookingpagebuyitem src="/path/to/your/image.jpg"/>
        </div>
        <div className="alarm-1">
          <h4 className="header-title">.قیمت ها برای 1 بزرگسال و 1 اتاق محاسبه شده است</h4>
        </div>
        <HotelCartItem/>
        <HotelCartItem/>
        <HotelCartItem/>
        <HotelCartItem/>
        <HotelCartItem/>
        <HotelCartItem/>
        <HotelCartItem/>
        <HotelCartItem/>

      </div>
    </div>
  );
};
