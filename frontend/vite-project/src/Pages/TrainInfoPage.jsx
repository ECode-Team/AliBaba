import React, { useState } from 'react';
import "../styles/mainpage/accordion.scss";
import { Search } from '../Components/mainpage/search';
import "./bookingpage/train.scss"; // Reusing styles

export const TrainInfoPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // --- FAQ ---
  const faqs = [
    {
      question: "چطور بلیط قطار را آنلاین بخریم؟",
      answer: "برای خرید بلیط قطار، در همین صفحه، مبدا، مقصد و تاریخ سفر خود را وارد کرده و روی دکمه جستجو کلیک کنید. در صفحه‌ی بعد، لیست قطارهای موجود به شما نمایش داده می‌شود و می‌توانید با انتخاب قطار مورد نظر، خرید خود را تکمیل کنید."
    },
    {
      question: "آیا می‌توانیم بلیط قطار را کنسل کنیم؟",
      answer: "بله، امکان استرداد آنلاین بلیط قطار در علی‌بابا وجود دارد. قوانین و درصد جریمه کنسلی بسته به شرکت ریلی و زمان باقی‌مانده تا حرکت قطار متفاوت است. می‌توانید وارد حساب کاربری خود شده و درخواست استرداد را ثبت کنید."
    },
    {
      question: "قیمت بلیط قطار برای کودکان چگونه محاسبه می‌شود؟",
      answer: "قیمت بلیط برای کودکان ۲ تا ۱۲ سال به صورت نیم‌بها محاسبه می‌شود. بلیط نوزادان (زیر ۲ سال) نیز معمولا ۱۰ درصد قیمت بلیط بزرگسال است."
    },
    {
      question: "میزان بار مجاز در قطار چقدر است؟",
      answer: "هر مسافر می‌تواند یک چمدان با ابعاد استاندارد و وزن تقریبی ۳۰ کیلوگرم همراه خود داشته باشد."
    }
  ];

  // --- Companies Grid ---
  const companystyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "24px",
    margin: "38px 0",
    justifyItems: "center"
  };
  const companycard = {
    borderRadius: "13px",
    overflow: "hidden",
    background: "#fff",
    border: "1px solid #e5e5e5",
    width: "230px",
    boxShadow: "0 1px 8px 0 rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column"
  };
  const companyimg = {
    width: "100%",
    height: "120px",
    objectFit: "cover"
  };
  const companytitle = {
    fontSize: "16px",
    fontWeight: "600",
    padding: "12px 16px",
    textAlign: "right"
  };

  const companies = [
    { img: "https://picsum.photos/230/120?random=101", name: "قطارهای مسافری نور" },
    { img: "https://picsum.photos/230/120?random=102", name: "قطارهای تواتترین (فدک)" },
    { img: "https://picsum.photos/230/120?random=103", name: "قطارهای ریل پرداز" },
    { img: "https://picsum.photos/230/120?random=104", name: "قطارهای رجا" },
    { img: "https://picsum.photos/230/120?random=105", name: "قطارهای جوپار" },
    { img: "https://picsum.photos/230/120?random=106", name: "قطارهای مهتاب سیر جم" },
    { img: "https://picsum.photos/230/120?random=107", name: "قطارهای ریل ترابر سیما" },
    { img: "https://picsum.photos/230/120?random=108", name: "قطارهای ریل سیر کوثر" }
  ];

  // --- Blog Cards Section ---
  const blogsection = {
    display: "flex",
    gap: "20px",
    margin: "48px 0",
    justifyContent: "center"
  };
  const blogcard = {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 1px 8px 0 rgba(0,0,0,0.09)",
    overflow: "hidden",
    width: "330px",
    display: "flex",
    flexDirection: "column"
  };
  const blogimg = { width: "100%", height: "135px", objectFit: "cover" };
  const blogcontent = { padding: "16px" };
  const blogtitle = { fontSize: "17px", fontWeight: "600", marginBottom: "7px" };
  const blogdesc = { fontSize: "14px", color: "#444" };

  const blogs = [
    {
      img: "https://picsum.photos/330/135?random=111",
      title: "چرا بلیط قطار را آنلاین بخریم؟",
      desc: "خرید آنلاین بلیط قطار برای این سفر آسان، سریع و ارزان است."
    },
    {
      img: "https://picsum.photos/330/135?random=112",
      title: "قطارهای لوکس مسیر تهران-مشهد کدام‌ها هستند؟",
      desc: "ویژگی‌های هر قطار را مقایسه کنید تا انتخاب مطمئن‌تری داشته باشید."
    },
    {
      img: "https://picsum.photos/330/135?random=113",
      title: "چگونه با کمترین هزینه به مشهد سفر کنیم؟",
      desc: "ارزان‌ترین بلیط قطار تهران-مشهد را با خرید اینترنتی بیابید."
    }
  ];

  // --- Promo Cards ---
  const cardSectionStyle = {
    display: 'flex',
    gap: '18px',
    justifyContent: 'center',
    marginTop: '32px',
    marginBottom: '32px',
    flexWrap: 'wrap'
  };
  const cardStyle = {
    background: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: '14px',
    width: '340px',
    minHeight: '420px',
    boxShadow: '0 1px 8px 0 rgba(0,0,0,0.08)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  };
  const cardImageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    filter: 'brightness(0.97)',
  };
  const cardOverlayStyle = {
    position: 'relative',
    zIndex: 1,
    marginTop: '-58px',
    color: '#fff',
    background: 'linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.66) 92%)',
    padding: '12px',
    textAlign: 'right',
    fontWeight: '400',
    fontSize: '18px',
    borderTopLeftRadius: '14px',
    borderTopRightRadius: '14px',
    width: '100%'
  };
  const cardContentStyle = {
    padding: '20px',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  };
  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2d2d2d',
    marginBottom: '12px',
    marginTop: '6px'
  };
  const cardDescStyle = {
    fontSize: '15px',
    color: '#333',
    marginBottom: '18px'
  };

  // --- Route/Textual section (from image) ---
  const longTextSection = {
    background: "#fcfcfc",
    borderRadius: "16px",
    boxShadow: "0 1px 8px 0 rgba(0,0,0,0.04)",
    margin: "40px 0 30px 0",
    padding: "36px",
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
    direction: "rtl",
    color: "#344",
    fontSize: "15.5px",
    lineHeight: "2.2"
  };

  // Example content - based on OCR extraction and image summary
  const longTextContent = (
    <>
      <h2 style={{fontWeight:"bold",marginBottom:"19px"}}>مسیرها و امکانات قطارهای ایران</h2>
      <p>
      قطارهای ایران در مسیرهای پرتردد و مختلفی حرکت می‌کنند. هر شرکت ریلی امکانات خاص خود را دارد و بعضی قطارهای این شرکت‌ها امکانات ویژه‌ای مثل قطارهای مسافری لوکس، کوپه‌های 4 یا 6 نفره، اتوبوسی، قطار سریع‌السیر و واگن‌های ویژه مهمانداری را ارائه می‌دهند. در این بخش با شرکت‌های مختلف ریلی و امکانات قطارها آشنا می‌شوید.
      </p>
      <h3 style={{marginTop:"28px"}}>قطارهای رجا</h3>
      <p>
      شرکت قطارهای رجا، بزرگ‌ترین شرکت ریلی ایران است که قطارهای متنوعی از قطارهای معمولی تا قطارهای لوکس و سریع‌السیر در خطوط مختلف کشور ارائه می‌دهد. قطارهای این شرکت شامل قطارهای کوپه‌ای، قطار اتوبوسی، قطار سریع‌السیر، قطارهای مسافری ویژه و قطارهای چهار و شش نفره است. قطار رجا در اکثر مسیرهای ریلی کشور فعال است.
      </p>
      <h3 style={{marginTop:"22px"}}>قطارهای نور</h3>
      <p>
      قطارهای نور معمولاً با کوپه‌های 4 نفره، امکانات رفاهی قابل قبول و خدمات پذیرایی مناسب در مسیرهای پرتردد فعال هستند.
      </p>
      <h3 style={{marginTop:"22px"}}>قطارهای فدک</h3>
      <ul style={{margin:"18px 0 18px 26px",fontSize:"15px"}}>
        <li>کوپه‌های لوکس 4 نفره</li>
        <li>پذیرایی ویژه و شام رایگان</li>
        <li>امکانات اینترنتی و مانیتور اختصاصی</li>
        <li>محیط آرام و سطح خدمات ویژه</li>
      </ul>
      <h3 style={{marginTop:"22px"}}>قطارهای جوپار</h3>
      <p>
      قطارهای شرکت جوپار معمولاً در مسیرهای جنوب کشور فعال‌اند و یکی از بهترین انتخاب‌ها برای سفر به مناطق جنوبی ایران هستند. این قطارها محیط راحتی دارند و با قیمت اقتصادی عرضه می‌شوند.
      </p>
      <h3 style={{marginTop:"22px"}}>قطارهای سیر و سفر</h3>
      <p>
      شرکت سیر و سفر قطارهای کوپه‌ای با سطح رفاه قابل قبول در مسیرهای پرتردد ارائه می‌دهد.
      </p>
      <h3 style={{marginTop:"22px"}}>قطارهای ریل پرداز سیر</h3>
      <p>
      قطارهای ریل پرداز سیر با ارائه خدمات ویژه و پذیرایی مناسب، گزینه‌ای مناسب برای سفرهای بین شهری هستند.
      </p>
      <h3 style={{marginTop:"22px"}}>قطارهای ریل ترابر سیما</h3>
      <p>
      این شرکت قطارهای ویژه‌ای را به خصوص در مسیر تهران-مشهد عرضه می‌کند و سطح خدمات خوبی دارد.
      </p>
      <h3 style={{marginTop:"22px"}}>قطارهای مهتاب سیر جم</h3>
      <p>
      قطارهای مهتاب سیر جم در مسیرهای تهران-جنوب فعال‌اند، کوپه‌های راحت و مناسب برای خانواده‌ها دارند.
      </p>
    </>
  );

  return (
    <div className="train-page-container">
      <Search />
      <h1 className="train-page-title">بلیط قطار</h1>
      <p className="train-page-subtitle">ساده‌ترین راه برای خرید بلیط قطار</p>
       {/* Companies grid */}
      <div>
        <h2 style={{textAlign: "right", fontWeight: "bold", margin: "22px 0 6px 0"}}>شرکت های ریلی در ایران</h2>
        <div style={companystyle}>
          {companies.map((item, i) => (
            <div key={i} style={companycard}>
              <img src={item.img} alt={item.name} style={companyimg} />
              <div style={companytitle}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* New long-form section from image */}
      <section style={longTextSection}>{longTextContent}</section>
      
     
      
      {/* Promo cards section */}
      <div style={cardSectionStyle}>
        <div style={cardStyle}>
          <img style={cardImageStyle} src="https://picsum.photos/340/180?random=81" alt="خرید گروهی" />
          <div style={cardOverlayStyle}>خرید گروهی</div>
          <div style={cardContentStyle}>
            <div style={cardTitleStyle}>رزرو گروهی بلیط قطار</div>
            <div style={cardDescStyle}>یکی از دغدغه‌های مسافران قطار، امکان رزرو بلیط برای سفرهای خانوادگی و گروهی است.</div>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={cardImageStyle} src="https://picsum.photos/340/180?random=82" alt="استرداد آنلاین بلیط قطار" />
          <div style={cardOverlayStyle}>استرداد آنلاین بلیط قطار</div>
          <div style={cardContentStyle}>
            <div style={cardTitleStyle}>ثبت درخواست استرداد</div>
            <div style={cardDescStyle}>اگر قصد لغو سفر داشتید، می‌توانید از خدمت استرداد آنلاین استفاده کنید.</div>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={cardImageStyle} src="https://picsum.photos/340/180?random=83" alt="خرید اینترنتی بلیط قطار" />
          <div style={cardOverlayStyle}>خرید اینترنتی بلیط قطار</div>
          <div style={cardContentStyle}>
            <div style={cardTitleStyle}>رزرو سریع و آسان</div>
            <div style={cardDescStyle}>خرید اینترنتی بلیط قطار در علی‌بابا امکان مقایسه گزینه‌ها را فراهم می‌کند.</div>
          </div>
        </div>
      </div>
      

      
      {/* FAQ Accordion */}
      <div className="accordion">
        <h3 className="title">پرسش‌های متداول بلیط قطار</h3>
        <ul className="content">
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
              </div>
              <div className={`faq-answer-wrapper ${openIndex === index ? "open" : ""}`}>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

            {/* Travel magazine cards section */}
      <div>
        <h2 style={{textAlign:"right",fontWeight:"bold",margin:"40px 0 10px 0"}}>مجله سفر و گردشگری</h2>
        <div style={blogsection}>
          {blogs.map((item, idx) => (
            <div key={idx} style={blogcard}>
              <img src={item.img} alt={item.title} style={blogimg} />
              <div style={blogcontent}>
                <div style={blogtitle}>{item.title}</div>
                <div style={blogdesc}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
