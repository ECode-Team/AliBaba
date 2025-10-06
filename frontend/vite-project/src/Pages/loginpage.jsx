import React, { useState } from "react";
import loginImageUrl from "../assets/login_image.svg";

export const Loginpage = () => {
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        {/* Left Section - Illustration */}
        <div style={styles.leftSection}>
          <div style={styles.illustrationWrapper}>
            <img src={loginImageUrl} alt="Login" style={styles.loginImage} />
          </div>
          <h2 style={styles.heading}> علی‌بابا رتبه یک سفر </h2>
          <p style={styles.description}>
            برای خرید آسان و امن و مشاهده تخفیف‌های ویژه علی‌بابا، عضو شوید.
          </p>
        </div>

        {/* Right Section - Form */}
        <div style={styles.rightSection}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="mobile" style={styles.label}>
                شماره موبایل
              </label>
              <div style={styles.inputWrapper}>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="۰۹۱ / "
                  style={styles.input}
                  dir="rtl"
                />
              </div>
            </div>

            <div style={styles.termsWrapper}>
              <span style={styles.infoIcon}>ⓘ</span>
              <p style={styles.termsText}>
                استفاده از علی‌بابا به معنی پذیرش{" "}
                <a href="#" style={styles.link}>
                  قوانین و مقررات
                </a>{" "}
                این سرویس است.
              </p>
            </div>

            <button type="submit" style={styles.submitButton}>
              تایید و دریافت کد
            </button>

            <a href="#" style={styles.passwordLink}>
              ورود با کلمه عبور
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    fontFamily: "Vazir, Tahoma, sans-serif",
    padding: "70px",
  },
  contentWrapper: {
    display: "flex",
    maxWidth: "1100px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    overflow: "hidden",
    minHeight: "500px",
    flexDirection: "row" /* Ensure horizontal layout */,
  },
  leftSection: {
    flex: 1,
    padding: "60px 50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  illustrationWrapper: {
    marginBottom: "40px",
    display: "flex",
    justifyContent: "flex-start" /* Align to the left */,
    alignItems: "center",
  },
  loginImage: {
    width: "100%",
    maxWidth: "500px",
    maxHeight: "300px",
  },
  browserWindow: {
    width: "280px",
    backgroundColor: "#8a94a0",
    borderRadius: "12px 12px 0 0",
    overflow: "hidden",
  },

  heading: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "15px",
    textAlign: "center",
    direction: "rtl",
  },
  description: {
    fontSize: "15px",
    color: "#666",
    textAlign: "center",
    lineHeight: "1.8",
    direction: "rtl",
  },
  rightSection: {
    flex: 1,
    padding: "60px 50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    direction: "rtl",
  },
  form: {
    width: "100%",
  },
  inputGroup: {
    marginBottom: "25px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    color: "#4a5568",
    marginBottom: "8px",
    textAlign: "right",
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    fontSize: "16px",
    border: "1.5px solid #d1d5db",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
    textAlign: "right",
  },
  termsWrapper: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: "25px",
    padding: "12px",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
    direction: "rtl",
  },
  infoIcon: {
    color: "#6b7280",
    fontSize: "16px",
    marginTop: "2px",
  },
  termsText: {
    fontSize: "13px",
    color: "#4b5563",
    margin: 0,
    lineHeight: "1.6",
    textAlign: "right",
    flex: 1,
  },
  link: {
    color: "#3b82f6",
    textDecoration: "none",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#F3B808",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    marginBottom: "16px",
  },
  passwordLink: {
    display: "block",
    textAlign: "center",
    color: "#3b82f6",
    fontSize: "14px",
    textDecoration: "none",
    fontWeight: "500",
  },
};
