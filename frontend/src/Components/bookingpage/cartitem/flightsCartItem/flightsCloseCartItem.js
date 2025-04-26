import "../../../../styles/bookingpage/bookingpage.scss";

export const FlightsCloseCartItem = ({ setIsOpen }) => {
  return (
    <div className="booking-cart-item">
      <div className="booking-cart-item-container">
        <div className="booking-cart-item-container-right">
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
        </div>
        <div className="booking-cart-item-container-left">
          <p className="booking-cart-item-container-left-price-container">
          تکمیل ظرفیت  
          </p>
          <button className="booking-cart-item-container-left-button">
            انتخاب پرواز
          </button>
        </div>
      </div>
    </div>
  );
};
