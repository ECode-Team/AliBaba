import { useEffect, useRef, useState } from "react";
import "./bookingpageNavbar.scss";
export const BookingPageNavbar = () => {
  const [activeDate, setActiveDate] = useState(null);
  const navbarRef = useRef(null);
  const itemsRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      const firstItem = navbarRef.current.querySelector('.booking-page-navbar-items-item');
      if (firstItem) {
        setItemWidth(firstItem.offsetWidth);
      }
    }
  }, []);

  const handleDateClick = (date) => {
    setActiveDate(date);
  };

  const handleScrollRight = () => {
    if (navbarRef.current) {
      navbarRef.current.scrollBy({
        left: itemWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (navbarRef.current) {
      navbarRef.current.scrollBy({
        left: -itemWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="booking-page-navbar">
      <a className="booking-page-navbar-arrow-left" onClick={handleScrollRight}>
        svg
      </a>
      <div className="booking-page-navbar-items" ref={navbarRef}>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "شنبه - 02/01" ? "active" : ""
          }`}
          onClick={() => handleDateClick("شنبه - 02/01")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">شنبه - 02/01</div>
            <div className="booking-page-navbar-items-item-price">3100</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "یک شنبه - 02/02" ? "active" : ""
          }`}
          onClick={() => handleDateClick("یک شنبه - 02/02")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">
              یک شنبه - 02/02
            </div>
            <div className="booking-page-navbar-items-item-price">3200</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "دوشنبه - 02/03" ? "active" : ""
          }`}
          onClick={() => handleDateClick("دوشنبه - 02/03")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">
              دوشنبه - 02/03
            </div>
            <div className="booking-page-navbar-items-item-price">3300</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "سه شنبه - 02/04" ? "active" : ""
          }`}
          onClick={() => handleDateClick("سه شنبه - 02/04")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">
              سه شنبه - 02/04
            </div>
            <div className="booking-page-navbar-items-item-price">3400</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "چهارشنبه - 02/05" ? "active" : ""
          }`}
          onClick={() => handleDateClick("چهارشنبه - 02/05")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">
              چهارشنبه - 02/05
            </div>
            <div className="booking-page-navbar-items-item-price">3500</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "پنج شنبه - 02/06" ? "active" : ""
          }`}
          onClick={() => handleDateClick("پنج شنبه - 02/06")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">
              پنج شنبه - 02/06
            </div>
            <div className="booking-page-navbar-items-item-price">3600</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "جمعه - 02/07" ? "active" : ""
          }`}
          onClick={() => handleDateClick("جمعه - 02/07")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">
              جمعه - 02/07
            </div>
            <div className="booking-page-navbar-items-item-price">3700</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "شنبه - 02/08" ? "active" : ""
          }`}
          onClick={() => handleDateClick("شنبه - 02/08")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">
              شنبه - 02/08
            </div>
            <div className="booking-page-navbar-items-item-price">3800</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "یک شنبه - 02/09" ? "active" : ""
          }`}
          onClick={() => handleDateClick("یک شنبه - 02/09")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">یک شنبه - 02/09</div>
            <div className="booking-page-navbar-items-item-price">3900</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "دوشنبه - 02/10" ? "active" : ""
          }`}
          onClick={() => handleDateClick("دوشنبه - 02/10")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">دوشنبه - 02/10</div>
            <div className="booking-page-navbar-items-item-price">4000</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "پنج شنبه - 02/06" ? "active" : ""
          }`}
          onClick={() => handleDateClick("پنج شنبه - 02/06")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">
              پنج شنبه - 02/06
            </div>
            <div className="booking-page-navbar-items-item-price">3600</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "جمعه - 02/07" ? "active" : ""
          }`}
          onClick={() => handleDateClick("جمعه - 02/07")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">
              جمعه - 02/07
            </div>
            <div className="booking-page-navbar-items-item-price">3700</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "شنبه - 02/08" ? "active" : ""
          }`}
          onClick={() => handleDateClick("شنبه - 02/08")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">
              شنبه - 02/08
            </div>
            <div className="booking-page-navbar-items-item-price">3800</div>
          </li>
        </a>    
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "یک شنبه - 02/09" ? "active" : ""
          }`}
          onClick={() => handleDateClick("یک شنبه - 02/09")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">
              یک شنبه - 02/09
            </div>
            <div className="booking-page-navbar-items-item-price">3900</div>
          </li>
        </a>
        <a
          href="#"
          className={`booking-page-navbar-items-item-date ${
            activeDate === "دوشنبه - 02/10" ? "active" : ""
          }`}
          onClick={() => handleDateClick("دوشنبه - 02/10")}
        >
          <li className="booking-page-navbar-items-item">
            <div className="booking-page-navbar-items-item-date">
              دوشنبه - 02/10
            </div>
            <div className="booking-page-navbar-items-item-price">4000</div>
          </li>
        </a>
      </div>
      <a
        className="booking-page-navbar-arrow-right"
        onClick={handleScrollLeft}
      >
        svg
      </a>
    </div>
  );
};
