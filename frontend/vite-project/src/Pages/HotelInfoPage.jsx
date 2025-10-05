import React from 'react';
import "../styles/mainpage/accordion.scss"; // Reusing styles
import { Search } from '../Components/mainpage/search';

export const HotelInfoPage = () => {
  return (
    <div className="train-page-container" style={{ minHeight: '60vh' }}>
      <Search />
      <h1 className="train-page-title">رزرو هتل</h1>
      <p className="train-page-subtitle">اطلاعات و راهنمای رزرو هتل‌های داخلی و خارجی</p>
      <div className="ticket-info">
        <p>به زودی در این صفحه اطلاعات کاملی در مورد رزرو هتل، انواع اقامتگاه‌ها و نکات مهم برای انتخاب بهترین هتل قرار خواهد گرفت.</p>
      </div>
    </div>
  );
};