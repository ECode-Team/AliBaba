import "../../../../styles/bookingpage/bookingpage.scss";import "./bookingpagefull.scss"

export const BookingpageFull = ({ src }) => {
  return (
    <div className="card-item booking-page-full">
      <div className="card-item-image booking-page-full-image">
        <img src={src} alt="card-item-image" />
      </div>
      <div className="card-item-info booking-page-full-info">
            <h3 className="card-item-info-title booking-page-full-info title1">
            خرید اقساطی سفر از علی‌بابا
            </h3>
            <p className="card-item-info-description booking-page-full-info-description">
            سفر دلخواهت رو به تعویق ننداز! همین امروز برو
            </p>
        </div>

    </div>
  );
};
