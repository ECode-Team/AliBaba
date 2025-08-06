import ReactSlider from "react-slider";
import "../../../styles/bookingpage/innerflight/sidebar.scss";
import "./slider.css";
import Up from "../../../assets/icons/up.svg?react"


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
          <button className="dropdownbtn"><Up /></button>
          </summary>

          <ul>
            {group.items.map((item, i) => (
              <li key={i}>
                
                {item.type === "checkbox" && (
                  <a >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={item.onChange}
                    />
                    <h4>{item.label}</h4>
                  </a>
                )}

                {item.type === "checkboxcom" && (
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
                )}
              </li>
            ))}
          </ul>

          {group.items
            .filter((item) => item.type === "range-slider")
            .map((item, b) => (
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
            ))}
          <hr />
        </div>
      ))}
    </div>
  );
};
