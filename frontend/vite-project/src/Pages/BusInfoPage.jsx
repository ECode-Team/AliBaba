import React from "react";
import { Search } from "../Components/mainpage/search";

export const BusInfoPage = () => {
  return (
    <>
      <style jsx>{`
        .bus-page-container {
          min-height: 60vh;
          font-family: "Vazir", "Tahoma", sans-serif;
          direction: rtl;
        }

        .bus-page-title {
          text-align: right;
          color: #1a1a1a;
          font-size: 2.5rem;
          font-weight: bold;
          margin: 2rem 0 1rem;
        }

        .bus-page-subtitle {
          text-align: right;
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .intro-section {
          padding: 1rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .intro-text {
          color: #333;
          line-height: 2;
          font-size: 1rem;
          text-align: justify;
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .image-card {
          background: transparent;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .image-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .image-card-content {
          padding: 1.5rem;
        }

        .image-card-title {
          font-size: 1.1rem;
          font-weight: bold;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .image-card-text {
          color: #555;
          line-height: 1.8;
          font-size: 0.95rem;
          text-align: justify;
          background: transparent;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1a1a1a;
          text-align: center;
          margin: 3rem 0 1.5rem;
        }

        .strategy-section,
        .usage-section {
          background: transparent;
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .strategy-text,
        .usage-text {
          color: #333;
          line-height: 2;
          font-size: 1rem;
          text-align: justify;
          margin-bottom: 1.5rem;
          background: transparent;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .feature-card {
          background: transparent;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .feature-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .feature-card-content {
          padding: 1.5rem;
        }

        .feature-card-title {
          font-size: 1.1rem;
          font-weight: bold;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .feature-card-text {
          color: #555;
          line-height: 1.8;
          font-size: 0.95rem;
          text-align: justify;
          background: transparent;
        }

        .companies-section {
          background: transparent;
          padding: 1rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .companies-text {
          color: #333;
          line-height: 3;
          font-size: 1rem;
          text-align: justify;
          background: transparent;
        }

        .icon-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin: 2rem 0;
          padding: 2rem 0;
        }

        .icon-item {
          text-align: center;
        }

        .icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #f0f0f0;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
        }

        .icon-label {
          color: #333;
          font-size: 1rem;
          font-weight: 500;
        }

        .contact-section {
          background: transparent;
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .contact-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .contact-text {
          color: #333;
          line-height: 2;
          font-size: 1rem;
          text-align: justify;
          margin-bottom: 1rem;
          background: transparent;
        }

        .rules-section,
        .refund-section,
        .support-section {
          background: transparent;
          padding: 1rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .section-subtitle {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .rules-text,
        .refund-text,
        .support-text {
          color: #333;
          line-height: 2;
          font-size: 1rem;
          text-align: justify;
          background: transparent;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          background: transparent;
          padding: 1.1rem;
          border-radius: 12px;
          margin: 2rem 0;
        }

        .footer-column h4 {
          font-size: 1.1rem;
          font-weight: bold;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column li {
          color: #555;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          position: relative;
          padding-left: 1.2rem;
        }

        .footer-column li::before {
          content: "●";
          color: #ffd700;
          position: absolute;
          left: 0;
          top: 0;
        }

        @media (max-width: 768px) {
          .image-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }

          .icon-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .content-wrapper {
            padding: 0 1rem;
          }
        }
      `}</style>

      <div className="bus-page-container">
        <Search />

        <div className="content-wrapper">
          <h1 className="bus-page-title">بلیط اتوبوس</h1>
          <p className="bus-page-subtitle">
            خرید آنلاین بلیط اتوبوس به تمامی نقاط ایران
          </p>

          <div className="intro-section">
            <p className="intro-text">
              سفر با اتوبوس یکی از راحت‌ترین و مقرون به صرفه‌ترین راه‌های سفر در
              ایران است. با خرید بلیط اتوبوس آنلاین، می‌توانید به راحتی و بدون
              نیاز به مراجعه حضوری، بلیط خود را از میان صدها مسیر و شرکت مختلف
              انتخاب و خریداری کنید. سیستم رزرو آنلاین ما امکان مقایسه قیمت،
              مشاهده امکانات اتوبوس‌ها و انتخاب صندلی دلخواه را برای شما فراهم
              می‌کند.
            </p>
          </div>

          <div className="image-grid">
            <div className="image-card">
              <img src="https://source.unsplash.com/600x400/?bus,travel" alt="ترمینال اتوبوس" />
              <div className="image-card-content">
                <h3 className="image-card-title">سفر آسان و راحت با اتوبوس</h3>
                <p className="image-card-text">
                  با سیستم رزرو آنلاین، خرید بلیط اتوبوس بسیار ساده و سریع شده
                  است. تنها با چند کلیک می‌توانید بلیط خود را برای هر مسیری که
                  می‌خواهید تهیه کنید و از امکانات ویژه اتوبوس‌های مدرن بهره‌مند
                  شوید.
                </p>
              </div>
            </div>

            <div className="image-card">
              <img src="https://source.unsplash.com/600x400/?bus,modern" alt="اتوبوس مدرن" />
              <div className="image-card-content">
                <h3 className="image-card-title">اتوبوس‌های مدرن و مجهز</h3>
                <p className="image-card-text">
                  ناوگان اتوبوس‌رانی ایران شامل اتوبوس‌های مدرن VIP با امکاناتی
                  چون صندلی‌های راحت، سیستم سرمایش و گرمایش پیشرفته، سرویس
                  پذیرایی و سیستم سرگرمی است که سفری دلپذیر را برای شما رقم
                  می‌زند.
                </p>
              </div>
            </div>

            <div className="image-card">
              <img src="https://source.unsplash.com/600x400/?bus,terminal" alt="ترمینال مدرن" />
              <div className="image-card-content">
                <h3 className="image-card-title">
                  ترمینال‌های مدرن در سراسر کشور
                </h3>
                <p className="image-card-text">
                  ترمینال‌های اتوبوس‌رانی در شهرهای مختلف ایران با امکانات رفاهی
                  کامل، فضای انتظار مناسب، پارکینگ و دسترسی آسان به حمل و نقل
                  عمومی، محیطی امن و راحت برای مسافran فراهم کرده‌اند.
                </p>
              </div>
            </div>
          </div>

          <h2 className="section-title">استراتژی رزرو اتوبوس</h2>

          <div className="strategy-section">
            <p className="strategy-text">
              برای رزرو بلیط اتوبوس، توصیه می‌شود حداقل 2 تا 3 روز قبل از سفر
              اقدام کنید تا بتوانید از تنوع بیشتر مسیرها و قیمت‌های مناسب‌تر
              بهره‌مند شوید. در ایام پیک مانند تعطیلات، نوروز و ایام خاص مذهبی،
              رزرو زودهنگام (حداقل یک هفته قبل) بسیار ضروری است. همچنین با
              مقایسه قیمت‌ها و امکانات شرکت‌های مختلف می‌توانید بهترین گزینه را
              برای سفر خود انتخاب کنید.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <img src="https://source.unsplash.com/600x400/?bus,reservation" alt="رزرو آنلاین" />
              <div className="feature-card-content">
                <h3 className="feature-card-title">رزرو آنلاین سریع</h3>
                <p className="feature-card-text">
                  سیستم رزرو آنلاین ما به شما این امکان را می‌دهد که در کمتر از
                  2 دقیقه بلیط خود را رزرو کنید. با جستجوی ساده مبدا و مقصد،
                  تاریخ سفر و تعداد مسافر، لیست کاملی از سفرهای موجود را مشاهده
                  خواهید کرد.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <img src="https://source.unsplash.com/600x400/?bus,seats" alt="انتخاب صندلی" />
              <div className="feature-card-content">
                <h3 className="feature-card-title">انتخاب صندلی دلخواه</h3>
                <p className="feature-card-text">
                  با نمایش چیدمان صندلی‌های اتوبوس، می‌توانید صندلی مورد نظر خود
                  را انتخاب کنید. صندلی‌های کنار پنجره، دو نفره یا تک نفره،
                  ردیف‌های جلو یا عقب، همه در اختیار شماست.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <img src="https://source.unsplash.com/600x400/?payment,secure" alt="پرداخت امن" />
              <div className="feature-card-content">
                <h3 className="feature-card-title">پرداخت امن آنلاین</h3>
                <p className="feature-card-text">
                  سیستم پرداخت ما از جدیدترین استانداردهای امنیتی بهره‌مند است.
                  می‌توانید با خیال راحت از طریق کلیه کارت‌های عضو شتاب، کیف پول
                  الکترونیک و روش‌های پرداخت مختلف، خرید خود را تکمیل کنید.
                </p>
              </div>
            </div>
          </div>

          <h2 className="section-title">استعلام بلیط اتوبوس</h2>

          <div className="usage-section">
            <p className="usage-text">
              برای استعلام و خرید بلیط اتوبوس، کافی است از قسمت جستجو، شهر مبدا،
              مقصد و تاریخ سفر خود را وارد کنید. سپس لیستی از تمامی سفرهای موجود
              به همراه ساعت حرکت، نوع اتوبوس، امکانات و قیمت نمایش داده می‌شود.
              پس از انتخاب سفر مورد نظر، صفحه انتخاب صندلی نمایش داده شده و
              می‌توانید صندلی دلخواه خود را انتخاب کنید. در مرحله بعد، اطلاعات
              مسافران را وارد کرده و پرداخت را انجام دهید. بلیط الکترونیکی شما
              بلافاصله به ایمیل و شماره موبایل ارسال خواهد شد.
            </p>
          </div>

          <h2 className="section-title">شرکت‌های اتوبوس‌رانی</h2>

          <div className="companies-section">
            <p className="companies-text">
              در حال حاضر بیش از 100 شرکت اتوبوس‌رانی معتبر در سراسر کشور فعالیت
              می‌کنند که خدمات حمل و نقل مسافری را در مسیرهای مختلف ارائه
              می‌دهند. برخی از معروف‌ترین شرکت‌ها عبارتند از: ایران پیما، سیر و
              سفر، TBT، ماهان سفر، راه آهن جاده‌ای و... که هر کدام با ارائه
              خدمات متنوع و کیفیت‌های مختلف، انتخاب‌های گسترده‌ای را برای
              مسافران فراهم کرده‌اند.
            </p>
          </div>

          <div className="icon-grid">
            <div className="icon-item">
              <div className="icon-circle">🚌</div>
              <p className="icon-label">اتوبوس VIP</p>
            </div>
            <div className="icon-item">
              <div className="icon-circle">💺</div>
              <p className="icon-label">صندلی راحت</p>
            </div>
            <div className="icon-item">
              <div className="icon-circle">📱</div>
              <p className="icon-label">رزرو آنلاین</p>
            </div>
            <div className="icon-item">
              <div className="icon-circle">🎫</div>
              <p className="icon-label">بلیط الکترونیک</p>
            </div>
          </div>

          <div className="contact-section">
            <h3 className="contact-title">تماس</h3>
            <p className="contact-text">
              برای هرگونه سوال، مشکل یا راهنمایی در خصوص خرید بلیط اتوبوس، تیم
              پشتیبانی ما 24 ساعته آماده پاسخگویی به شماست. می‌توانید از طریق
              تلفن، ایمیل یا چت آنلاین با ما در ارتباط باشید.
            </p>
          </div>

          <div className="rules-section">
            <h3 className="section-subtitle">بلیط کودکان</h3>
            <p className="rules-text">
              کودکان زیر 2 سال بدون صندلی مجاز به همراهی هستند و نیازی به خرید
              بلیط ندارند. کودکان 2 تا 12 سال باید بلیط تهیه کنند و معمولاً از
              تخفیف ویژه برخوردار می‌شوند. کودکان بالای 12 سال باید بلیط بزرگسال
              تهیه کنند.
            </p>
          </div>

          <div className="refund-section">
            <h3 className="section-subtitle">قوانین استرداد</h3>
            <p className="refund-text">
              استرداد بلیط اتوبوس تا 2 ساعت قبل از حرکت امکان‌پذیر است. مبلغ
              جریمه استرداد بسته به زمان باقی‌مانده تا حرکت اتوبوس متفاوت است و
              ممکن است بین 10 تا 30 درصد قیمت بلیط باشد. استرداد بلیط در کمتر از
              2 ساعت به حرکت، امکان‌پذیر نیست.
            </p>
          </div>

          <div className="support-section">
            <h3 className="section-subtitle">پشتیبانی</h3>
            <p className="support-text">
              تیم پشتیبانی ما همواره آماده است تا در مورد هرگونه مشکل فنی، سوال
              درباره خرید، تغییرات بلیط یا سایر موارد به شما کمک کند. می‌توانید
              از طریق شماره تلفن 021-12345678 یا از بخش تماس با ما در سایت با
              پشتیبانی ارتباط برقرار کنید.
            </p>
          </div>

          <div className="footer-grid">
            <div className="footer-column">
              <ul>
                <li>راهنمای خرید</li>
                <li>قوانین و مقررات</li>
                <li>پرسش‌های متداول</li>
                <li>رویه‌های استرداد</li>
              </ul>
            </div>

            <div className="footer-column">
              <ul>
                <li>تماس با ما</li>
                <li>درباره شرکت</li>
                <li>فرصت‌های شغلی</li>
                <li>همکاری با ما</li>
              </ul>
            </div>

            <div className="footer-column">
              <ul>
                <li>تهران - مشهد</li>
                <li>تهران - اصفهان</li>
                <li>تهران - شیراز</li>
                <li>تهران - تبریز</li>
              </ul>
            </div>

            <div className="footer-column">
              <ul>
                <li>ایران پیما</li>
                <li>سیر و سفر</li>
                <li>TBT</li>
                <li>ماهان سفر</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
