import { useState } from "react";
import "./bookingpagetoggle.scss";
export const BookingpageToggle = ({ src }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="booking-page-toggle">
      <div className="card-item-toggle-button booking-page-sold-out-toggle-button">
        <button
          className={`card-item-toggle-button-button booking-page-sold-out-toggle-button-button ${
            isActive ? "active" : "inactive"
          }`}
          onClick={handleToggle}
        >
          {isActive ? "فعال" : "غیرفعال"}
        </button>
      </div>
      <div className="booking-page-toggle-container">
        <div className="booking-page-toggle-container-title">
          رزرو آنی
        </div>
        <div className="booking-page-toggle-container-description">
          بدون نیاز به تایید میزبان
        </div>
      </div>

    </div>
  );
};

export default BookingpageToggle;
