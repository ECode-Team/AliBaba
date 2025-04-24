import { useState } from "react";
import "./bookingpagesort.scss";

export const BookingPageSort = ({ 
  sortOptions = [
    { id: "cheapest", label: "گرانترین" },
    { id: "expensive", label: "ارزان‌ترین" },
    { id: "earliest", label: "دیرترین" },
    { id: "latest", label: "زودترین" },
    { id: "suggest", label: "پیشنهاد علی‌بابا" }
  ],
  onSortChange,
  initialSort = null
}) => {
  const [activeSort, setActiveSort] = useState(initialSort);

  const handleSortClick = (sortType) => {
    setActiveSort(sortType);
    if (onSortChange) {
      onSortChange(sortType);
    }
  };

  return (
    <div className="booking-page-sort">
      <h2 className="booking-page-sort-title">مرتب‌سازی:</h2>
      <ul className="booking-page-sort-list">
        {sortOptions.map((option, index) => (
          <li 
            key={option.id} 
            className={`booking-page-sort-list-item ${index < sortOptions.length - 1 ? 'border' : ''}`}
          >
            <a 
              className={`booking-page-sort-list-item-link ${activeSort === option.id ? "active" : ""}`}
              onClick={() => handleSortClick(option.id)}
              tabIndex={0}
            >
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};



