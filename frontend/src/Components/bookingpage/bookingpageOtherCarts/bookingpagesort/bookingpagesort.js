import { useState } from "react";
import "./bookingpagesort.scss";

export const BookingPageSort = () => {
  const [activeSort, setActiveSort] = useState(null);

  const handleSortClick = (sortType) => {
    setActiveSort(sortType);
  };

  return (
    <div className="booking-page-sort">
      <h2 className="booking-page-sort-title">مرتب‌سازی:</h2>
      <ul className="booking-page-sort-list">
        <li className="booking-page-sort-list-item border">
          <a 
            className={`booking-page-sort-list-item-link ${activeSort === "cheapest" ? "active" : ""}`}
            onClick={() => handleSortClick("cheapest")}
            tabIndex={0}
          >
            گرانترین
          </a>
        </li>
        <li className="booking-page-sort-list-item border">
          <a 
            className={`booking-page-sort-list-item-link ${activeSort === "expensive" ? "active" : ""}`}
            onClick={() => handleSortClick("expensive")}
            tabIndex={0}
          >
            ارزان‌ترین
          </a>
        </li>
        <li className="booking-page-sort-list-item border">
          <a 
            className={`booking-page-sort-list-item-link ${activeSort === "earliest" ? "active" : ""}`}
            onClick={() => handleSortClick("earliest")}
            tabIndex={0}
          >
            دیرترین
          </a>
        </li>
        <li className="booking-page-sort-list-item border">
          <a 
            className={`booking-page-sort-list-item-link ${activeSort === "latest" ? "active" : ""}`}
            onClick={() => handleSortClick("latest")}
            tabIndex={0}
          >
            زودترین
          </a>
        </li>
        <li className="booking-page-sort-list-item ">
          <a 
            className={`booking-page-sort-list-item-link ${activeSort === "suggest" ? "active" : ""}`}
            onClick={() => handleSortClick("suggest")}
            tabIndex={0}
          >
            پیشنهاد علی‌بابا
          </a>
        </li>
      </ul>
    </div>
  );
};



