import { useState } from "react";
import "../../../../styles/bookingpage/bookingpage.scss";
import "../hotelCartItem/hotelCartItem.scss";
import "../hotelCartItem/hotelCartItem.js";
import "./vilaCartItem.scss";

export const VilaCartItem = ({ setIsOpen }) => {


  return (
    <div className="booking-cart-item">
      <div className="booking-cart-item-container">
        <div className="booking-cart-item-container-left">

          <p className="price-container">9 شب، 1 بزرگسال </p>
          <p className="booking-cart-item-container-left-button-container">
            <span className="price">10000</span>تومان
          </p>
          <button className="booking-cart-item-container-left-button">
            انتخاب بلیط
          </button>
        </div>
        <div className="booking-cart-item-container-right">
          <div className="container">
            <div className="container-image">
              <img
                src="assets/images/vila.jpg"
                alt=""
                className="container-image-1"
              />
            </div>
            <div className="container-text">
              <p className="container-text-1">اقامتگاه جدید</p>
              <span className="container-text-1-2">
                ویلا لوکس شمال
              </span>
              <p className="container-text-1-2">
                <p className="container-text-1-2">
                  <span className="container-text-1-2-3">5 ستاره</span>
                  <span className="container-text-1-2-4">svg</span>
             
                  <span className="container-text-1-2-6">
                    (396)امتیاز کاربران
                  </span>
                </p>
              </p>         
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
