import React, { useState } from "react";
import loginImageUrl from "../assets/login_image.svg";
import "../styles/loginpage.scss";

export const Loginpage = () => {
  const [mobile, setMobile] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("http://localhost:8000/api/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: mobile,
          password: password,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Login successful
        console.log("Login successful", data);
        // Here you would typically save the user data and redirect
        // For now, just show an alert
        alert("ورود موفقیت آمیز بود!");
      } else {
        setError(data.detail || "خطا در ورود");
      }
    } catch (err) {
      setError("مشکلی در ارتباط با سرور رخ داده است");
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Check if phone number is provided (required field)
    if (!phone) {
      setError("وارد کردن شماره تلفن الزامی است");
      setLoading(false);
      return;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setError("رمز عبور و تکرار آن یکسان نیستند");
      setLoading(false);
      return;
    }
    
    try {
      const response = await fetch("http://localhost:8000/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email: email || undefined, // Send email only if provided
          phone,
          password,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Registration successful
        console.log("Registration successful", data);
        alert("ثبت نام موفقیت آمیز بود!");
        // Switch to login form
        setIsRegistering(false);
      } else {
        // Handle validation errors
        if (data.username) {
          setError(`نام کاربری: ${data.username[0]}`);
        } else if (data.email) {
          setError(`ایمیل: ${data.email[0]}`);
        } else if (data.phone) {
          setError(`تلفن: ${data.phone[0]}`);
        } else if (data.password) {
          setError(`رمز عبور: ${data.password[0]}`);
        } else {
          setError("خطا در ثبت نام");
        }
      }
    } catch (err) {
      setError("مشکلی در ارتباط با سرور رخ داده است");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page__container">
      <div className="login-page__content-wrapper">
        <div className="login-page__left-section">
          <div className="login-page__illustration-wrapper">
            <img src={loginImageUrl} alt="Login" className="login-page__login-image" />
          </div>
          <h2 className="login-page__heading"> علی‌بابا رتبه یک سفر </h2>
          <p className="login-page__description">
            برای خرید آسان و امن و مشاهده تخفیف‌های ویژه علی‌بابا، عضو شوید.
          </p>
        </div>

        <div className="login-page__right-section">
          {!isRegistering ? (
            <form onSubmit={handleSubmit} className="login-page__form">
              <div className="login-page__input-group">
                <label htmlFor="mobile" className="login-page__label">
                  شماره موبایل
                </label>
                <div className="login-page__input-wrapper">
                  <input
                    type="tel"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="۰۹۱ / "
                    className="login-page__input"
                    dir="rtl"
                    required
                  />
                </div>
              </div>
              
              <div className="login-page__input-group">
                <label htmlFor="password" className="login-page__label">
                  رمز عبور
                </label>
                <div className="login-page__input-wrapper">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="رمز عبور خود را وارد کنید"
                    className="login-page__input"
                    dir="rtl"
                    required
                  />
                </div>
              </div>

              <div className="login-page__terms-wrapper">
                <span className="login-page__info-icon">ⓘ</span>
                <p className="login-page__terms-text">
                  استفاده از علی‌بابا به معنی پذیرش {" "}
                  <a href="#" className="login-page__link">
                    قوانین و مقررات
                  </a>{" "}
                  این سرویس است.
                </p>
              </div>
              
              {error && <div className="login-page__error">{error}</div>}
              
              <button 
                type="submit" 
                className="login-page__submit-button"
                disabled={loading}
              >
                {loading ? "در حال ارسال..." : "تایید و دریافت کد"}
              </button>

              <a href="#" className="login-page__password-link">
                ورود با کلمه عبور
              </a>
              
              <div className="login-page__no-account-container">
                <p className="login-page__no-account-text">حساب کاربری ندارید؟</p>
                <button 
                  type="button" 
                  onClick={() => setIsRegistering(true)}
                  className="login-page__register-link"
                >
                  ثبت نام کنید
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="login-page__form">
              <h2 className="login-page__register-heading">ثبت نام</h2>
              
              <div className="login-page__input-group">
                <label htmlFor="regUsername" className="login-page__label">
                  نام کاربری
                </label>
                <div className="login-page__input-wrapper">
                  <input
                    type="text"
                    id="regUsername"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="نام کاربری خود را وارد کنید"
                    className="login-page__input"
                    dir="rtl"
                    required
                  />
                </div>
              </div>
              
              <div className="login-page__input-group">
                <label htmlFor="regPhone" className="login-page__label">
                  شماره تلفن *
                </label>
                <div className="login-page__input-wrapper">
                  <input
                    type="tel"
                    id="regPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="شماره تلفن خود را وارد کنید"
                    className="login-page__input"
                    dir="rtl"
                    required
                  />
                </div>
              </div>
              
              <div className="login-page__input-group">
                <label htmlFor="regEmail" className="login-page__label">
                  ایمیل (اختیاری)
                </label>
                <div className="login-page__input-wrapper">
                  <input
                    type="email"
                    id="regEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ایمیل خود را وارد کنید"
                    className="login-page__input"
                    dir="rtl"
                  />
                </div>
              </div>
              
              <div className="login-page__input-group">
                <label htmlFor="regPassword" className="login-page__label">
                  رمز عبور
                </label>
                <div className="login-page__input-wrapper">
                  <input
                    type="password"
                    id="regPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="رمز عبور خود را وارد کنید"
                    className="login-page__input"
                    dir="rtl"
                    required
                  />
                </div>
              </div>
              
              <div className="login-page__input-group">
                <label htmlFor="regConfirmPassword" className="login-page__label">
                  تکرار رمز عبور
                </label>
                <div className="login-page__input-wrapper">
                  <input
                    type="password"
                    id="regConfirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="رمز عبور خود را تکرار کنید"
                    className="login-page__input"
                    dir="rtl"
                    required
                  />
                </div>
              </div>
              
              {error && <div className="login-page__error">{error}</div>}
              
              <button 
                type="submit" 
                className="login-page__submit-button"
                disabled={loading}
              >
                {loading ? "در حال ثبت نام..." : "ثبت نام"}
              </button>

              <div className="login-page__no-account-container">
                <p className="login-page__no-account-text">قبلاً ثبت نام کرده‌اید؟</p>
                <button 
                  type="button" 
                  onClick={() => setIsRegistering(false)}
                  className="login-page__register-link"
                >
                  ورود
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};