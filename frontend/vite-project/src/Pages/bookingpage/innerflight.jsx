import "../../styles/bookingpage/innerflight/inflight.scss";
import { Listcontainer } from "../../Components/bookingpage/innerflight.jsx/list";
import { Sidebar } from "../../Components/bookingpage/innerflight.jsx/sidebar";
import { useState } from "react";


export const Innerflight = () => {  
  const [timemove, setTimemove] = useState([1, 24]);

  const innerflightFilters = {
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
      summary: "نوع بلیط",
      items: [
        { type: "checkbox", label: "سیسمتی" },
      ],
    },
    {
      summary: "کلاس پروازی",
      items: [
        { type: "checkbox", label: "اکونومی" },
        { type: "checkbox", label: "بیزینس" },
      ],
    },
    {
      summary: "شرکت‌های هواپیمایی",
      items: [
        {
          type: "checkboxcom",
          label: "ماهان",
          compic: <img src="mahan_logo.png" />,
          price: 100,
        },
        {
          type: "checkboxcom",
          label: "ایران ایرتور",
          compic: <img src="iran_airtour_logo.png" />,
          price: 120,
        },
      ],
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


return (
    <div className="flights">
      <div className="navebbrr"></div>
      <div className="container">
        <Sidebar data={innerflightFilters} />
        <div className="left-section">
          <div className="up">
            <div className="topic"></div>
          </div>
            <Listcontainer />
        </div>
      </div>
    </div>
  );
};
