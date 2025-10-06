import React from "react";

const HelpCenter = () => {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "'IRANSans', 'Tahoma', sans-serif",
      direction: "rtl",
      background: "#f5f5f5",
    },
    header: {
      background: "linear-gradient(135deg, #f39c12 0%, #f8b739 100%)",
      padding: "40px",
      borderRadius: "0 0 12px 12px",
      textAlign: "center",
      marginBottom: "30px",
    },
    headerTitle: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#333",
      margin: "0 0 10px",
    },
    headerSubtitle: {
      fontSize: "14px",
      color: "#555",
      margin: "0 0 20px",
    },
    searchBox: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      maxWidth: "600px",
      margin: "0 auto",
    },
    searchInput: {
      flex: 1,
      padding: "12px 20px",
      border: "none",
      borderRadius: "6px",
      fontSize: "14px",
      textAlign: "right",
    },
    searchButton: {
      padding: "12px 30px",
      background: "#f39c12",
      border: "none",
      borderRadius: "6px",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    quickAccess: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "15px",
      marginBottom: "30px",
    },
    accessCard: {
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    icon: {
      fontSize: "32px",
      display: "block",
      marginBottom: "10px",
    },
    accessCardTitle: {
      display: "block",
      fontWeight: "600",
      color: "#333",
      marginBottom: "5px",
    },
    accessCardSubtitle: {
      fontSize: "12px",
      color: "#777",
    },
    section: {
      marginBottom: "40px",
    },
    sectionTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "20px",
      textAlign: "center",
    },
    grid4: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "15px",
    },
    serviceCard: {
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100px",
    },
    cardIcon: {
      fontSize: "28px",
      marginBottom: "10px",
      display: "block",
    },
    cardTitle: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#333",
      lineHeight: "1.4",
    },
    cardSubtitle: {
      fontSize: "11px",
      color: "#777",
      marginTop: "4px",
      display: "block",
    },
    guidesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
    },
    guideCard: {
      background: "white",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    guideImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
    },
    guideInfo: {
      padding: "15px",
    },
    guideTitle: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#333",
      margin: "0 0 8px",
    },
    guideDescription: {
      fontSize: "12px",
      color: "#777",
      margin: "0",
      lineHeight: "1.5",
    },
  };

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)";
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
  };

  const handleServiceCardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  };

  const handleServiceCardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.06)";
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>مرکز پشتیبانی آنلاین علی بابا</h1>
        <p style={styles.headerSubtitle}>چطور می‌توانیم کمکتان کنیم؟</p>
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="جستجوی راهنماها، ارسال درخواست، پرسش و پاسخ و ..."
            style={styles.searchInput}
          />
          <button
            style={styles.searchButton}
            onMouseOver={(e) => (e.currentTarget.style.background = "#e67e22")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#f39c12")}
          >
            جستجو
          </button>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div style={styles.quickAccess}>
        <div
          style={styles.accessCard}
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardLeave}
        >
          <span style={styles.icon}>📞</span>
          <span style={styles.accessCardTitle}>تماس تلفنی</span>
        </div>
        <div
          style={styles.accessCard}
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardLeave}
        >
          <span style={styles.icon}>💬</span>
          <span style={styles.accessCardTitle}>درخواست پشتیبانی</span>
          <small style={styles.accessCardSubtitle}>چت آنلاین با پشتیبانی</small>
        </div>
        <div
          style={styles.accessCard}
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardLeave}
        >
          <span style={styles.icon}>📄</span>
          <span style={styles.accessCardTitle}>سوالات متداول</span>
          <small style={styles.accessCardSubtitle}>پاسخ به سوالات متداول</small>
        </div>
      </div>

      {/* Fast Access Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>دسترسی سریع</h2>
        <div style={styles.grid4}>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>✈️</span>
            <span style={styles.cardTitle}>پرسش‌های متداول</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🏨</span>
            <span style={styles.cardTitle}>راهنمای استرداد</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>📧</span>
            <span style={styles.cardTitle}>راهنمای خرید</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🚌</span>
            <span style={styles.cardTitle}>قوانین و مقررات</span>
            <small style={styles.cardSubtitle}>سرویس</small>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>📝</span>
            <span style={styles.cardTitle}>مدارک</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>💳</span>
            <span style={styles.cardTitle}>راهنمای تنزیل</span>
            <small style={styles.cardSubtitle}>موجودی حساب کاربری</small>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🌐</span>
            <span style={styles.cardTitle}>راهنمای اخذ ویزا</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>⚖️</span>
            <span style={styles.cardTitle}>قوانین و مقررات</span>
            <small style={styles.cardSubtitle}>سرویس</small>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🎫</span>
            <span style={styles.cardTitle}>راهنمای حمل بار</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>📚</span>
            <span style={styles.cardTitle}>پنل افزودن اقلام</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>❓</span>
            <span style={styles.cardTitle}>انواع پرداخت آنلاین</span>
            <small style={styles.cardSubtitle}>در پرداخت آنلاین</small>
          </div>
        </div>
      </section>

      {/* Product Guides Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>راهنمای محصولات</h2>
        <div style={styles.grid4}>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>✈️</span>
            <span style={styles.cardTitle}>پرواز داخلی</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🌍</span>
            <span style={styles.cardTitle}>پرواز خارجی</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🏨</span>
            <span style={styles.cardTitle}>هتل داخلی</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🏠</span>
            <span style={styles.cardTitle}>هتل خارجی</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🚌</span>
            <span style={styles.cardTitle}>تور خارجی</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🚗</span>
            <span style={styles.cardTitle}>تور داخلی</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🚢</span>
            <span style={styles.cardTitle}>اتوبوس</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🚆</span>
            <span style={styles.cardTitle}>قطار</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>📱</span>
            <span style={styles.cardTitle}>خدمات سفر</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🏛️</span>
            <span style={styles.cardTitle}>تور لحظه‌ای</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🎟️</span>
            <span style={styles.cardTitle}>بیمه مسافرتی</span>
          </div>
          <div
            style={styles.serviceCard}
            onMouseEnter={handleServiceCardHover}
            onMouseLeave={handleServiceCardLeave}
          >
            <span style={styles.cardIcon}>🎭</span>
            <span style={styles.cardTitle}>اتراکشن</span>
          </div>
        </div>
      </section>

      {/* Other Guides Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>راهنمای سفر</h2>
        <div style={styles.guidesGrid}>
          <div
            style={styles.guideCard}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <img
              src="https://via.placeholder.com/300x150?text=Airport"
              alt="مدارک خروج از کشور"
              style={styles.guideImage}
            />
            <div style={styles.guideInfo}>
              <h3 style={styles.guideTitle}>مدارک خروج از کشور</h3>
              <p style={styles.guideDescription}>
                مدارک مورد نیاز برای خروج از کشور
              </p>
            </div>
          </div>
          <div
            style={styles.guideCard}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <img
              src="https://via.placeholder.com/300x150?text=Travel"
              alt="گردشگری"
              style={styles.guideImage}
            />
            <div style={styles.guideInfo}>
              <h3 style={styles.guideTitle}>گردشگری</h3>
              <p style={styles.guideDescription}>
                راهنمای کامل دیدنی‌ها و مکان‌های تفریحی
              </p>
            </div>
          </div>
          <div
            style={styles.guideCard}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <img
              src="https://via.placeholder.com/300x150?text=Hotel"
              alt="راهنمای هنگام رزرو"
              style={styles.guideImage}
            />
            <div style={styles.guideInfo}>
              <h3 style={styles.guideTitle}>راهنمای هنگام رزرو</h3>
              <p style={styles.guideDescription}>نکات مهم در رزرو اقامتگاه</p>
            </div>
          </div>
          <div
            style={styles.guideCard}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <img
              src="https://via.placeholder.com/300x150?text=Visa"
              alt="ویزای شینگن"
              style={styles.guideImage}
            />
            <div style={styles.guideInfo}>
              <h3 style={styles.guideTitle}>ویزای شینگن</h3>
              <p style={styles.guideDescription}>راهنمای دریافت ویزای شینگن</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;

