import "../../../styles/bookingpage/innerflight/pricecalendar.scss";
import Left from "../../../assets/icons/left.svg?react";
import Right from "../../../assets/icons/right.svg?react";
import Mark from "../../../assets/icons/exclamationmark.svg?react";
import Compairson from "../../../assets/icons/compairson.svg?react";

export const Pricecalender = ({ data }) => {
  return (
    <div className="pricecalendar">
      {data.items.map((item, index) => {
        switch (item.type) {
          // price time TYPE 1
          case "pricetime":
            return (
              <section
                key={`pricetime-${index}`}
                className="pricetimecontainer"
              >
                <div className="parent">
                  <button className="pricetime right">
                    <Right />
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

          // sorting TYPE 2
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

          // exclamation mark TYPE 3
          case "exclamationmark":
            return (
              <div className="mark" key={`exclamationmark-${index}`}>
                {item.values.map((val, i) => (
                  <div key={i} className="mark-item">
                    <Mark />
                    <span className="">{val.label}</span>
                  </div>
                ))}
              </div>
            );

          // shortcut TYPE 4
          case "shortcutbox":
            return (
              <div className="shortcut" key={`shortcutbox-${index}`}>
                <div className="price-compairson">
                  {/* Comparison */}
                  <div className="comparison">
                    <Compairson />
                    <span> مقایسه قیمت و توقف‌ها </span>
                    <div className="frontmark">
                      <Mark />
                    </div>
                  </div>

                  <div className="change-compairson">
                    <div className="cast-price">
                      <Mark />
                      <span>قیمت بر اساس میلیون تومان است</span>
                    </div>
                    <div className="change-com">
                      <button>
                        <Right />
                      </button>
                      <button>
                        <Left />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price-com-box */}
                <div className="price-com-container">
                  {item.values.map((val, i) => (
                    <div className="cover-box">
                      <div className="price-com-box">
                        <div className="name-berand">
                          <div className="pic-com"></div>
                          <div className="nam-com">{val.label}</div>
                        </div>

                        <hr />

                        <div className="stop-stright-plusstop">
                          <div className="stp-contaner">
                            <div className="time-name">
                              مستقیم
                            </div>
                            <div className="time-zon">{val.time}</div>
                          </div>
                          <div className="stp-contaner">
                            <div className="time-name">
                              یک توقف
                            </div>
                            <div className="time-zon">{val.timeone}</div>
                          </div>
                          <div className="stp-contaner">
                            <div className="time-name">{val.plus}</div>
                            <div className="time-zon">{val.timeplus}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
