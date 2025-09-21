import "../../styles/bookingpage/innerflight/inflight.scss";
import { Listcontainer } from "../../Components/bookingpage/innerflight.jsx/list";
import { Sidebar } from "../../Components/bookingpage/innerflight.jsx/sidebar";
import { useState } from "react";
import { Pricecalender } from "../../Components/bookingpage/innerflight.jsx/pricecalender";

export const Innerflight = () => {
  const [timemove, setTimemove] = useState([1, 24]);

  const sidebar = {
    title: "نتایج",
    groups: [
      {
        summary: "ساعت حرکت",
        items: [
          // {
          //   type: "searchbox",
          //   label: "نام شرکت هواپیمایی",
          // },
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
        summary: "نوع بلیط",
        items: [
          { type: "checkbox", label: "سیسمتی" },
          { type: "checkbox", label: "چارتر" },
        ],
      },
      {
        summary: "کلاس پروازی",
        items: [
          { type: "checkbox", label: "اکونومی" },
          { type: "checkbox", label: "بیزینس" },
          { type: "checkbox", label: "پریمیوم اکونومی" },
        ],
      },
      {
        summary: "شرکت‌های هواپیمایی",
        items: [
          {
            type: "checkboxcom",
            label: "ماهان",
            // compic: <img src="mahan_logo.png" />,
            price: "از 4.750.230 ",
          },
          {
            type: "checkboxcom",
            label: "ایران ایرتور",
            // compic: <img src="iran_airtour_logo.png" />,
            price: "از 7.870.540 ",
          },
        ],
      },
      {
        summary: "پیشنهاد ویژه",
        items: [{ type: "checkbox", label: "پیشنهاد ویژه" }],
      },
      {
        summary: "موارد دیگر",
        items: [
          { type: "checkbox", label: "نمایش بلیط‌های تکراری" },
          { type: "checkbox", label: "نمایش بلیط‌های موجود" },
        ],
      },
    ],
  };

  const pricecalender = {
    items: [
      {
        type: "pricetime",
        values: [
          { label: "یکشنبه - 05/17", price: "2,144" },
          { label: "دوشنبه - 05/20", price: "3,725" },
          { label: "سه‌شنبه - 05/21", price: "4,600" },
          { label: "چهارشنبه - 05/22", price: "4,370" },
          { label: "پنج‌شنبه - 05/23", price: "3,900" },
          { label: "جمعه - 05/24", price: "3,450", value: "ظرفیت تکمیل" },
          { label: "شنبه - 05/17", price: "4,600" },
        ],
      },
      {
        type: "sorting",
        values: [
          { label: "پیشنهاد علی‌بابا" },
          { label: "زودترین" },
          { label: "درترین" },
          { label: "ارزان‌ترین" },
          { label: "گرانترین" },
        ],
      },
      {
        type: "exclamationmark",
        values: [{ label: " قیمت ها برای یک بزرگسال محاسبه شده است. " }],
      },
      // {
      //   type: "shortcutbox",
      //   values: [
      //     { label: "AJET" ,time: "--", timeone: "12", timeplus: "9", plus: "۱+توقف"},
      //     { label: "Caspian Airline" ,time: "--", timeone: "10", timeplus: "13", plus: "۱+توقف"},
      //     { label: "Flightline" ,time: "11", timeone: "13", timeplus: "4", plus: "۱+توقف"},
      //     { label: "Pegasus" ,time: "--", timeone: "15", timeplus: "13", plus: "۱+توقف"},
      //     { label: "Turkish Airlines" ,time: "11", timeone: "18", timeplus: "--", plus: "۱+توقف"},
      //     { label: "AJET" ,time: "19", timeone: "--", timeplus: "16", plus: "۱+توقف"},
      //   ],
      // },
    ],
  };

  return (
    <div className="flights">
      <div className="navebbrr"></div>
      <div className="container">
        <Sidebar data={sidebar} />
        <div className="left-section">
          <div className="topic">
            <Pricecalender data={pricecalender} />
          </div>
          {/* <Listcontainer /> */}
        </div>
      </div>
    </div>
  );
};
