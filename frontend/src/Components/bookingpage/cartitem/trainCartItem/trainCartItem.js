import "../../../../styles/bookingpage/bookingpage.scss";
export const TrainCartItem = () => {
  return (
    <div className="train-cart-item">
      <div className="train-cart-item-container">
        <div className="train-cart-item-container-right">
          <div className="train-cart-item-container-right-side">
            <div className="train-cart-item-container-right-side-image-text-container">
              <div className="train-cart-item-container-right-side-image-text-title">
                <p className="train-cart-item-container-right-side-image-text-title-text1">
                  کوپه‌ای 6 نفره
                </p>
                <p className="train-cart-item-container-right-side-image-text-title-text2">
                  سه ستاره 6 تخته مهديس
                </p>
                <p className="train-cart-item-container-right-side-image-text-title-text2">
                  مهتاب سير جم
                </p>
              </div>
              <div className="train-cart-item-container-right-side-image-text-subject">
                <p className="train-cart-item-container-right-side-image-text-subject-text">
                  تهران
                  <span className="train-cart-item-container-right-side-image-text-subject-time">
                    23:45
                  </span>
                </p>
                <p className="train-cart-item-container-right-side-image-text-subject-time-icon">
                  svg
                </p>
                <p className="train-cart-item-container-right-side-image-text-subject-text">
                  یزد
                  <span className="train-cart-item-container-right-side-image-text-subject-time">
                    10:00
                  </span>
                </p>
              </div>
            </div>
            <div className="train-cart-item-container-right-side-image">
              <img
                src="https://www.iran-airlines.com/assets/images/logo/irani-airlines-logo.svg"
                alt="train"
              />
            </div>
          </div>
          <ul className="train-cart-item-container-right-side-ul-list">
            <li className="train-cart-item-container-right-side-ul-list-item">
              <p>اطلاعات قطار</p>
            </li>
            <li className="train-cart-item-container-right-side-ul-list-item">
              <a>ایستگاه‌ها</a>
            </li>
            <li className="train-cart-item-container-right-side-ul-list-item">
              <a>قوانین استرداد</a>
            </li>
          </ul>
        </div>

        <div className="train-cart-item-container-left">
          <p className="train-cart-item-container-left-button-container">
            تومان<span className="price">10000</span>
          </p>
          <button className="train-cart-item-container-left-button">
            انتخاب بلیط
          </button>
          <span className="train-cart-item-container-left-price">
            صندلی های باقی مانده: 10
          </span>
        </div>
      </div>
    </div>
  );
};
