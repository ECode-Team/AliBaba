import React from "react";
import { Search } from "../../Components/mainpage/search";

const Vila = () => {
  return (
    <div className="vila-page-container" style={{ minHeight: "60vh" }}>
      <Search />
      <div className="vila-content">
        <h1>Vila Booking Page</h1>
        <p>Find and book your perfect villa accommodation.</p>
      </div>
    </div>
  );
};

export { Vila };