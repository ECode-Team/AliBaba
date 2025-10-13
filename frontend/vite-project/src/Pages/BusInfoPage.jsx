import React from "react";
import { Search } from "../Components/mainpage/search";
import "../styles/businfo.scss";

export const BusInfoPage = () => {
  return (
    <>
      <div className="bus-page__container">
        <Search />

        <div className="bus-page__content-wrapper">
          <h1 className="bus-page__title">بلیط اتوبوس</h1>
          <p className="bus-page__subtitle">
            خرید آنلاین بلیط اتوبوس به تمامی نقاط ایران
          </p>

          <div className="bus-page__intro-section">
            <p className="bus-page__intro-text">
              سفر با اتوبوس یکی از راحت‌ترین و مقرون به صرفه‌ترین راه‌های سفر در
              ایران است. با خرید بلیط اتوبوس آنلاین، می‌توانید به راحتی و بدون
              نیاز به مراجعه حضوری، بلیط خود را از میان صدها مسیر و شرکت مختلف
              انتخاب و خریداری کنید. سیستم رزرو آنلاین ما امکان مقایسه قیمت،
              مشاهده امکانات اتوبوس‌ها و انتخاب صندلی دلخواه را برای شما فراهم
              می‌کند.
            </p>
          </div>

          <div className="bus-page__image-grid">
            <div className="bus-page__image-card">
              <img src="https://source.unsplash.com/600x400/?bus,travel" alt="ترمینال اتوبوس" className="bus-page__image-card-img" />
              <div className="bus-page__image-card-content">
                <h3 className="bus-page__image-card-title">سفر آسان و راحت با اتوبوس</h3>
                <p className="bus-page__image-card-text">
                  با سیستم رزرو آنلاین، خرید بلیط اتوبوس بسیار ساده و سریع شده
                  است. تنها با چند کلیک می‌توانید بلیط خود را برای هر مسیری که
                  می‌خواهید تهیه کنید و از امکانات ویژه اتوبوس‌های مدرن بهره‌مند
                  شوید.
                </p>
              </div>
            </div>

            <div className="bus-page__image-card">
              <img src="https://source.unsplash.com/600x400/?bus,modern" alt="اتوبوس مدرن" className="bus-page__image-card-img" />
              <div className="bus-page__image-card-content">
                <h3 className="bus-page__image-card-title">اتوبوس‌های مدرن و مجهز</h3>
                <p className="bus-page__image-card-text">
                  ناوگان اتوبوس‌رانی ایران شامل اتوبوس‌های مدرن VIP با امکاناتی
                  چون صندلی‌های راحت، سیستم سرمایش و گرمایش پیشرفته، سرویس
                  پذیرایی و سیستم سرگرمی است که سفری دلپذیر را برای شما رقم
                  می‌زند.
                </p>
              </div>
            </div>

            <div className="bus-page__image-card">
              <img src="https://source.unsplash.com/600x400/?bus,terminal" alt="ترمینال مدرن" className="bus-page__image-card-img" />
              <div className="bus-page__image-card-content">
                <h3 className="bus-page__image-card-title">
                  ترمینال‌های مدرن در سراسر کشور
                </h3>
                <p className="bus-page__image-card-text">
                  ترمینال‌های اتوبوس‌رانی در شهرهای مختلف ایران با امکانات رفاهی
                  کامل، فضای انتظار مناسب، پارکینگ و دسترسی آسان به حمل و نقل
                  عمومی، محیطی امن و راحت برای مسافran فراهم کرده‌اند.
                </p>
              </div>
            </div>
          </div>

          <h2 className="bus-page__section-title">استراتژی رزرو اتوبوس</h2>

          <div className="bus-page__strategy-section">
            <p className="bus-page__strategy-text">
              برای رزرو بلیط اتوبوس، توصیه می‌شود حداقل 2 تا 3 روز قبل از سفر
              اقدام کنید تا بتوانید از تنوع بیشتر مسیرها و قیمت‌های مناسب‌تر
              بهره‌مند شوید. در ایام پیک مانند تعطیلات، نوروز و ایام خاص مذهبی،
              رزرو زودهنگام (حداقل یک هفته قبل) بسیار ضروری است. همچنین با
              مقایسه قیمت‌ها و امکانات شرکت‌های مختلف می‌توانید بهترین گزینه را
              برای سفر خود انتخاب کنید.
            </p>
          </div>

          <div className="bus-page__features-grid">
            <div className="bus-page__feature-card">
              <img src="https://source.unsplash.com/600x400/?bus,reservation" alt="رزرو آنلاین" className="bus-page__feature-card-img" />
              <div className="bus-page__feature-card-content">
                <h3 className="bus-page__feature-card-title">رزرو آنلاین سریع</h3>
                <p className="bus-page__feature-card-text">
                  سیستم رزرو آنلاین ما به شما این امکان را می‌دهد که در کمتر از
                  2 دقیقه بلیط خود را رزرو کنید. با جستجوی ساده مبدا و مقصد،
                  تاریخ سفر و تعداد مسافر، لیست کاملی از سفرهای موجود را مشاهده
                  خواهید کرد.
                </p>
              </div>
            </div>

            <div className="bus-page__feature-card">
              <img src="https://source.unsplash.com/600x400/?bus,seats" alt="انتخاب صندلی" className="bus-page__feature-card-img" />
              <div className="bus-page__feature-card-content">
                <h3 className="bus-page__feature-card-title">انتخاب صندلی دلخواه</h3>
                <p className="bus-page__feature-card-text">
                  با نمایش چیدمان صندلی‌های اتوبوس، می‌توانید صندلی مورد نظر خود
                  را انتخاب کنید. صندلی‌های کنار پنجره، دو نفره یا تک نفره،
                  ردیف‌های جلو یا عقب، همه در اختیار شماست.
                </p>
              </div>
            </div>

            <div className="bus-page__feature-card">
              <img src="https://source.unsplash.com/600x400/?payment,secure" alt="پرداخت امن" className="bus-page__feature-card-img" />
              <div className="bus-page__feature-card-content">
                <h3 className="bus-page__feature-card-title">پرداخت امن آنلاین</h3>
                <p className="bus-page__feature-card-text">
                  سیستم پرداخت ما از جدیدترین استانداردهای امنیتی بهره‌مند است.
                  می‌توانید با خیال راحت از طریق کلیه کارت‌های عضو شتاب، کیف پول
                  الکترونیک و روش‌های پرداخت مختلف، خرید خود را تکمیل کنید.
                </p>
              </div>
            </div>
          </div>

          <h2 className="bus-page__section-title">استعلام بلیط اتوبوس</h2>

          <div className="bus-page__usage-section">
            <p className="bus-page__usage-text">
              برای استعلام و خرید بلیط اتوبوس، کافی است از قسمت جستجو، شهر مبدا،
              مقصد و تاریخ سفر خود را وارد کنید. سپس لیستی از تمامی سفرهای موجود
              به همراه ساعت حرکت، نوع اتوبوس، امکانات و قیمت نمایش داده می‌شود.
              پس از انتخاب سفر مورد نظر، صفحه انتخاب صندلی نمایش داده شده و
              می‌توانید صندلی دلخواه خود را انتخاب کنید. در مرحله بعد، اطلاعات
              مسافران را وارد کرده و پرداخت را انجام دهید. بلیط الکترونیکی شما
              بلافاصله به ایمیل و شماره موبایل ارسال خواهد شد.
            </p>
          </div>

          <h2 className="bus-page__section-title">شرکت‌های اتوبوس‌رانی</h2>

          <div className="bus-page__companies-section">
            <p className="bus-page__companies-text">
              در حال حاضر بیش از 100 شرکت اتوبوس‌رانی معتبر در سراسر کشور فعالیت
              می‌کنند که خدمات حمل و نقل مسافری را در مسیرهای مختلف ارائه
              می‌دهند. برخی از معروف‌ترین شرکت‌ها عبارتند از: ایران پیما، سیر و
              سفر، TBT، ماهان سفر، راه آهن جاده‌ای و... که هر کدام با ارائه
              خدمات متنوع و کیفیت‌های مختلف، انتخاب‌های گسترده‌ای را برای
              مسافران فراهم کرده‌اند.
            </p>
          </div>

          <div className="bus-page__icon-grid">
            <div className="bus-page__icon-item">
              <div className="bus-page__icon-circle">🚌</div>
              <p className="bus-page__icon-label">اتوبوس VIP</p>
            </div>
            <div className="bus-page__icon-item">
              <div className="bus-page__icon-circle">💺</div>
              <p className="bus-page__icon-label">صندلی راحت</p>
            </div>
            <div className="bus-page__icon-item">
              <div className="bus-page__icon-circle">📱</div>
              <p className="bus-page__icon-label">رزرو آنلاین</p>
            </div>
            <div className="bus-page__icon-item">
              <div className="bus-page__icon-circle">🎫</div>
              <p className="bus-page__icon-label">بلیط الکترونیک</p>
            </div>
          </div>

          <div className="bus-page__contact-section">
            <h3 className="bus-page__contact-title">تماس</h3>
            <p className="bus-page__contact-text">
              برای هرگونه سوال، مشکل یا راهنمایی در خصوص خرید بلیط اتوبوس، تیم
              پشتیبانی ما 24 ساعته آماده پاسخگویی به شماست. می‌توانید از طریق
              تلفن، ایمیل یا چت آنلاین با ما در ارتباط باشید.
            </p>
          </div>

          <div className="bus-page__rules-section">
            <h3 className="bus-page__section-subtitle">بلیط کودکان</h3>
            <p className="bus-page__rules-text">
              کودکان زیر 2 سال بدون صندلی مجاز به همراهی هستند و نیازی به خرید
              بلیط ندارند. کودکان 2 تا 12 سال باید بلیط تهیه کنند و معمولاً از
              تخفیف ویژه برخوردار می‌شوند. کودکان بالای 12 سال باید بلیط بزرگسال
              تهیه کنند.
            </p>
          </div>

          <div className="bus-page__refund-section">
            <h3 className="bus-page__section-subtitle">قوانین استرداد</h3>
            <p className="bus-page__refund-text">
              استرداد بلیط اتوبوس تا 2 ساعت قبل از حرکت امکان‌پذیر است. مبلغ
              جریمه استرداد بسته به زمان باقی‌مانده تا حرکت اتوبوس متفاوت است و
              ممکن است بین 10 تا 30 درصد قیمت بلیط باشد. استرداد بلیط در کمتر از
              2 ساعت به حرکت، امکان‌پذیر نیست.
            </p>
          </div>

          <div className="bus-page__support-section">
            <h3 className="bus-page__section-subtitle">پشتیبانی</h3>
            <p className="bus-page__support-text">
              تیم پشتیبانی ما همواره آماده است تا در مورد هرگونه مشکل فنی، سوال
              درباره خرید، تغییرات بلیط یا سایر موارد به شما کمک کند. می‌توانید
              از طریق شماره تلفن 021-12345678 یا از بخش تماس با ما در سایت با
              پشتیبانی ارتباط برقرار کنید.
            </p>
          </div>

          <div className="bus-page__footer-grid">
            <div className="bus-page__footer-column">
              <ul>
                <li>راهنمای خرید</li>
                <li>قوانین و مقررات</li>
                <li>پرسش‌های متداول</li>
                <li>رویه‌های استرداد</li>
              </ul>
            </div>

            <div className="bus-page__footer-column">
              <ul>
                <li>تماس با ما</li>
                <li>درباره شرکت</li>
                <li>فرصت‌های شغلی</li>
                <li>همکاری با ما</li>
              </ul>
            </div>

            <div className="bus-page__footer-column">
              <ul>
                <li>تهران - مشهد</li>
                <li>تهران - اصفهان</li>
                <li>تهران - شیراز</li>
                <li>تهران - تبریز</li>
              </ul>
            </div>

            <div className="bus-page__footer-column">
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