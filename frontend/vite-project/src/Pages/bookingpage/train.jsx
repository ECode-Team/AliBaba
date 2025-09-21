import "../../styles/bookingpage/innerflight/inflight.scss";
import { Listcontainer } from "../../Components/bookingpage/innerflight.jsx/list";
import { Sidebar } from "../../Components/bookingpage/innerflight.jsx/sidebar";
import { useState } from "react";
import { Pricecalender } from "../../Components/bookingpage/innerflight.jsx/pricecalender";

export const Train = () => {
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
        summary: "نوع قطار",
        items: [
          { type: "checkbox", label: "کوپه ۶ نفره", price: "از 650.000 تومان" },
          { type: "checkbox", label: "کوپه ۴ نفره", price: "از 1.990.000 تومان" },
        ],
      },
      {
        summary: "شرکت‌های ریلی",
        items: [
          {
            type: "checkboxcom",
            label: "بن ریل",
            // compic: <img src="mahan_logo.png" />,
          },
          {
            type: "checkboxcom",
            label: "جوپار",
            // compic: <img src="iran_airtour_logo.png" />,
          },
          {
            type: "checkboxcom",
            label: "ریل ترابر سبا",
            // compic: <img src="mahan_logo.png" />,
          },
          {
            type: "checkboxcom",
            label: "مهتاب سیر جم",
            // compic: <img src="iran_airtour_logo.png" />,
          },
          {
            type: "checkboxcom",
            label: "نورالرضا",
            // compic: <img src="mahan_logo.png" />,
          },
        ],
      },
      {
        summary: "موارد دیگر",
        items: [{ type: "checkbox", label: "نمایش قطارهای موجود" }],
      },
    ],
  };

  const pricecalender = {
    items: [
      {
        type: "pricetime",
        values: [
          { label: "پنج‌شنبه - 05/23" },
          { label: "یکشنبه - 05/17" },
          { label: "دوشنبه - 05/20" },
          { label: "سه‌شنبه - 05/21" },
          { label: "شنبه - 05/17" },
          { label: "چهارشنبه - 05/22" },
          { label: "جمعه - 05/24" },
        ],
      },
      //   {
      //     type: "pricetimebox",
      //     values : [
      //       {label: "data"}
      //     ]
      //   },
      //   {
      //     type: "shortcutbox",
      //     values: [
      //       { label: "AJET" ,time: "--", timeone: "12", timeplus: "9", plus: "۱+توقف"},
      //       { label: "Caspian Airline" ,time: "--", timeone: "10", timeplus: "13", plus: "۱+توقف"},
      //       { label: "Flightline" ,time: "11", timeone: "13", timeplus: "4", plus: "۱+توقف"},
      //       { label: "Pegasus" ,time: "--", timeone: "15", timeplus: "13", plus: "۱+توقف"},
      //       { label: "Turkish Airlines" ,time: "11", timeone: "18", timeplus: "--", plus: "۱+توقف"},
      //       { label: "AJET" ,time: "19", timeone: "--", timeplus: "16", plus: "۱+توقف"},
      //     ],
      //   },
      {
        type: "sorting",
        values: [
          { label: "پیشنهاد علی‌بابا" },
          { label: "زودترین زمان حرکت" },
          { label: "کمترین قیمت" },
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
