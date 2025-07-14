import { useEffect, useState } from "react";
import { FetchAPI } from "../../../Components/fetch";
import "../../../styles/bookingpage/innerflight/list.scss";
import Goflight from "../../../assets/icons/goflight.svg?react";

export const  Listcontainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await FetchAPI();
        setData(result || []);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="down">
      {data.map((data, index) => (
        <div key={index} className="list-container">
          <div className="specific">
            <div className="upcontainer">
              <div className="piccontainer">
                <img className="piccompany">{}</img>
                <span className="namecompany">name{data.company_name}</span>
              </div>
              <div className="aboutcontainer">
                <div className="class-type">
                  <span>{data.transfer_type}</span>
                  <span>{data.passengers_type}</span>
                </div>
                <div className="place-time">
                  <span className="place">
                    {data.depart}
                    <span className="time">{data.depart_time}</span>
                  </span>
                  <Goflight style={{ fill: "gray" }} />
                  <span className="line"></span>
                  <span className="place">
                    {data.arrive}
                    <span className="time">{data.arrive_time}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="downcontainer">
              <div className="rules">
                <span>اطلاعات پرواز</span>
                <span>قوانین استرداد</span>
              </div>
            </div>
          </div>
          <div className="buy">
            <div className="price-container">
              <span className="priceprice">{data.price}</span>
              <span className="unit">تومان</span>
            </div>
            <span className="rate">نرخ رسمی ایرلاین</span>
            <button className="select-flight">انتخاب پرواز</button>
          </div>
        </div>
      ))}
    </div>
  );
};
