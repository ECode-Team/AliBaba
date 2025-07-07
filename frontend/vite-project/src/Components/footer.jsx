import React from "react";
import { Linkedin, Instagram, Twitter, Youtube, Send } from "lucide-react";
import "../styles/mainpage/footer.scss";
import alibaba_footer from "/alibaba_footer.svg";

export const Footer = () => {
  return (
    <>
      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-top-section">
            <div className="footer-left-column">
              <div className="logo-contact-info">
                <img
                  src={alibaba_footer}
                  alt="Alibaba Logo"
                  className="alibaba-logo"
                />
                <p className="support-phone" dir="rtl">
                  <span>تلفن پشتیبانی: </span>
                  <span dir="ltr">021-43900000</span>
                </p>
                <p className="address-text">
                  دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان
                  بیمه چهارم، بن‌بست گل‌ها، پلاک ۱
                </p>
              </div>
              <div className="trust-icons">
                <img
                  src="https://placehold.co/100x50/ffffff/cccccc?text=Icon"
                  alt="Trust Icon 1"
                  className="trust-icon"
                />
                <img
                  src="https://placehold.co/100x50/ffffff/cccccc?text=Icon"
                  alt="Trust Icon 2"
                  className="trust-icon"
                />
                <img
                  src="https://placehold.co/100x50/ffffff/cccccc?text=Icon"
                  alt="Trust Icon 3"
                  className="trust-icon"
                />
                <img
                  src="https://placehold.co/50x50/ffffff/cccccc?text=QR"
                  alt="QR Code"
                  className="trust-icon"
                />
              </div>
            </div>

            <div className="footer-right-column">
              <div className="nav-columns" dir="rtl">
                <div className="nav-column">
                  <h3 className="column-heading">علی بابا</h3>
                  <ul className="nav-list">
                    <li>
                      <a href="#">درباره ما</a>
                    </li>
                    <li>
                      <a href="#">تماس با ما</a>
                    </li>
                    <li>
                      <a href="#">چرا علی‌بابا</a>
                    </li>
                    <li>
                      <a href="#">علی‌بابا پلاس</a>
                    </li>
                    <li>
                      <a href="#">بیمه مسافرتی</a>
                    </li>
                    <li>
                      <a href="#">مجله علی‌بابا</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-column">
                  <h3 className="column-heading">خدمات مشتریان</h3>
                  <ul className="nav-list">
                    <li>
                      <a href="#">مرکز پشتیبانی آنلاین</a>
                    </li>
                    <li>
                      <a href="#">راهنمای خرید</a>
                    </li>
                    <li>
                      <a href="#">راهنمای استرداد</a>
                    </li>
                    <li>
                      <a href="#">قوانین و مقررات</a>
                    </li>
                    <li>
                      <a href="#">پرسش و پاسخ</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-column">
                  <h3 className="column-heading">اطلاعات تکمیلی</h3>
                  <ul className="nav-list">
                    <li>
                      <a href="#">فروش سازمانی</a>
                    </li>
                    <li>
                      <a href="#">پنل آژانس علی‌بابا</a>
                    </li>
                    <li>
                      <a href="#">فرصت‌های شغلی</a>
                    </li>
                    <li>
                      <a href="#">سنجش رضایتمندی</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="popular-destinations" dir="rtl">
                <span>اطلاعات فرودگاه‌ها</span>{" "}
                <span className="separator">|</span>
                <span>خرید بلیط هواپیما خارجی</span>{" "}
                <span className="separator">|</span>
                <span>قطار</span> <span className="separator">|</span>
                <span>تور استانبول</span> <span className="separator">|</span>
                <span>بلیط</span> <span className="separator">|</span>
                <span>تور کیش</span> <span className="separator">|</span>
                <span>بلیط چارتر</span>
                <span className="more-link">
                  بیشتر
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="more-arrow"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="footer-bottom-section">
            <div className="copyright-text">
              <p>
                کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و
                متعلق به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 3.12.6)
              </p>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon-link">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon-link">
                <Youtube size={20} />
              </a>
              <a href="#" className="social-icon-link">
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
