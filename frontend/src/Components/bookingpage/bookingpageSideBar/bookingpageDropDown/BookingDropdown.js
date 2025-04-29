import React from "react";
import "./bookingpageDropDown.scss";

const BookingDropdown = ({ selectedText = "", options = [] }) => {
  return (
    <div className="booking-dropdown">
      <div className="booking-dropdown__header">
        <span className="booking-dropdown__selected-svg">
          {selectedText.svg || ""}
        </span>
        <span className="booking-dropdown__selected">
          {selectedText.title || ""}
        </span>
        <span className="booking-dropdown__selected-1">
          {selectedText.sub || ""}
        </span>
        <span className="booking-dropdown__arrow">▼</span>
      </div>
      <div className="booking-dropdown-options">
        <div className="booking-dropdown-option">
          <div className="booking-dropdown-option-search">
            <input
              type="search"
              className="booking-dropdown-option-search-input"
              placeholder="Search"
            />
            <span className="booking-dropdown-option-search-icon">i</span>
          </div>

          <div className="booking-dropdown-option-vila">
            <h3 className="booking-dropdown-option-vila-title">
              {options.content.vila.vila || ""}
            </h3>
            <h3 className="booking-dropdown-option-vila-title-1">
              {options.content.vila.subvila || ""}
            </h3>
            <div className="booking-dropdown-option-vila">
              {options.content?.vila?.numberButtons && (
                <div className="booking-dropdown-option-vila-buttons-number">
                  {options.content.vila.numberButtons.map((number) => (
                    <button
                      key={number}
                      className="booking-dropdown-option-vila-buttons-number-button"
                    >
                      {number}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <h4 className="booking-dropdown-option-title">
            {options?.header || ""}
          </h4>
          {options?.content && (
            <div className="booking-dropdown-option-content">
              {options.content.checkbox && (
                <input
                  type="checkbox"
                  className="booking-dropdown-option-content-checkbox"
                />
              )}
              {options.content.image && (
                <div className="booking-dropdown-option-content-image">
                  <img
                    src={options.content.image.src || ""}
                    alt={options.content.image.alt || ""}
                    className="booking-dropdown-option-content-image-img"
                  />
                </div>
              )}
              {options.content.details && (
                <div className="booking-dropdown-option-content-details">
                  <div className="booking-dropdown-option-content-details-title">
                    {options.content.details.title || ""}
                  </div>
                  <div className="booking-dropdown-option-content-details-subtitle">
                    {options.content.details.subtitle || ""}
                  </div>
                </div>
              )}
              {/* Price is nullable - only renders if provided */}
              {options.content.price && (
                <div className="booking-dropdown-option-content-price">
                  {options.content.price || ""}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { BookingDropdown };
