import { useState } from "react";
import "../../../../styles/bookingpage/bookingpage.scss";

export const FlightsOpenCartItem = ({ setIsOpen }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(activeLink === linkName ? null : linkName);
  };

  const handleClose = () => {
    setActiveLink(null);
  };

  return (
    <div className="booking-cart-item">
      <div className="booking-cart-item-container">
        <div className="booking-cart-item-container-right">
          <div
            className={`booking-cart-item-container-right ${
              activeLink ? "active" : ""
            }`}
          >
            <div className="booking-cart-item-container-right-side">
              <div className="booking-cart-item-container-right-side-image-text-container">
                <div className="booking-cart-item-container-right-side-image-text-title">
                  <p className="booking-cart-item-container-right-side-image-text-title-text1">
                    سیستمی
                  </p>
                  <p className="booking-cart-item-container-right-side-image-text-title-text1">
                    اکونومی
                  </p>
                  <p className="booking-cart-item-container-right-side-image-text-title-text1">
                    Bombardier CRJ 200
                  </p>
                </div>
                <div className="booking-cart-item-container-right-side-image-text-subject">
                  <p className="booking-cart-item-container-right-side-image-text-subject-text">
                    تهران
                    <span className="booking-cart-item-container-right-side-image-text-subject-time">
                      23:45
                    </span>
                  </p>
                  <p className="booking-cart-item-container-right-side-image-text-subject-time-icon">
                    svg
                  </p>
                  <p className="booking-cart-item-container-right-side-image-text-subject-text">
                    یزد
                    <span className="booking-cart-item-container-right-side-image-text-subject-time">
                      10:00
                    </span>
                  </p>
                </div>
              </div>
              <div className="booking-cart-item-container-right-side-image">
                <img
                  src="https://www.iran-airlines.com/assets/images/logo/irani-airlines-logo.svg"
                  alt="booking"
                />
              </div>
            </div>
            <ul className="booking-cart-item-container-right-side-ul-list">
              <li className="booking-cart-item-container-right-side-ul-list-item">
                <a
                  className={`booking-cart-item-container-right-side-ul-list-item-text ${
                    activeLink === "refundRules" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("refundRules")}
                >
                  قوانین استرداد
                </a>
              </li>
              <li className="booking-cart-item-container-right-side-ul-list-item">
                <a
                  className={`booking-cart-item-container-right-side-ul-list-item-text ${
                    activeLink === "flightInfo" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("flightInfo")}
                >
                  اطلاعات پرواز
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="booking-cart-item-container-left">
          <p className="booking-cart-item-container-left-button-container">
            تومان<span className="price">10000</span>
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
      </div>
      <div className={`dropdown-container ${activeLink ? "active" : ""}`}>
        {activeLink === "flightInfo" && (
          <div className="dropdown-container-item">
            <div className="dropdown-container-item-title">
              <p className="dropdown-container-item-title-text-1">
                بزرگسال 3,392,100 تومان
              </p>
              <p className="dropdown-container-item-title-text">
                مجموع 3,392,100 تومان
              </p>
            </div>
            <div className="dropdown-container-item-subtitle">
              <div className="dropdown-container-item-subtitle-item-container">
                <div className="dropdown-container-item-subtitle-item-container-item">
                  <div className="dropdown-container-item-subtitle-item-container-item-value">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text">
                      مقدار بار مجاز
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1">
                      20 کیلوگرم
                    </h4>
                  </div>
                  <div className="dropdown-container-item-subtitle-item-container-item-value">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text">
                      مدل هواپیما
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1">
                      Boeing MD
                    </h4>
                  </div>
                  <div className="dropdown-container-item-subtitle-item-container-item-value">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text">
                      کلاس کابین
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1">
                      اکونومی
                    </h4>
                  </div>
                  <div className="dropdown-container-item-subtitle-item-container-item-value">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text">
                      شماره پرواز
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1">
                      48
                    </h4>
                  </div>
                  <div className="dropdown-container-item-subtitle-item-container-item-value">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text">
                      مدل هواپیما
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1">
                      Boeing MD
                    </h4>
                  </div>
                  <div className="dropdown-container-item-subtitle-item-container-item-value">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text"></p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1">
                      اکونومی
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item-close" onClick={handleClose}>
                بستن
              </div>
            </div>
          </div>
        )}
        {activeLink === "refundRules" && (
          <div className="dropdown-container-item">
            <div className="dropdown-container-item-title">
              <p className="dropdown-container-item-title-text-1">
                بزرگسال 3,392,100 تومان
              </p>
              <p className="dropdown-container-item-title-text">
                مجموع 3,392,100 تومان
              </p>
            </div>
            <div className="dropdown-container-item-subtitle">
              <div className="dropdown-container-item-subtitle-item1-container1">
                <div className="dropdown-container-item-subtitle1-item1-container1-item1">
                  <div className="dropdown-container-item-subtitle1-item1-container1-item1-text">
                    <div>svg</div>
                    <p>
                      درصد جریمه کسر شده بر اساس زمان اعلام کنسلی قوانین استرداد
                    </p>
                  </div>
                </div>
                <div className="dropdown-container-item-subtitle1-item1-container1-item1">
                  <div className="dropdown-container-item-subtitle1-item1-container1-item1-text">
                    <div>svg</div>
                    <p>
                    جریمه استرداد، طبق قوانین ایرلاین انجام میشود. علی بابا هیچ گونه دخالتی در تعیین مقدار جریمه ندارد.
                    </p>
                  </div>
                </div>
                <div className="dropdown-container-item-subtitle1-item1-container1-item2">
                  <div className></div>
                  </div>
                <div className="item-close" onClick={handleClose}>
                  بستن
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
