import ReactSlider from "react-slider";
import "../../../styles/bookingpage/innerflight/sidebar.scss";
import "./slider.css";
import Up from "../../../assets/icons/up.svg?react";

export const Sidebar = ({ data }) => {
  return (
    <div className="right-section">
      <div className="title">
        <p>
          <b></b>
          <span>{data.title}</span>
        </p>
      </div>

      <hr />

      {data.groups.map((group, index) => (
        <div key={index} className="sidebar">
          <summary className="summary">
            <span>{group.summary}</span>
            <button className="dropdownbtn">
              <Up />
            </button>
          </summary>

          {/*checkbox TYPE1 & checkboxcom TYPE2*/}
          <ul>
            {group.items.map((item, i) => {
              switch (item.type) {
                // 1
                case "checkbox":
                  return (
                    <li key={i}>
                      <a>
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={item.onChange}
                        />
                        <h4>{item.label}</h4>
                      </a>
                    </li>
                  );
                // 2
                case "checkboxcom":
                  return (
                    <li key={i}>
                      <div className="checkboxcontainer">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={item.onChange}
                          />
                        </div>
                        <div className="comcontainer">
                          <div className="parentcomphoto">
                            <img className="compho" />
                          </div>
                          <h4>{item.label}</h4>
                          <small>
                            <span>از</span> {item.price}
                          </small>
                        </div>
                      </div>
                    </li>
                  );

                default:
                  return null;
              }
            })}
          </ul>

          {/* range-slider TYPE3*/}
          {group.items.map((item, b) => {
            switch (item.type) {
              // 3
              case "range-slider":
                return (
                  <div key={b} className="slidercontainer">
                    <ReactSlider
                      className="custom-slider"
                      thumbClassName="custom-thumb"
                      trackClassName="custom-track"
                      min={item.min}
                      max={item.max}
                      value={[item.minValue, item.maxValue]}
                      onChange={item.onChange}
                      pearling
                      minDistance={10}
                    />
                    <div className="time-range-labels">
                      <span>{item.maxValue}</span>
                      <span>{item.minValue}</span>
                    </div>
                  </div>
                );

              default:
                return null;
            }
          })}

          <hr />
        </div>
      ))}
    </div>
  );
};
