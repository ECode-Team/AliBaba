import "../../../../styles/bookingpage/bookingpage.scss";import { useState } from "react";
import "./bookingpagesoldout.scss";

export const Bookingpagesoldout = ({ src }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="card-item booking-page-sold-out">
        <div className={`booking-page-sold ${isActive ? 'active' : 'inactive'}`}>
            <p className="booking-page-sold-out booking-page-sold-out-price-title">
            اطلاع از موجودی
            </p>
        </div>
        <div className="card-item-toggle-button booking-page-sold-out-toggle-button">
            <button 
              className={`card-item-toggle-button-button booking-page-sold-out-toggle-button-button ${isActive ? 'active' : 'inactive'}`}
              onClick={handleToggle}
            >
                {isActive ? 'فعال' : 'غیرفعال'}
            </button>
        </div>
        <div className="card-item-info booking-page-sold-out-info">
            <h3 className="card-item-info-title booking-page-sold-out-info-title">
            موجود شد خبرم کن
            </h3>
            <p className="card-item-info-description booking-page-sold-out-info-description">
            با فعالسازی "اطلاع از موجودی" از موجود شدن پرواز در این تاریخ باخبر شوید.
            </p>
        </div>
        <div className="card-item-image booking-page-sold-out-image">
            <img src={src} alt="card-item-image" />
        </div>
    </div>
  );
};
