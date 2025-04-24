import { useState } from "react";
import "../../../../styles/bookingpage/bookingpage.scss";

export const FlightsOpenCartItem = ({ setIsOpen }) => {
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
                <div className="booking-cart-item-container-right-side-image-text-container">
                  نام هواپیما
                </div>
              </div>
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
            </div>
            <ul className="booking-cart-item-container-right-side-ul-list">
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
            </ul>
          </div>
        </div>
      </div>
      <div className={`dropdown-container ${activeLink ? "active" : ""}`}>
        {activeLink === "flightInfo" && (
          <div className="dropdown-container-item">
            <div className="dropdown-container-item-subtitle">
              <div className="dropdown-container-item-subtitle-container">
                <div className="dropdown-container-item-subtitle-container-item">
                  <div className="dropdown-container-item-subtitle-container-item-value">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text">
                      شماره پرواز
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1">
                      48
                    </h4>
                  </div>
                  <div className="dropdown-container-item-subtitle-container-item-value">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text">
                      کلاس کابین
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1">
                      اکونومی
                    </h4>
                  </div>
                  <div className="dropdown-container-item-subtitle-container-item-value">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text">
                      مدل هواپیما
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1">
                      Boeing MD
                    </h4>
                  </div>
                  <div className="dropdown-container-item-subtitle-container-item-value">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text">
                      مقدار بار مجاز
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1">
                      20 کیلوگرم
                    </h4>
                  </div>
                  <div className="dropdown-container-item-subtitle-container-item-value">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text">
                      ترمینال
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1">
                      فرودگاه مهرآباد - ترمینال 1
                    </h4>
                  </div>
                  <div className="dropdown-container-item-subtitle-container-item-value">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text">
                      نوع پرواز
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1">
                      سیستمی
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item-close" onClick={handleClose}>
                بستن
              </div>
            </div>
            <div className="dropdown-container-item-title">
              <p className="dropdown-container-item-title-text-1">
                بزرگسال 3,392,100 تومان
              </p>
              <p className="dropdown-container-item-title-text">
                مجموع 3,392,100 تومان
              </p>
            </div>
          </div>
        )}
        {activeLink === "refundRules" && (
          <div className="dropdown-container-item">
            <div className="dropdown-container-item-subtitle1">
              <div className="dropdown-container-item-subtitle1-item1-container1">
                <div className="dropdown-container-item-subtitle1-item1-container1-item1">
                  <div className="dropdown-container-item-subtitle1-item1-container1-item1-text">
                    <p className="dropdown-container-item-subtitle1-item1-container1-item1-text-p">
                      درصد جریمه کسر شده بر اساس زمان اعلام کنسلی قوانین استرداد
                    </p>
                    <div className="dropdown-container-item-subtitle1-item1-container1-item1-text-svg">
                      svg
                    </div>
                  </div>
                </div>
                <div className="dropdown-container-item-subtitle1-item1-container1-item1">
                  <div className="dropdown-container-item-subtitle1-item1-container1-item1-text">
                    <p className="dropdown-container-item-subtitle1-item1-container1-item1-text-p">
                      جریمه استرداد، طبق قوانین ایرلاین انجام میشود. علی بابا
                      هیچ گونه دخالتی در تعیین مقدار جریمه ندارد.
                    </p>
                    <div className="dropdown-container-item-subtitle1-item1-container1-item1-text-svg">
                      svg
                    </div>
                  </div>
                </div>

                <div className="dropdown-container-item-subtitle1-item1-container1-item2">
                  <div className="dropdown-container-item-subtitle1-item1-container1-item2-item1-1">
                    <p className="dropdown-container-item-subtitle1-item1-container1-item2-item1-text1">
                      50%
                    </p>
                    <p className="dropdown-container-item-subtitle1-item1-container1-item2-item1-text2">
                      از زمان صدور بلیط تا 12:00 ظهر 1 روز قبل از پرواز
                    </p>
                  </div>
                  <div className="dropdown-container-item-subtitle1-item1-container1-item2-item1-1 padding-inline">
                    <p className="dropdown-container-item-subtitle1-item1-container1-item2-item1-text1">
                      70%
                    </p>
                    <p className="dropdown-container-item-subtitle1-item1-container1-item2-item1-text2">
                      از 12:00 ظهر 1 روز قبل از پرواز تا 4 ساعت قبل از پرواز
                    </p>
                  </div>
                  <div className="dropdown-container-item-subtitle1-item1-container1-item2-item1 padding-inline">
                    <p className="dropdown-container-item-subtitle1-item1-container1-item2-item1-text1">
                      85%
                    </p>
                    <p className="dropdown-container-item-subtitle1-item1-container1-item2-item1-text2">
                      از 4 ساعت قبل از پرواز به بعد
                    </p>
                  </div>
                </div>
                <div className="item-close" onClick={handleClose}>
                  بستن
                </div>
              </div>
            </div>
            <div className="dropdown-container-item-title">
              <p className="dropdown-container-item-title-text-1">
                بزرگسال 3,392,100 تومان
              </p>
              <p className="dropdown-container-item-title-text">
                مجموع 3,392,100 تومان
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
