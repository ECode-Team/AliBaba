import React from 'react';
import "../styles/mainpage/accordion.scss"; // Reusing styles
import { useLocation } from 'react-router-dom';
import { Search } from '../Components/mainpage/search';

export const FlightInfoPage = () => {
  const location = useLocation();
  const mode = location.pathname.substring(1); // Gets "Innerflight" or "Foreignflight"

  return (
    <div className="train-page-container" style={{ minHeight: '60vh' }}>
      <Search />
      <h1 className="train-page-title">بلیط هواپیما</h1>
      <p className="train-page-subtitle">اطلاعات و راهنمای خرید بلیط پروازهای داخلی و خارجی</p>
      <div className="ticket-info">
        <p>به زودی در این صفحه اطلاعات کاملی در مورد خرید بلیط هواپیما، انواع پروازها و قوانین مربوط به آن قرار خواهد گرفت.</p>
      </div>
    </div>
  );
};