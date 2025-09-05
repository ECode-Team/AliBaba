import ReactSlider from "react-slider";
import "../../../styles/bookingpage/innerflight/sidebar.scss";
import "../../../styles/bookingpage/innerflight/slider.scss";
import Up from "../../../assets/icons/up.svg?react";
import Search from "../../../assets/icons/search.svg?react";

export const Sidebar = ({ data }) => {
  return (
    <div className="right-section">
      {/* TITLE */}
      <div className="title">
        <p>
          <b></b>
          <span>{data.title}</span>
        </p>
      </div>

      <hr />

      {data.groups.map((group, gIndex) => (
        <div key={gIndex} className="sidebar">
          {/* SUMEERY NAME*/}
          <summary className="summary">
            <span>{group.summary}</span>
            <button className="dropdownbtn">
              <Up />
            </button>
          </summary>

          {/* USE MAP TO ALL TYPE */}
          {group.items.map((item, i) => {
            switch (item.type) {
              //  TYPE1 CHECKBOX
              case "checkbox":
                return (
                  <ul key={i}>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={item.onChange}
                        />
                        <h4>{item.label}</h4>
                        <small>
                          <span>{item.price}</span>
                        </small>
                      </label>
                    </li>
                  </ul>
                );

              //  TYPE2 CHECKBOX COMPANY
              case "checkboxcom":
                return (
                  <ul key={i}>
                    <li>
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
                            {item.compic ? (
                              item.compic
                            ) : (
                              <img className="compho" />
                            )}
                            <h4>{item.label}</h4>
                          </div>
                          <small>
                            <span>{item.price}</span>
                          </small>
                        </div>
                      </div>
                    </li>
                  </ul>
                );

              // TYPE3 RANGE SLIDER
              case "range-slider":
                return (
                  <div key={i} className="slidercontainer">
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
                      <span>{item.minValue}</span>
                      <span>{item.maxValue}</span>
                    </div>
                  </div>
                );

              // TYPE4 SEARCH BOX
              case "searchbox":
                return (
                  <div key={i} className="searchh-container">
                    <div className="border-box">
                      <div className="search-icon">
                        <Search />
                      </div>
                      <input
                        type="search"
                        placeholder={item.label}
                        className="searchh"
                      />
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
