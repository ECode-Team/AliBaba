import { useEffect, useState } from "react";
import { FetchAPI } from "../../Components/fetch";
import "../../styles/bookingpage/flight.scss";

export const Innerflight = () => {
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
    <div className="flights">
      <div className="container">
        <div className="right-section"></div>
        <div className="left-section">
          <div className="up">
            <div className="topic"></div>
          </div>
          {data.map((data, index) => (
            <div key={index} className="down">
              <div className="specific">
                <div className="class-type">
                  {data.transfer_type} | {data.passengers_type}
                </div>
                <img></img>
                <div className="">
                  {data.depart} <span className="">←</span> {data.arrive}
                </div>
                <div className="">
                  {data.depart_time} - {data.arrive_time}
                </div>
                <div className="">{}</div>
              </div>
              <div className="buy">
                <button className="slect-filght">انتخاب پرواز</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
