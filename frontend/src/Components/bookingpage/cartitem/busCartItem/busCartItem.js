import { useState } from "react";
import "../../../../styles/bookingpage/bookingpage.scss";
import "./busCartItem.scss";
export const BusCartItem = ({ setIsOpen }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(activeLink === link ? null : link);
  };

  const handleClose = () => {
    setActiveLink(null);
  };

  return (
    <div className="booking-cart-item">
      <div className="booking-cart-item-container">
        <div className="booking-cart-item-container-left">
          <p className="booking-cart-item-container-left-button-container">
            <span className="price">10000</span>تومان
          </p>
          <span className="booking-cart-item-container-left-price">
            نرخ رسمی ایرلاین
          </span>
          <button className="booking-cart-item-container-left-button">
            انتخاب بلیط
          </button>
          <p className="booking-cart-item-container-left-price-container">
            8صندلی باقی مانده
          </p>
        </div>
        <div className="booking-cart-item-container-right">
          <div
            className={`booking-cart-item-container-right ${
              activeLink ? "active" : ""
            }`}
          >
            <div className="booking-cart-item-container-right-side">
              <div className="booking-cart-item-container-right-side-image">
                <div className="booking-cart-item-container-right-side-image-image">
                  <img
                    src="https://www.iran-airlines.com/assets/images/logo/irani-airlines-logo.svg"
                    alt="booking"
                  />
                </div>
              </div>
              <div className="booking-cart-item-container-right-side-image-text-container">
                <div className="booking-cart-item-container-right-side-image-text-title textt">
                  <p className="booking-cart-item-container-right-side-image-text-title textt-text0">
                    همسفر چابكسواران اصفهان پايانه کاوه
                  </p>
                  <p className="booking-cart-item-container-right-side-image-text-title-text1">
                    سیستمی
                  </p>
                </div>
                <div className="booking-cart-item-container-right-side-image-text-subject subtext">
                  <p className="booking-cart-item-container-right-side-image-text-subject-text flex">
                    <span className="booking-cart-item-container-right-side-image-text-subject-time">
                      23:45
                    </span>
                    <div className="containerr">
                      <p className="containerr-text">تهران</p>
                      <p className="containerr-text-1">پایانه کاوه</p>
                    </div>
                  </p>
                  <p className="booking-cart-item-container-right-side-image-text-subject-time-icon">
                    svg
                  </p>
                  <div className="containerr">
                    <p className="containerr-text">یزد</p>
                    <p className="containerr-text-1">
                      svg پایانه بیهقی
                      <span className="containerr-text-1-span">
                        مقصد نهایی: تهران بیهقی
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="booking-cart-item-container-right-side-ul-list">
              <li className="booking-cart-item-container-right-side-ul-list-item">
                <a
                  className={`booking-cart-item-container-right-side-ul-list-item-text ${
                    activeLink === "seatMap" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("seatMap")}
                >
                  نقشه صندلی‌ها
                </a>
              </li>
              <li className="booking-cart-item-container-right-side-ul-list-item">
                <a
                  className={`booking-cart-item-container-right-side-ul-list-item-text ${
                    activeLink === "busInfo" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("busInfo")}
                >
                  اطلاعات اتوبوس و سفر
                </a>
              </li>
              <li className="booking-cart-item-container-right-side-ul-list-item">
                <a
                  className={`booking-cart-item-container-right-side-ul-list-item-text ${
                    activeLink === "refundRules" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("refundRules")}
                >
                  قوانین جریمه و استرداد
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`dropdown-container ${activeLink ? "active" : ""}`}>
        {activeLink === "seatMap" && (
          <div className="dropdown-container-item">
            <div className="dropdown-container-item-subtitle">
              <div className="dropdown-container-item-subtitle-container">

              </div>
              <div className="item-close" onClick={handleClose}>
                بستن
              </div>
            </div>
            <div className="dropdown-container-item-title"></div>
          </div>
        )}
        {activeLink === "busInfo" && (
          <div className="dropdown-container-item">
            <div className="businfo ">
              <div className="businfo-text">
                <div className="businfo-title">توقف در شهرهای :</div>
                <p className="booking-cart-item-container-right-side-image-text-title-text1">
                  تهران بیهقی
                </p>
                <p className="booking-cart-item-container-right-side-image-text-title-text1">
                  جنوب چهارراه چيت سازي
                </p>
              </div>
              <div className="item-close" onClick={handleClose}>
                بستن
              </div>
            </div>
            <div className="dropdown-container-item-title"></div>
          </div>
        )}
        {activeLink === "refundRules" && (
          <div className="dropdown-container-item">
            <div className="dropdown-container-item-subtitle2">
              <div className="dropdown-container-item-subtitle2-container">
              <div className="dropdown-container-item-subtitle2-container-text border">
                <p className="dropdown-container-item-subtitle2-container-text-title">
                  10% جریمه
                </p>
                <p className="dropdown-container-item-subtitle2-container-text-desc">
                  از زمان صدور تا 1 ساعت قبل از حرکت
                </p>
              </div>
              <div className="dropdown-container-item-subtitle2-container-text">
                <p className="dropdown-container-item-subtitle2-container-text-title">
                  50% جریمه حضوری
                </p>
                <p className="dropdown-container-item-subtitle2-container-text-desc">
                  از 1 ساعت قبل از حرکت تا پس از آن
                </p>
              </div>
              
            </div>
            <div className="item-close" onClick={handleClose}>
              بستن
            </div>
            </div>
            <div className="dropdown-container-item-title"></div>
            
          </div>
        )}
      </div>
    </div>
  );
};


{/* <div className="dropdown-container-item-subtitle-container">
                <div className="dropdown-container-item-subtitle-container-item">
                  <div className="dropdown-container-item-subtitle-container-item-value"> */}
