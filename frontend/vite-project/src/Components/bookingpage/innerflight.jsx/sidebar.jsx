import ReactSlider from "react-slider";
import "../../../styles/bookingpage/innerflight/sidebar.scss";
import "../../../styles/bookingpage/innerflight/slider.scss";
import Up from "../../../assets/icons/up.svg?react";
import Search from "../../../assets/icons/search.svg?react";

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

          {/*checkbox TYPE 1 & checkboxcom TYPE 2 in ul*/}
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
                            <span>{item.price}</span> 
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

          {/* range-slider TYPE 3 &  searchbox TYPE 4 not in ul*/}
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

              // TYPE 4
              case "searchbox":
                return (
                  <div className="searchh-container">
                    <div className="border-box">
                      <div className="search-icon">
                        <Search />
                      </div>
                      <input
                        type="search"
                        placeholder= {item.label}
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
