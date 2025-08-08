import "../../../styles/bookingpage/innerflight/pricecalendar.scss";
import Left from "../../../assets/icons/left.svg?react";
import Rigth from "../../../assets/icons/right.svg?react";
import Mark from "../../../assets/icons/exclamationmark.svg?react";

export const Pricecalender = ({ data }) => {
  return (
    <div className="pricecalendar">
      {data.items.map((item, index) => {
        switch (item.type) {
          // TYPE 1
          case "pricetime":
            return (
              <section
                key={`pricetime-${index}`}
                className="pricetimecontainer"
              >
                <div className="parent">
                  <button className="pricetime right">
                    <Rigth />
                  </button>
                  <div className="timemove">
                    {item.values?.map((val, i) => (
                      <button key={i} className="valuesbtn">
                        <div className="vallabel">{val.label}</div>
                        <div className="valprice">{val.price}</div>
                        {val.value && (
                          <div className="valinfo">{val.labels}</div>
                        )}
                      </button>
                    ))}
                  </div>

                  <button className="pricetime left">
                    <Left />
                  </button>
                </div>
              </section>
            );

          // TYPE 2
          case "sorting":
            return (
              <div className="sorting" key={`sorting-${index}`}>
                <b className="">مرتب‌سازی:</b>
                <ul className="sort-ul">
                  {item.values.map((val, i) => (
                    <li key={i} className="sort-btn">
                      <a>{val.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );

          // TYPE 3
          case "exclamationmark":
            return (
              <div className="mark" key={`exclamationmark-${index}`}>
                {item.values.map((val, i) => (
                  <div key={i} className="mark-item">
                    <span className="">
                      <Mark />
                    </span>
                    {val.label}
                  </div>
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
