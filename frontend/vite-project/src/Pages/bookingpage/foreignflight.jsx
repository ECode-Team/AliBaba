import "../../styles/bookingpage/innerflight/inflight.scss";
import { Listcontainer } from "../../Components/bookingpage/innerflight.jsx/list";
import { Sidebar } from "../../Components/bookingpage/innerflight.jsx/sidebar";
import { useState } from "react";
import { Pricecalender } from "../../Components/bookingpage/innerflight.jsx/pricecalender";

export const Foreignflight = () => {
  const [timemove, setTimemove] = useState([1, 24]);

  const innerflightFilters = {
    title: "نتایج",
    groups: [
      {
        summary: "شرکت‌های هواپیمایی",
        items: [
          {
            type: "searchbox",
            label: "نام شرکت هواپیمایی",
          },
          {
            type: "checkboxcom",
            label: "AirArabia",
            // compic: <img src="mahan_logo.png" />,
            price: "7.2 میلیون",
          },
          {
            type: "checkboxcom",
            label: "IranAir",
            // compic: <img src="iran_airtour_logo.png" />,
            price: "7.5 میلیون",
          },
          {
            type: "checkboxcom",
            label: "IRAN AIRTOUR",
            // compic: <img src="mahan_logo.png" />,
            price: "8.5 میلیون",
          },
          {
            type: "checkboxcom",
            label: "Flydubai",
            // compic: <img src="iran_airtour_logo.png" />,
            price: "9.9 میلیون",
          },
          {
            type: "checkboxcom",
            label: "Mahan Airlines",
            // compic: <img src="mahan_logo.png" />,
            price: "9.9 میلیون",
          },
          {
            type: "checkboxcom",
            label: "Emirates",
            // compic: <img src="iran_airtour_logo.png" />,
            price: "120",
          },
          {
            type: "checkboxcom",
            label: "Qatar Airways",
            // compic: <img src="mahan_logo.png" />,
            price: 100,
          },
          {
            type: "checkboxcom",
            label: "Turkish Airlines",
            // compic: <img src="iran_airtour_logo.png" />,
            price: "120",
          },
          {
            type: "checkboxcom",
            label: "AJET",
            // compic: <img src="iran_airtour_logo.png" />,
            price: "120",
          },
        ],
      },
      {
        summary: "توقف ها",
        items: [
          { type: "checkbox", label: "پرواز مستقیم" },
          { type: "checkbox", label: "یک توقف" },
          { type: "checkbox", label: "دو توقف" },
          { type: "checkbox", label: "بدون توقف طولانی" },
        ],
      },
      {
        summary: "بار چمدان",
        items: [
          { type: "checkbox", label: "بدون بار" },
          { type: "checkbox", label: "20 تا 40 کیلوگرم" },
        ],
      },
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
        summary: "ساعت رسیدن",
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
        summary: "قیمت",
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
        summary: "مدت زمان سفر",
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
        summary: "مدت زمان توقف‌ها",
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
        summary: "پیشنهاد ویژه",
        items: [{ type: "checkbox", label: "ارتقاامکانات" }],
      },
      {
        summary: "فرودگاه‌ها",
        items: [
          { type: "checkbox", label: "فرودگاه امام خمینی (IKA)" },
          { type: "checkbox", label: "فرودگاه دبی (DXB)" },
        ],
      },
      {
        summary: "فرودگاه‌های توقف",
        items: [
          {
            type: "searchbox",
            label: "جستوجوی شهر، فرودگاه",
          },
          { type: "checkbox", label: "فرودگاه استانبول (IST)" },
          { type: "checkbox", label: "فرودگاه بین‌المللی دوحه (DOH)" },
          { type: "checkbox", label: "فرودگاه بین‌المللی شارجه (SHI)" },
          { type: "checkbox", label: "فرودگاه صابیحا گوکچن (SAW)" },
        ],
      },
      {
        summary: "مدل هواپیما",
        items: [
          {
            type: "searchbox",
            label: "جستوجوی مدل هواپیما",
          },
          { type: "checkbox", label: "Boeing 777-300ER Passenger" },
          { type: "checkbox", label: "Boeing 737MAX 8 Passenger" },
          { type: "checkbox", label: "Boeing 737-800 -Winglets- Passenger" },
          { type: "checkbox", label: "B737-8MAX" },
          { type: "checkbox", label: "B737-800-189Y" },
          { type: "checkbox", label: "B737 MAX" },
        ],
      },
      {
        summary: "نوع بیلط",
        items: [
          { type: "checkbox", label: "چارتر" },
          { type: "checkbox", label: "سیستمی" },
        ],
      },
      {
        summary: "موارد دیگر",
        items: [
          { type: "checkbox", label: "نمایش بیلط‌های تکراری" },
        ],
      },
    ],
  };

  const pricecalender = {
    items: [
      // {
      //   type: "pricetime",
      //   values: [
      //     { label: "یکشنبه - 05/17", price: "2,144" },
      //     { label: "دوشنبه - 05/20", price: "3,725" },
      //     { label: "سه‌شنبه - 05/21", price: "4,600" },
      //     { label: "چهارشنبه - 05/22", price: "4,370" },
      //     { label: "پنج‌شنبه - 05/23", price: "3,900" },
      //     { label: "جمعه - 05/24", price: "3,450", value: "ظرفیت تکمیل" },
      //     { label: "شنبه - 05/17", price: "4,600" },
      //   ],
      // },
      {
        type: "pricetimebox",
        values : [
          {label: "data"}
        ]
      },
      {
        type: "shortcutbox",
        values: [
          { label: "AJET" ,time: "--", timeone: "12", timeplus: "9", plus: "۱+توقف"},
          { label: "Caspian Airline" ,time: "--", timeone: "10", timeplus: "13", plus: "۱+توقف"},
          { label: "Flightline" ,time: "11", timeone: "13", timeplus: "4", plus: "۱+توقف"},
          { label: "Pegasus" ,time: "--", timeone: "15", timeplus: "13", plus: "۱+توقف"},
          { label: "Turkish Airlines" ,time: "11", timeone: "18", timeplus: "--", plus: "۱+توقف"},
          { label: "AJET" ,time: "19", timeone: "--", timeplus: "16", plus: "۱+توقف"},
        ],
      },
      {
        type: "sorting",
        values: [
          { label: "پیشنهاد علی‌بابا", value: "11.4 میلیون - 03:00h " },
          { label: "ارزان‌ترین", value: "10.2 میلیون - 03:20h " },
          { label: "سریع‌ترین", value: "15.8 میلیون - 03:00h " },
          { label: "سایر ..." },
        ],
      },
      {
        type: "exclamationmark",
        values: [{ label: " قیمت ها برای یک بزرگسال محاسبه شده است. " }],
      },
    ],
  };

  return (
    <div className="flights">
      <div className="navebbrr"></div>
      <div className="container">
        <Sidebar data={innerflightFilters} />
        <div className="left-section">
          <div className="topic">
            <Pricecalender data={pricecalender} />
          </div>
          <Listcontainer />
        </div>
      </div>
    </div>
  );
};
