import { useState } from "react";
import "../../../../styles/bookingpage/bookingpage.scss";
import "./trainCartItem.scss";

export const TrainOpenCartItem = ({ setIsOpen }) => {
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

          <button className="booking-cart-item-container-left-button">
            انتخاب بلیط
          </button>
          <p className="price-container">10 صندلی باقی مانده</p>
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
                  نام قطار
                </div>
              </div>
              <div className="booking-cart-item-container-right-side-image-text-container">
                <div className="booking-cart-item-container-right-side-image-text-title">
                  <p className="booking-cart-item-container-right-side-image-text-title-text1">
                    کوپه‌ای 6 نفره
                  </p>
                  <p className="booking-cart-item-container-right-side-image-text-title-text2">
                    سه ستاره 6 تخته مهديس
                  </p>
                  <p className="booking-cart-item-container-right-side-image-text-title-text2">
                    مهتاب سير جم
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
                    activeLink === "trainInfo" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("trainInfo")}
                >
                  اطلاعات قطار
                </a>
              </li>
              <li className="booking-cart-item-container-right-side-ul-list-item">
                <a
                  className={`booking-cart-item-container-right-side-ul-list-item-text ${
                    activeLink === "stations" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("stations")}
                >
                  ایستگاه‌ها
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
        {activeLink === "trainInfo" && (
          <div className="dropdown-container-item">
            <div className="dropdown-container-item-subtitle">
              <div className="dropdown-container-item-subtitle-container col">
                <div className="dropdown-container-item-subtitle-container-item col-flex-1">
                  <div className="dropdown-container-item-subtitle-container-item-value col-flex-1">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text col-flex-1">
                      شماره قطار
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1 col-flex-1-2">
                      1
                    </h4>
                  </div>
                  <div className="dropdown-container-item-subtitle-container-item-value col-flex-1">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text col-flex-1">
                      ظرفیت قطار
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1 col-flex-1-2">
                      2
                    </h4>
                  </div>
                  <div className="dropdown-container-item-subtitle-container-item-value col-flex-1">
                    <p className="dropdown-container-item-subtitle-item-container-item-value-text col-flex-1">
                      نوع کوپه
                    </p>
                    <h4 className="dropdown-container-item-subtitle-item-container-item-value-text-1 col-flex-1-2 ">
                      3
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item-close" onClick={handleClose}>
                بستن
              </div>
            </div>
            <div className="dropdown-container-item-title"></div>
          </div>
        )}
        {activeLink === "stations" && (
          <div className="dropdown-container-item">
            <div className="dropdown-container-item-subtitle1">

            </div>
            <div className="dropdown-container-item-title"></div>
          </div>
        )}
        {activeLink === "refundRules" && (
          <div className="dropdown-container-item">
            <div className="dropdown-container-item-subtitle1">
              <div className="dropdown-container-item-subtitle1-item1-container1">
                <div className="dropdown-container-item-subtitle1-item1-container1-item1">
                  <div className="dropdown-container-item-subtitle1-item1-container1-item1-text sub">
                    <div className="dropdown-container-item-subtitle1-item1-container1-item1-text-svg sub-p-svg">
                      میزان جریمه
                    </div>
                    <p className="dropdown-container-item-subtitle1-item1-container1-item1-text-p sub">
                      زمان اعلام کنسلی
                    </p>
                  </div>
                </div>
                <div className="dropdown-container-item-subtitle1-item1-container1-item1">
                  <div className="dropdown-container-item-subtitle1-item1-container1-item1-text sub-border">
                    <div className="dropdown-container-item-subtitle1-item1-container1-item1-text-svg sub-svg-1">
                      10٪
                    </div>
                    <p className="dropdown-container-item-subtitle1-item1-container1-item1-text-p sub-p">
                      از زمان صدور تا ساعت ۱۲ ظهر روز قبل از حرکت
                    </p>
                  </div>
                </div>
                <div className="dropdown-container-item-subtitle1-item1-container1-item1 sub-border">
                  <div className="dropdown-container-item-subtitle1-item1-container1-item1-text i sub">
                    <div className="dropdown-container-item-subtitle1-item1-container1-item1-text-svg sub-svg">
                      30٪
                    </div>
                    <p className="dropdown-container-item-subtitle1-item1-container1-item1-text-p sub-p">
                      از ۱۲ ظهر روز قبل از حرکت تا ۳ ساعت قبل از حرکت قطار
                    </p>
                  </div>
                </div>
                <div className="dropdown-container-item-subtitle1-item1-container1-item1 sub-border">
                  <div className="dropdown-container-item-subtitle1-item1-container1-item1-text i sub">
                    <div className="dropdown-container-item-subtitle1-item1-container1-item1-text-svg sub-svg">
                      50٪
                    </div>
                    <p className="dropdown-container-item-subtitle1-item1-container1-item1-text-p sub-p">
                      از ۳ ساعت قبل از حرکت قطار
                    </p>
                  </div>
                </div>
                <div className="dropdown-container-item-subtitle1-item1-container1-item1 sub-border">
                  <div className="dropdown-container-item-subtitle1-item1-container1-item1-text sub">
                    <div className="dropdown-container-item-subtitle1-item1-container1-item1-text-svg sub-svg">
                      50٪
                    </div>
                    <p className="dropdown-container-item-subtitle1-item1-container1-item1-text-p sub-p">
                      یک ساعت مانده به حرکت قطار، امکان استرداد آنلاین وجود
                      ندارد. (استرداد حضوری)
                    </p>
                  </div>
                </div>
                <div className="dropdown-container-item-subtitle1-item1-container1-item1 sub">
                  <div className="dropdown-container-item-subtitle1-item1-container1-item1-text sub">
                    <div className="dropdown-container-item-subtitle1-item1-container1-item1-text-svg sub-svg">
                      100٪
                    </div>
                    <p className="dropdown-container-item-subtitle1-item1-container1-item1-text-p sub-p">
                      پس از حرکت قطار
                    </p>
                  </div>
                </div>
                <div className="item-close" onClick={handleClose}>
                  بستن
                </div>
              </div>
            </div>
            <div className="dropdown-container-item-title"></div>
          </div>
        )}
      </div>
    </div>
  );
};
