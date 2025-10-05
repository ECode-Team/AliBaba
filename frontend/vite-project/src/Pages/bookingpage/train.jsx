import React from 'react';
import { Search } from '../../Components/mainpage/search';
import "../../styles/bookingpage/train.scss";

const Train = () => {
  return (
    <div className="train-page-container" style={{ minHeight: '60vh' }}>
      <Search />
      <h1 className="train-page-title">صفحه رزرو بلیط قطار</h1>
    </div>
  );
};
export default Train;