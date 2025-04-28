import React, { useRef, useState } from 'react';
import './PriceRangeSlider.scss';

const PriceRangeSlider = ({ onPriceChange }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const sliderRef = useRef(null);
  const minThumbRef = useRef(null);
  const maxThumbRef = useRef(null);

  // Constants for slider configuration
  const SLIDER_MIN = 0;
  const SLIDER_MAX = 1000;
  const SLIDER_STEP = 50;
  const SLIDER_MARKS = [
    { value: SLIDER_MIN, label: '0' },
    { value: 250, label: '250' },
    { value: 500, label: '500' },
    { value: 750, label: '750' },
    { value: SLIDER_MAX, label: '1000' }
  ];

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - SLIDER_STEP);
    setMinValue(value);
    if (onPriceChange) {
      onPriceChange([value, maxValue]);
    }
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + SLIDER_STEP);
    setMaxValue(value);
    if (onPriceChange) {
      onPriceChange([minValue, value]);
    }
  };

  return (
    <div className="price-range-slider">
      <h3 className="slider-title">Price Range</h3>
      <div className="slider-container">
        <div className="slider-track">
          <div 
            className="slider-range" 
            style={{ 
              left: `${(minValue / SLIDER_MAX) * 100}%`,
              width: `${((maxValue - minValue) / SLIDER_MAX) * 100}%`
            }}
          />
        </div>
        <input
          type="range"
          min={SLIDER_MIN}
          max={SLIDER_MAX}
          step={SLIDER_STEP}
          value={minValue}
          onChange={handleMinChange}
          className="slider-input min-input"
          ref={minThumbRef}
        />
        <input
          type="range"
          min={SLIDER_MIN}
          max={SLIDER_MAX}
          step={SLIDER_STEP}
          value={maxValue}
          onChange={handleMaxChange}
          className="slider-input max-input"
          ref={maxThumbRef}
        />
      </div>
      <div className="price-values">
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
      <div className="slider-marks">
        {SLIDER_MARKS.map((mark) => (
          <span key={mark.value}>${mark.label}</span>
        ))}
      </div>
    </div>
  );
};

export default PriceRangeSlider;

