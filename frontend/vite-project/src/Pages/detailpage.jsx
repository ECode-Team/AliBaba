import React, { useState, useEffect, useRef } from "react";
import "../styles/mainpage/detailpage.scss";
import accountImg from "../assets/images/account_img.svg";
import {
  ShareIcon,
  Star,
  Wifi,
  Luggage,
  AirCon,
  Car,
  MapPin,
  Camera,
  PrayerRoom,
  Bell,
  ShowerHead,
  Clock,
  Wheelchair,
  Elevator,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Sparkle,
  Bed,
  User,
  UserCircle,
  VerifiedIcon,
} from "../components/icons.jsx";
import {
  galleryImages,
  facilityList,
  infoBoxMessages,
  roomData,
  userRatings,
  hotelDescription,
  latestReviewsData,
  hotelRulesData,
  suggestedHotelsData,
  faqData,
  relatedLinksData,
} from "./detailpage.js";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onClick}>
        <span className={`faq-icon ${isOpen ? "open" : ""}`}>?</span>
        {question}
        <div className={`arrow-icon ${isOpen ? "open" : ""}`}>
          <ChevronDown />
        </div>
      </button>
      <div
        ref={contentHeight}
        className="faq-answer"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default function App() {
  const [review, setReview] = useState("");
  const [isLoadingReview, setIsLoadingReview] = useState(false);
  const [reviewError, setReviewError] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [itinerary, setItinerary] = useState("");
  const [isItineraryLoading, setIsItineraryLoading] = useState(false);
  const [itineraryError, setItineraryError] = useState(null);
  const dropdownRef = useRef(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState({});

  const handleGenerateReview = async () => {};
  const handleSuggestItinerary = async () => {};

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const Counter = ({ label, value, onIncrease, onDecrease }) => (
    <div className="counter-row">
      <span>{label}</span>
      <div className="counter-controls">
        <button
          onClick={onDecrease}
          disabled={
            value <= (label === "بزرگسالان" || label === "اتاق" ? 1 : 0)
          }
        >
          -
        </button>
        <span>{value}</span>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );

  const handleFaqToggle = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const toggleReviewExpansion = (index) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const facilityIconList = [
    <Wifi />,
    <PrayerRoom />,
    <ShowerHead />,
    <AirCon />,
    <Car />,
    <Luggage />,
    <Elevator />,
    <Bell />,
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div className="hotel-detail-page">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="#">رزرو هتل</a>
                <span>‹</span>
              </li>
              <li>
                <a href="#">هتل های شهر مشهد</a>
                <span>‹</span>
              </li>
              <li>هتل مدینه الرضا مشهد</li>
            </ol>
          </nav>

          <div className="image-gallery">
            <div className="main-image">
              <img src={galleryImages[0]} alt="Main hotel view" />
            </div>
            <div>
              <img src={galleryImages[1]} alt="Hotel bedroom" />
            </div>
            <div>
              <img src={galleryImages[2]} alt="Hotel lobby" />
            </div>
            <div>
              <img src={galleryImages[3]} alt="Hotel restaurant" />
            </div>
            <div>
              <img src={galleryImages[4]} alt="Hotel pool" />
              <div className="overlay-content">
                <Camera />
                <span>۱۸ تصویر دیگر</span>
              </div>
            </div>
          </div>

          <div className="content-grid">
            <aside className="content-grid-aside">
              <div className="booking-card" ref={dropdownRef}>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="تاریخ ورود"
                    className="date-input"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </div>
                <div className="position-relative">
                  <button
                    className="guest-select-btn"
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{`${adults} بزرگسال, ${children} کودک, ${rooms} اتاق`}</span>
                    <ChevronDown />
                  </button>
                  {isDropdownOpen && (
                    <div className="guest-dropdown">
                      <Counter
                        label="بزرگسالان"
                        value={adults}
                        onIncrease={() => setAdults((a) => a + 1)}
                        onDecrease={() => setAdults((a) => (a > 1 ? a - 1 : 1))}
                      />
                      <Counter
                        label="کودکان"
                        value={children}
                        onIncrease={() => setChildren((c) => c + 1)}
                        onDecrease={() =>
                          setChildren((c) => (c > 0 ? c - 1 : 0))
                        }
                      />
                      <Counter
                        label="اتاق"
                        value={rooms}
                        onIncrease={() => setRooms((r) => r + 1)}
                        onDecrease={() => setRooms((r) => (r > 1 ? r - 1 : 1))}
                      />
                    </div>
                  )}
                </div>
                <div className="price-summary">
                  <span>شروع از</span>
                  <span className="price">۴,۱۱۴,۰۰۰ تومان</span>
                </div>
                <button className="check-availability-btn">
                  بررسی ظرفیت خالی
                </button>
              </div>
            </aside>

            <main className="content-grid-main">
              <div className="hotel-info">
                <a id="ss-btn">اشتراک گذاری</a>
                <div className="info-header">
                  <div className="info-content">
                    <h1>هتل مدینه الرضا مشهد</h1>
                    <div className="subtitle-info">
                      <Star className="star-icon" />
                      <span>۵ ستاره</span>
                      <span className="rating-badge">۴.۶</span>
                      <span>امتیاز ۲۶۰ کاربر</span>
                      <div className="address-info">
                        <MapPin />
                        <span>
                          مشهد، خیابان شیرازی، نبش شارستان رضوی، بین خیابان چهار
                          باغ و نوبهار
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="facilities">
                <h3>امکانات و ویژگی ها</h3>
                <button className="view-all-link">
                  <ChevronLeft />
                  مشاهده همه امکانات
                </button>
                <div className="facilities-grid">
                  {facilityList.map((facility, index) => (
                    <div key={index} className="facility-item">
                      {facilityIconList[index]}
                      <span>{facility.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rooms-and-reviews-section">
                <h3 className="section-title">اتاق‌های هتل مدینه الرضا مشهد</h3>
                <div className="info-boxes">
                  {infoBoxMessages.map((msg, index) => (
                    <div key={index} className="info-box">
                      {msg}
                    </div>
                  ))}
                </div>
                <div className="room-list">
                  {roomData.map((room, index) => (
                    <div key={index} className="room-item">
                      <div className="room-details">
                        <h4 className="room-name">{room.name}</h4>
                        <div className="room-amenities">
                          <div className="amenity-item">
                            <Bed />
                            <span>{room.beds} صبحانه</span>
                          </div>
                          <div className="amenity-item">
                            <User />
                            <span>{room.people} یک نفر</span>
                          </div>
                        </div>
                        {!room.refundable && (
                          <span className="non-refundable">
                            غیرقابل استرداد
                          </span>
                        )}
                      </div>
                      <div className="room-booking">
                        <div className="price-container">
                          <span className="price">{room.price}</span>
                          <span className="currency">تومان</span>
                        </div>
                        <span className="price-label">قیمت برای ۱ شب</span>
                        <button className="book-room-btn">رزرو اتاق</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div class="show-more-container">
                  <button class="show-more-btn">موارد بیشتر</button>
                </div>
                <div className="user-reviews">
                  <div className="reviews-header">
                    <h4>نظرات کاربران</h4>
                    <a href="#" className="verified-reviews-link">
                      <span className="review-count-bubble">۳</span>
                      نظرات تایید شده
                    </a>
                  </div>
                  <div className="reviews-summary">
                    <div className="overall-rating-container">
                      <span className="overall-score">
                        {userRatings.overall}
                      </span>
                      <div className="rating-stars-text">
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={
                                i < Math.floor(userRatings.overall)
                                  ? "filled"
                                  : ""
                              }
                            />
                          ))}
                        </div>
                        <span>بر اساس {userRatings.totalReviews} نظر</span>
                      </div>
                    </div>
                    <div className="rating-breakdown">
                      {userRatings.breakdown.map((rating, index) => (
                        <div key={index} className="rating-row">
                          <span className="rating-label">{rating.label}</span>
                          <div className="progress-bar-container">
                            <div
                              className="progress-bar"
                              style={{ width: `${(rating.score / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span className="rating-score">{rating.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-reviews">
                <div className="latest-reviews-header">
                  <h3>{latestReviewsData.title}</h3>
                  <button className="view-all-btn">مشاهده همه نظرات</button>
                </div>
                <div className="reviews-grid">
                  {latestReviewsData.reviews.map((review, index) => (
                    <div key={index} className="review-card">
                      <div className="review-card-header">
                        <img src={accountImg} alt="User" className="avatar" />
                        <div className="user-info">
                          <span className="name">{review.name}</span>
                          {review.verified && (
                            <span className="verified-purchase">
                              <VerifiedIcon />
                              خرید از علی بابا
                            </span>
                          )}
                        </div>
                        <span className="date">{review.date}</span>
                      </div>
                      <div className="review-card-rating">
                        <span className="title">{review.title}</span>
                        <span className="score">{review.rating}/5</span>
                      </div>
                      <p
                        className={`comment ${
                          !expandedReviews[index] ? "truncated" : ""
                        }`}
                      >
                        {review.comment}
                      </p>
                      {review.comment.split("\n").length > 3 && (
                        <a
                          href="#"
                          className="read-more"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleReviewExpansion(index);
                          }}
                        >
                          {expandedReviews[index] ? "کمتر ›" : "بیشتر ›"}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="suggested-hotels">
                <div className="suggested-hotels-header">
                  <h3>{suggestedHotelsData.title}</h3>
                  <span>{suggestedHotelsData.subtitle}</span>
                </div>
                <div className="suggestions-grid">
                  {suggestedHotelsData.hotels.map((hotel, index) => (
                    <div key={index} className="suggestion-card">
                      <img src={hotel.image} alt={hotel.name} />
                      <div className="suggestion-details">
                        <h4>{hotel.name}</h4>
                        <div className="suggestion-rating">
                          {[...Array(hotel.stars)].map((_, i) => (
                            <Star key={i} />
                          ))}
                          <span>{hotel.stars} ستاره</span>
                        </div>
                        <span className="suggestion-info">{hotel.info}</span>
                        <div className="suggestion-price">
                          {hotel.discount && (
                            <span className="discount-info">
                              {hotel.discount} تخفیف هنگام پرداخت
                            </span>
                          )}
                          <span className="price">
                            {hotel.price}{ " "}
                            <span className="currency">تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3>{hotelRulesData.title}</h3>
              <div className="hotel-rules">
                <div className="hotel-rules-sidebar">
                  <div className="check-in-out">
                    <div className="time-item">
                      <Clock />
                      <span>ساعت ورود</span>
                      <strong>{hotelRulesData.notes.checkIn}</strong>
                    </div>
                    <div className="time-item">
                      <Clock />
                      <span>ساعت خروج</span>
                      <strong>{hotelRulesData.notes.checkOut}</strong>
                    </div>
                  </div>
                </div>

                <div className="hotel-rules-main-content">
                  <h4>نکات ضروری</h4>
                  <ul>
                    {hotelRulesData.notes.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <h4>{hotelRulesData.extraCosts.title}</h4>
                  <ul>
                    {hotelRulesData.extraCosts.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3>{hotelDescription.title}</h3>
              <div className="hotel-description">
                {hotelDescription.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}

                <h4>{hotelDescription.address.title}</h4>
                <p>{hotelDescription.address.text}</p>

                <h4>{hotelDescription.facilitiesInfo.title}</h4>
                <p>{hotelDescription.facilitiesInfo.text}</p>
              </div>
              <section className="faq-section">
                <h3>پرسش‌های پرتکرار</h3>
                <div className="faq-list">
                  {faqData.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFaqIndex === index}
                      onClick={() => handleFaqToggle(index)}
                    />
                  ))}
                </div>
              </section>
              <section className="related-links-section">
                <div className="related-links-grid">
                  {relatedLinksData.map((link, index) => (
                    <a href="#" key={index} className="related-link-btn">
                      <span>{link}</span>
                      <ChevronLeft />
                    </a>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
