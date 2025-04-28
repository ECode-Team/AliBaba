import { useState } from "react";
import "../../../../styles/bookingpage/bookingpage.scss";
import "./hotelCartItem.scss";

export const HotelCartItem = ({ setIsOpen }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [activeLocation, setActiveLocation] = useState(null);
  //مشاهده روی نقشه
  const handleLinkClick = (link) => {
    setActiveLink(activeLink === link ? null : link);
  };
  //انتخاب مکان
  const handleLocationClick = (location) => {
    setActiveLocation(location);
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
          <p className="price-container">9 شب، 1 بزرگسال </p>

          <button className="booking-cart-item-container-left-button">
            انتخاب بلیط
          </button>
        </div>
        <div className="booking-cart-item-container-right">
          <div className="container">
            <div className="container-image">
              <img
                src="assets/images/hotel.jpg"
                alt=""
                className="container-image-1"
              />
            </div>
            <div className="container-text">
              <p className="container-text-1">اقتصادی</p>
              <span className="container-text-1-2">
                هتل بین المللی لاله تهران
              </span>
              <p className="container-text-1-2">
                <p className="container-text-1-2">
                  <span className="container-text-1-2-3">5 ستاره</span>
                  <span className="container-text-1-2-4">svg</span>
                  <span className="container-text-1-2-5">
                    3.4
                    <span className="container-text-1-2-5-5">/5</span>
                  </span>
                  <span className="container-text-1-2-6">
                    (396)امتیاز کاربران
                  </span>
                </p>
              </p>
              <div className="container-text-flex">
                <p className="container-text-flex-p">svg</p>
                <p className="container-text-flex-p">
                  خدمات اينترنت بی‌سیم در قسمت پذیرش
                </p>
                <p className="container-text-flex-p">svg</p>
                <p className="container-text">خدمات اينترنت بی‌س</p>
              </div>
              <ul className="booking-cart-item-container-right-side-ul-list">
                <li className="booking-cart-item-container-right-side-ul-list-item">
                  <a className={` ${activeLink === "stations" ? "active" : ""}`} onClick={() => handleLinkClick("stations")}>
                    مشاهده روی نقشه
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`dropdown-container ${activeLink ? "active" : ""}`}>
        {activeLink === "stations" && (
          <div className="dropdown1">
            <div className="dropdown1-i0-item2">
              <div 
                className={`dropdown1-i0-item2-item ${
                  activeLocation === "jewelry" ? "active" : ""
                }`}
                onClick={() => handleLocationClick("jewelry")}
              >
                <p className="dropdown1-item2-p">
                  موزه جواهرات ملی ایران
                </p>
                <div className="dropdown1-flex">
                  <div className="dropdown1-flex-item">svg</div>
                  <div className="dropdown1-flex-item">5دقیقه</div>
                  <div className="dropdown1-flex-item">svg</div>
                  <div className="dropdown1-flex-item">5دقیقه</div>
                  <div className="dropdown1-flex-item-1">1.5کیلومتر</div>
                </div>
              </div>
              <div 
                className={`dropdown1-i0-item2-item ${
                  activeLocation === "artists" ? "active" : ""
                }`}
                onClick={() => handleLocationClick("artists")}
              >
                <p className="dropdown1-item2-p">
                  بوستان هنرمندان
                </p>
                <div className="dropdown1-flex">
                  <div className="dropdown1-flex-item">svg</div>
                  <div className="dropdown1-flex-item">5دقیقه</div>
                  <div className="dropdown1-flex-item">svg</div>
                  <div className="dropdown1-flex-item">5دقیقه</div>
                  <div className="dropdown1-flex-item-1">1.5کیلومتر</div>
                </div>
              </div>
              <div 
                className={`dropdown1-i0-item2-item ${
                  activeLocation === "embassy" ? "active" : ""
                }`}
                onClick={() => handleLocationClick("embassy")}
              >
                <p className="dropdown1-item2-p">
                  سفارت پیشین آمریکا
                </p>
                <div className="dropdown1-flex">
                  <div className="dropdown1-flex-item">svg</div>
                  <div className="dropdown1-flex-item">5دقیقه</div>
                  <div className="dropdown1-flex-item">svg</div>
                  <div className="dropdown1-flex-item">5دقیقه</div>
                  <div className="dropdown1-flex-item-1">1.5کیلومتر</div>
                </div>
              </div>
              <div 
                className={`dropdown1-i0-item2-item ${
                  activeLocation === "artists2" ? "active" : ""
                }`}
                onClick={() => handleLocationClick("artists2")}
              >
                <p className="dropdown1-item2-p">
                  بوستان هنرمندان
                </p>
                <div className="dropdown1-flex">
                  <div className="dropdown1-flex-item">svg</div>
                  <div className="dropdown1-flex-item">5دقیقه</div>
                  <div className="dropdown1-flex-item">svg</div>
                  <div className="dropdown1-flex-item">5دقیقه</div>
                  <div className="dropdown1-flex-item-1">1.5کیلومتر</div>
                </div>
              </div>
              <div 
                className={`dropdown1-i0-item2-item ${
                  activeLocation === "carpet" ? "active" : ""
                }`}
                onClick={() => handleLocationClick("carpet")}
              >
                <p className="dropdown1-item2-p">
                  موزه فرش ایران
                </p>
                <div className="dropdown1-flex">
                  <div className="dropdown1-flex-item">svg</div>
                  <div className="dropdown1-flex-item">5دقیقه</div>
                  <div className="dropdown1-flex-item">svg</div>
                  <div className="dropdown1-flex-item">5دقیقه</div>
                  <div className="dropdown1-flex-item-1">1.5کیلومتر</div>
                </div>
              </div>
            </div>
            <div className="dropdown1-item1">
              نقشه
              <img
                src="assets/images/hotel.jpg"
                alt=""
                className="dropdown1-item1"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );

};
