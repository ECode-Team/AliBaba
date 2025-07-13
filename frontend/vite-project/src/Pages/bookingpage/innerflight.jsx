import "../../styles/bookingpage/innerflight/inflight.scss";
import { Downcontainer } from "../../Components/bookingpage/innerflight.jsx/list";



export const Innerflight = () => {

  return (
    <div className="flights">
      <div className="container">
        <div className="right-section"></div>
        <div className="left-section">
          <div className="up">
            <div className="topic"></div>
          </div>
            <Downcontainer />
        </div>
      </div>
    </div>
  );
};
