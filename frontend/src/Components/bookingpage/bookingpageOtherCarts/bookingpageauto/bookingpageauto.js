import "./bookingpageauto.scss";
export const Bookingpageauto = ({ src }) => {
  return (
    <div className="card-item booking-page-auto">
      <div className="card-item-price booking-page-auto-price">
        <div className="card-item-price-title booking-page-auto-price-title">svg</div>
        <p className="card-item-price-title booking-page-auto-price-title-1 ">درخواست خرید خودکار </p>
      </div>
      <div className="card-item-info booking-page-auto-info">
        <div className="card-item-info-title booking-page-auto-info-title">
          <h3 className="card-item-info-title-auto booking-page-auto-info-title-auto">
            خرید خودکار پرواز به محض موجودی
          </h3>
          <div className="card-item-info-title-auto-new booking-page-auto-info-title-auto-new">
            جدید
          </div>
        </div>
        <p className="card-item-info-description booking-page-auto-info-description">
          با تنظیم خرید خودکار، ما برای شما بلیط را به محض موجود شدن اولین
          ظرفیت، در همین مسیر خریداری میکنیم.
        </p>
      </div>
      <div className="card-item-image booking-page-auto-image">
        <img src={src} alt="card-item-image" />
      </div>
    </div>
  );
};
