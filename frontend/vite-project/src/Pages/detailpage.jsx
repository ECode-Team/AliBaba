import React, { useState, useEffect, useRef } from "react";
import "../styles/mainpage/detailpage.scss";

const ShareIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

const Star = ({ className, ...props }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);
const Wifi = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12.55a11 11 0 0 1 18.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);
const Luggage = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="6" y="7" width="12" height="13" rx="2" />
    <path d="M8 7V5a3 3 0 0 1 8 0v2" />
  </svg>
);
const AirCon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 18a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4z" />
    <path d="M12 2v8" /> <path d="m8 3 4-4 4 4" />
  </svg>
);
const Car = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m14 16.5 4 4-6-3-4 3 5-4.5" />
    <path d="M10.5 5.5 7 3 2 8l2.5 2.5" /> <path d="m13 13 6 6" />
    <circle cx="8" cy="8" r="1" /> <circle cx="15" cy="15" r="1" />
  </svg>
);
const MapPin = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const Camera = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-1.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);
const PrayerRoom = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 22v-6l-4-2-4 2v6" />
    <path d="M14 14l-4-2-4 2v10h16V10l-4-2-4 2" />
    <path d="M18 10V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6" />
    <path d="M10 18h4" />
  </svg>
);
const Bell = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);
const ShowerHead = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m4 4 2.5 2.5" /> <path d="M12.5 6.5a4.5 4.5 0 1 1-6.36 6.36" />
    <path d="M16 16h5v5" /> <path d="M16 11h5" /> <path d="M16 7h3" />
    <path d="M8 16v1a2 2 0 0 0 2 2h1" />
  </svg>
);
const Clock = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const Wheelchair = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 12a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" /> <path d="M12 12h8" />
    <path d="M12 4V2" /> <path d="M12 20v2" /> <path d="m18 6-1-1" />
    <path d="m7 18 1 1" />
  </svg>
);
const Elevator = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="6" y="3" width="12" height="18" rx="2" />
    <path d="m10 9 2-2 2 2" /> <path d="m10 15 2 2 2-2" />
  </svg>
);
const ChevronDown = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const Plus = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
const Minus = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
const Sparkle = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
  </svg>
);
const Bed = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 4v16h20V4Z" />
    <path d="M2 10h20" />
    <path d="M6 14v-4" />
  </svg>
);
const User = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const UserCircle = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="10" r="3" />
    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
  </svg>
);
const VerifiedIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

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

  const galleryImages = [
    "https://placehold.co/800x600/334155/ffffff?text=Hotel+View+1",
    "https://placehold.co/600x400/334155/ffffff?text=Bedroom",
    "https://placehold.co/600x400/334155/ffffff?text=Lobby",
    "https://placehold.co/600x400/334155/ffffff?text=Restaurant",
    "https://placehold.co/600x400/334155/ffffff?text=Pool",
  ];
  const facilityList = [
    { icon: <Wifi />, text: "اینترنت رایگان" },
    { icon: <PrayerRoom />, text: "نمازخانه" },
    { icon: <ShowerHead />, text: "سرویس بهداشتی" },
    { icon: <AirCon />, text: "تهویه مطبوع" },
    { icon: <Car />, text: "تاکسی سرویس" },
    { icon: <Luggage />, text: "انبار چمدان" },
    { icon: <Elevator />, text: "آسانسور" },
    { icon: <Bell />, text: "خدمات بیدار باش" },
  ];
  const infoBoxMessages = [
    "خدمات رایگان هتل مدینه الرضا: ترانسفر استقبال و بدرقه فرودگاهی فقط برای پرواز های داخلی، ترانسفر بدرقه به راه آهن. استفاده نامحدود از استخر، اینترنت نامحدود، یک قطعه عکس آتلیه",
    "پذیرایی میوه رایگان در بدو ورود در اتاق های VIP (سوئیت، آپارتمان و دبل لوکس) ارائه می شود.",
    "نرخ ایرانی و خارجی متفاوت است",
  ];
  const roomData = [
    {
      name: "یک تخته فصل",
      price: "۴,۱۱۴,۰۰۰",
      beds: 1,
      people: 1,
      refundable: false,
    },
    {
      name: "دبل اکونومی پنجره رو به لابی",
      price: "۴,۹۹۷,۹۰۰",
      beds: 2,
      people: 2,
      refundable: false,
    },
    {
      name: "دبل اکونومی",
      price: "۵,۱۴۲,۰۰۰",
      beds: 2,
      people: 2,
      refundable: false,
    },
    {
      name: "اتاق دوخته تویین اکونومی پنجره رو به لابی",
      price: "۵,۱۴۲,۰۰۰",
      beds: 2,
      people: 2,
      refundable: false,
    },
    {
      name: "اتاق تویین فصل",
      price: "۶,۰۵۰,۰۰۰",
      beds: 2,
      people: 2,
      refundable: false,
    },
  ];
  const userRatings = {
    overall: 4.4,
    totalReviews: 982,
    breakdown: [
      { label: "خدمات و امکانات هتل", score: 4.5 },
      { label: "نحوه پیگیری و رفتار پرسنل", score: 4.5 },
      { label: "موقعیت مکانی", score: 4.8 },
      { label: "کیفیت صبحانه یا غذا", score: 4.5 },
    ],
  };

  const hotelDescription = {
    title: "درباره هتل مدینه الرضا مشهد",
    paragraphs: [
      "هتل پنج ستاره و مجلل مدینه الرضا مشهد در فاصله ای بسیار نزدیک به حرم مطهر رضوی (ع) با محیطی شیک و معماری اصیل ایرانی اسلامی، پذیرای میهمانان و زائران گرامی آن حضرت می باشد. این هتل که در ابتدای خیابان شیرازی واقع شده، نزدیک ترین هتل پنچ ستاره به حرم مطهر است و با داشتن 300 باب اتاق و سوئیت های لوکس، آماده پذیرایی از شما عزیزان است.",
      "این هتل با پرسنلی مجرب و آموزش دیده، بهترین خدمات و امکانات را به میهمانان خود ارائه می دهد تا اقامتی خوش و خاطره انگیز را برایشان رقم بزند. از جمله امکانات این هتل می توان به رستوران گردان با چشم اندازی بی نظیر از حرم، کافی شاپ، استخر، سونا، جکوزی، سالن بدنسازی، سالن های همایش و کنفرانس، پارکینگ و اینترنت رایگان اشاره کرد.",
    ],
    address: {
      title: "آدرس هتل مدینه الرضا مشهد",
      text: "آدرس هتل مدینه الرضا در مشهد، خیابان شیرازی، نبش شارستان رضوی است. این هتل در بهترین موقعیت مکانی شهر مشهد قرار گرفته و دسترسی آسانی به مراکز خرید، اماکن دیدنی و فرودگاه دارد.",
    },
    facilitiesInfo: {
      title: "امکانات هتل مدینه الرضا مشهد",
      text: "هتل مدینه الرضا دارای امکانات رفاهی کاملی از جمله رستوران گردان با چشم اندازی بی نظیر از حرم، کافی شاپ، استخر، سونا، جکوزی، سالن بدنسازی، سالن های همایش و کنفرانس، پارکینگ و اینترنت رایگان می باشد. همچنین این هتل با ارائه خدمات ویژه ای نظیر ترانسفر فرودگاهی، خدمات CIP و خدمات ویژه معلولین، اقامتی خاطره انگیز را برای شما رقم خواهد زد.",
    },
  };

  const latestReviewsData = {
    title: "آخرین نظرات این هتل (۸۱ نظر)",
    reviews: [
      {
        name: "مسعود",
        date: "خرداد ۱۴۰۴",
        verified: true,
        rating: 3.5,
        title: "بسیار خوب",
        comment:
          "این هتل را به کسی پیشنهاد نمیکنم\nبرخورد پرسنل خوب بود\nکوچک بودن اطاق ها\nعدم تناسب قیمت اطاق با سرویس اطاق\nکهنه بودن اطاق",
      },
      {
        name: "الهام",
        date: "اردیبهشت ۱۴۰۴",
        verified: true,
        rating: 5,
        title: "فوق العاده",
        comment: "عالی عالی بود\nبوی خوشی که در محیط آکنده بود",
      },
      {
        name: "حدیثه",
        date: "فروردین ۱۴۰۴",
        verified: true,
        rating: 5,
        title: "فوق العاده",
        comment:
          "اقامت بسیار خوبی برای ما بود بازهم از این هتل رو رزرو میکنیم\nتمیزی و دقت در نظافت\nنزدیک بودن به حرم\nترنسفر فرودگاهی\nنزدیکی به مراکز خرید",
      },
    ],
  };

  const hotelRulesData = {
    title: "قوانین و مقررات هتل",
    notes: {
      checkIn: "14:00",
      checkOut: "12:00",
      points: [
        "به دلیل مسدود بودن مسیرهای منتهی به حرم در ایام تعطیل و پیک، هتل از ارائه خدمات ترانسفر معذور است.",
        "رزرو مسافر خارجی در هتل صورت می‌گیرد و در صورت خرید اینترنتی، رزرو کنسل می‌شود.",
        "مهلت ثبت درخواست ترانسفر، یک روز قبل از ورود است.",
        "قابلیت تخت اضافه یا نیم بها رو در اتاق های اکونومی و لوکس وجود ندارد.",
      ],
    },
    extraCosts: {
      title: "هزینه های جانبی",
      points: [
        "هزینه اقامت کودک کوچکتر از دو سال، رایگان است.",
        "هزینه اقامت کودک دو تا شش سال طبق قوانین هتل، در هتل دریافت می‌شود.",
        "هزینه اقامت کودک بزرگتر از شش سال، به عنوان یک فرد بزرگسال محاسبه می‌شود.",
        "هزینه اقامت کودک دو تا شش سال، با توجه به قوانین و محدودیت نفرات هتل، میبایست توسط مسافر حضورا در هتل پرداخت شود و اطلاعات دریافت شده حین خرید در علی‌بابا، صرفا به جهت تکمیل اطلاعات سفر است.",
        "ارائه مدارک شناسایی در هتل برای کودکان، الزامی است.",
      ],
    },
  };

  const suggestedHotelsData = {
    title: "هتل های پیشنهادی مشهد",
    subtitle: "۱۲ تیر تا ۱۳ تیر | ۱ شب",
    hotels: [
      {
        name: "هتل الماس ۲ مشهد",
        stars: 5,
        price: "۴,۷۹۶,۰۰۰",
        image: "https://placehold.co/150x150/1f2937/ffffff?text=Hotel+Almas+2",
        info: "۱ بزرگسال، ۱ اتاق",
      },
      {
        name: "هتل گلدن پالاس (قصر طلایی) مشهد",
        stars: 5,
        price: "۵,۹۴۰,۰۰۰",
        discount: "۱۰۰ هزار تومان",
        image: "https://placehold.co/150x150/1f2937/ffffff?text=Golden+Palace",
        info: "۱ بزرگسال، ۱ اتاق",
      },
      {
        name: "هتل بین المللی قصر مشهد",
        stars: 5,
        price: "۴,۲۲۳,۴۰۰",
        discount: "۱۰۰ هزار تومان",
        image: "https://placehold.co/150x150/1f2937/ffffff?text=Ghasr+Intl.",
        info: "۱ بزرگسال، ۱ اتاق",
      },
    ],
  };

  const handleGenerateReview = async () => {
    /* ...felan hichi... */
  };
  const handleSuggestItinerary = async () => {
    /* ...felan hichi... */
  };

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
                <h3>رزرو آنلاین</h3>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="تاریخ ورود"
                    className="date-input"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                  <input
                    type="text"
                    placeholder="تاریخ خروج"
                    className="date-input"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </div>
                <div style={{ position: "relative" }}>
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

              <div class="facilities">
                <h3>امکانات و ویژگی ها</h3>
                <div class="facilities-grid">
                  <div class="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12.55a8 8 0 0 1 14.08 0" />
                      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                      <path d="M8.53 16.11a4 4 0 0 1 6.95 0" />
                      <line x1="12" x2="12.01" y1="20" y2="20" />
                    </svg>
                    <span>خدمات اینترنت بی‌سیم (Wifi)</span>
                  </div>
                  <div class="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <span>پذیرش شبانه‌روزی</span>
                  </div>
                  <div class="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.5 12a4.5 4.5 0 0 1 9 0" />
                      <path d="M12 12a4.5 4.5 0 0 1-4.5-4.5c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5A4.5 4.5 0 0 1 12 12z" />
                    </svg>
                    <span>امکانات ویژه برای معلولان</span>
                  </div>
                  <div class="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                      <path d="M12 2L12 12L22 12" />
                    </svg>
                    <span>خدمات اینترنت</span>
                  </div>
                  <div class="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M6 20h0a2 2 0 0 0-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
                      <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
                      <path d="M10 20h4" />
                    </svg>
                    <span>انبارنگهداری</span>
                  </div>
                  <div class="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 3v18M9 6l-4 4 4 4" />
                      <path d="M15 18l4-4-4-4" />
                    </svg>
                    <span>آسانسور</span>
                  </div>
                  <div class="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M2 22h20" />
                      <path d="M4 18V8.34a1 1 0 0 1 .5-.87l6-3.46a1 1 0 0 1 1 0l6 3.46a1 1 0 0 1 .5.87V18" />
                      <path d="M8 18V12c0-2.21 1.79-4 4-4s4 1.79 4 4v6" />
                    </svg>
                    <span>نمازخانه</span>
                  </div>
                  <div class="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 17s0-2-2-2-2 2-2 2H7s0-2-2-2-2 2-2 2" />
                      <path d="M19 17V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v11" />
                      <path d="M3 14h18" />
                      <circle cx="7.5" cy="10.5" r=".5" />
                      <circle cx="16.5" cy="10.5" r=".5" />
                    </svg>
                    <span>تاکسی سرویس</span>
                  </div>
                  <div class="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>خدمات تماس</span>
                  </div>
                  <div class="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 2a2.83 2.83 0 0 1 2 5 2.83 2.83 0 0 1-4 0 2.83 2.83 0 0 1 2-5zM22 12a2.83 2.83 0 0 1-5 2 2.83 2.83 0 0 1 0-4 2.83 2.83 0 0 1 5 2zM12 22a2.83 2.83 0 0 1-2-5 2.83 2.83 0 0 1 4 0 2.83 2.83 0 0 1-2 5zM2 12a2.83 2.83 0 0 1 5-2 2.83 2.83 0 0 1 0 4 2.83 2.83 0 0 1-5-2zM17 17l-1.06-1.06M8.06 8.06L7 7" />
                      <path d="M17 7l-1.06 1.06M8.06 15.94L7 17" />
                    </svg>
                    <span>تهویه مطبوع</span>
                  </div>
                  <div class="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span>سرویس بهداشتی</span>
                  </div>
                  <div class="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3.8 2.3c.2-.2.5-.3.8-.3h14.8c.3 0 .6.1.8.3.2.2.3.5.3.8v11.2c0 .3-.1.6-.3.8-.2.2-.5.3-.8.3H4.6c-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.8V3.1c0-.3.1-.6.3-.8z" />
                      <path d="M8 18h8" />
                      <path d="M12 15v3" />
                    </svg>
                    <span>سرویس بهداشتی</span>
                  </div>
                </div>
                <button class="view-all-link">مشاهده همه امکانات</button>
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
                <button className="show-more-btn">مشاهده اتاق‌های بیشتر</button>
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
                        <UserCircle className="avatar" />
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
                      <p className="comment">{review.comment}</p>
                      <a href="#" className="read-more">
                        بیشتر ›
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hotel-rules">
                <h3>{hotelRulesData.title}</h3>
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
                            {hotel.price}{" "}
                            <span className="currency">تومان</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hotel-description">
                <h3>{hotelDescription.title}</h3>
                {hotelDescription.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}

                <h4>{hotelDescription.address.title}</h4>
                <p>{hotelDescription.address.text}</p>

                <h4>{hotelDescription.facilitiesInfo.title}</h4>
                <p>{hotelDescription.facilitiesInfo.text}</p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
