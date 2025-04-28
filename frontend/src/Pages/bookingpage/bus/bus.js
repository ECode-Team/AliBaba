import { useState } from "react";
import { BookingPageSort } from "../../../Components/bookingpage/bookingpageOtherCarts/bookingpagesort/bookingpagesort";
import { BusCartItem } from "../../../Components/bookingpage/cartitem/busCartItem/busCartItem";
import "../../../styles/bookingpage/bookingpage.scss";
export const Bus = () => {
  const [currentSort, setCurrentSort] = useState(null);

  const sortOptions = [
    { id: "suggest", label: "پیشنهاد علی‌بابا" },
    { id: "latest", label: "زودترین زمان حرکت" },
    { id: "cheapest", label: "کمترین قیمت" },
  ];
  const handleSortChange = (sortType) => {
    setCurrentSort(sortType);
    // Here you can implement the actual sorting logic for your flights
    console.log("Sorting flights by:", sortType);
  };

  return (
    <div className="booking-page">
      <div className="booking-page-sidebar">Sidebar</div>
      <div className="booking-page-container">
        <div className="booking-page-container-sort">
          <BookingPageSort
            sortOptions={sortOptions}
            onSortChange={handleSortChange}
            initialSort={currentSort}
          />
        </div>

        <BusCartItem />
        <BusCartItem />
        <BusCartItem />
        <BusCartItem />
        <BusCartItem />
        <BusCartItem />
        <BusCartItem />
        <BusCartItem />
      </div>
    </div>
  );
};
