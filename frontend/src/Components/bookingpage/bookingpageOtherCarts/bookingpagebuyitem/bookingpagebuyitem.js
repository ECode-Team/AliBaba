import "./bookingpagebuyitem.scss";
export const Bookingpagebuyitem = ({ src }) => {
  return (
    <div className="card-item">
        <div className="card-item-image">
            <img src={src} alt="card-item-image" />
        </div>
        <div className="card-item-info">
            <h3 className="card-item-info-title">
            خرید اقساطی سفر از علی‌بابا
            </h3>
            <p className="card-item-info-description">
            سفر دلخواهت رو به تعویق ننداز! همین امروز برو
            </p>
        </div>
        <div className="card-item-price">
            <p className="card-item-price-title">
            درخواست اعتبار
            </p>
        </div>
    </div>
  );
};
