import React from 'react';
import "../styles/mainpage/accordion.scss"; // Reusing styles
import { Search } from '../Components/mainpage/search';

export const BusInfoPage = () => {
  return (
    <div className="train-page-container" style={{ minHeight: '60vh' }}>
      <Search />
      <h1 className="train-page-title">بلیط اتوبوس</h1>
      <p className="train-page-subtitle">اطلاعات و راهنمای خرید بلیط اتوبوس</p>
      <div className="ticket-info">
        <p>به زودی در این صفحه اطلاعات کاملی در مورد خرید بلیط اتوبوس، مسیرهای پرتردد و نکات مهم سفر با اتوبوس قرار خواهد گرفت.</p>
      </div>
    </div>
  );
};