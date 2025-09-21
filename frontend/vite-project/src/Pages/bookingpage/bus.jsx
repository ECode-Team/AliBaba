import "../../styles/bookingpage/innerflight/inflight.scss";
import { Listcontainer } from "../../Components/bookingpage/innerflight.jsx/list";
import { Sidebar } from "../../Components/bookingpage/innerflight.jsx/sidebar";
import { useState } from "react";
import { Pricecalender } from "../../Components/bookingpage/innerflight.jsx/pricecalender";

export const Bus = () => {
  const [timemove, setTimemove] = useState([1, 24]);

  const sidebar = {
    title: "نتایج",
    groups: [
      {
        summary: "ساعت حرکت",
        items: [
          {
            type: "range-slider",
            min: 1,
            max: 24,
            minValue: timemove[0],
            maxValue: timemove[1],
            onChange: (val) => setTimemove(val),
          },
        ],
      },
      {
        summary: "انتخاب اتوبوسهای",
        items: [
          { type: "checkbox", label: "دارای ظرفیت", price: "8" },
          { type: "checkbox", label: "با مقصد نهایی", price: "1" },
        ],
      },
      {
        summary: "پایانه مبدأ",
        items: [
          { type: "checkbox", label: "تهران پایانه بیهقی" },
          { type: "checkbox", label: "تهران غرب" },
        ],
      },
      {
        summary: "شرک‌ت‌های اتوبوسرانی",
        items: [
          { type: "checkboxcom", label: "رویال سفر" },
          { type: "checkboxcom", label: "سیرو سفر" },
          { type: "checkboxcom", label: "سیرو سفر ایران" },
          { type: "checkboxcom", label: "همسفرچابکسواران" },
        ],
      },
    ],
  };

  const pricecalender = {
    items: [
      {
        type: "sorting",
        values: [
          { label: "پیشنهاد علی‌بابا" },
          { label: "زودترین زمان حرکت" },
          { label: "کمترین قیمت" },
        ],
        data: [
          { label: "روز قبل" },
          { label: "۱۴۰۴/۰۶/۲۳" },
          { label: "روز بعد" },
        ],
      },
    ],
  };

  return (
    <div className="B-main">
      <div className="B-navebr"></div>
      <div className="B-container">
        <Sidebar data={sidebar} />
        <div className="B-left-section">
          <div className="B-price-calendar">
            <Pricecalender data={pricecalender} Date={pricecalender} />
          </div>
          {/* <Listcontainer /> */}
        </div>
      </div>
    </div>
  );
};
