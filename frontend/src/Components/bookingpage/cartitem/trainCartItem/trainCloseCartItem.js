import "../../../../styles/bookingpage/bookingpage.scss";
import "./trainCartItem.scss";
export const TrainCloseCartItem = () => {
  return (
    <div className="booking-cart-item">
      <div className="booking-cart-item-container close">
      <div className="booking-cart-item-container-left">
          <p className="booking-cart-item-container-left-button-container">
          <span className="newprice">10000</span>تومان
          </p>
          <span className="booking-cart-item-container-left-price-container">
            تکمیل ظرفیت
          </span>
        </div>
        <div className="booking-cart-item-container-right">
          <div className="booking-cart-item-container-right-side">
          <div className="booking-cart-item-container-right-side-image">
              <img
                src="https://www.iran-airlines.com/assets/images/logo/irani-airlines-logo.svg"
                alt="booking"
              />
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

        </div>
      </div>
    </div>
  );
};
