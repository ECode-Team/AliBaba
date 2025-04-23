import React from "react";
import "./bookingpagesort.scss";
export const BookingPageSort = ({  }) => {
    return(
    <div className="booking-page-sort">
        <h2 className="booking-page-sort-title">:مرتب‌سازی</h2>
        <ul className="booking-page-sort-list">
            <li className="booking-page-sort-list-item">
                <a className="booking-page-sort-list-item-link">پیشنهاد علی‌بابا</a>
            </li>
            <li className="booking-page-sort-list-item">
                <a className="booking-page-sort-list-item-link-b">زودترین</a>
            </li>
            <li className="booking-page-sort-list-item">
                <a className="booking-page-sort-list-item-link-b">دیرترین</a>
            </li>
            <li className="booking-page-sort-list-item">
                <a className="booking-page-sort-list-item-link-b">ارزان‌ترین</a>
            </li>
            <li className="booking-page-sort-list-item">
                <a className="booking-page-sort-list-item-link-b">گران‌ترین</a>
            </li>
        </ul>
    </div>
    )
}