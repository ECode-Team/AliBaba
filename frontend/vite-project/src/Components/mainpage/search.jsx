import { useParams } from "react-router-dom";
import "../../styles/mainpage/search.scss";
//Backgrounds
import DomesticFlight from "../../assets/images/domesticflight-light.webp";
import ForeignFlight from "../../assets/images/foreignflight-light.webp";
import Train from "../../assets/images/train-light.webp";
import Bus from "../../assets/images/bus-light.webp";
import Hotel from "../../assets/images/hotel-light.webp";
import Tour from "../../assets/images/tour-light.webp";
import Villa from "../../assets/images/villa-light.webp";
import Visa from "../../assets/images/visa-light.webp";
import TravelInsurance from "../../assets/images/insurance-light.webp";
//Icons
import innerFlight from "../../assets/icons/innerflight.svg";
import outerFlight from "../../assets/icons/foreignflight.svg";
import trainIcon from "../../assets/icons/train.svg";
import busIcon from "../../assets/icons/bus.svg";
import hotelIcon from "../../assets/icons/hotel.svg";
import tourIcon from "../../assets/icons/tour.svg";
import villaIcon from "../../assets/icons/villa.svg";

export const Search = () => {
    const { mode } = useParams();
    const imageMap =
    {
        "DomesticFlight": DomesticFlight,
        "InternationalFlight": ForeignFlight,
        "Train": Train,
        "Bus": Bus,
        "Hotel": Hotel,
        "tour": Tour,
        "Villas&Apartments": Villa,
        "visa": Visa,
        "TravelInsurance": TravelInsurance
    }

    return (
        <div className="container">
            <div className="background-container">
                <div className="background-image" style={{ backgroundImage: `url(${imageMap[mode] || DomesticFlight})` }}></div>
            </div>
            <div className="search-container">
                <div className="search-top">
                    <ul className="search-top-items">
                        <li><img src={innerFlight} /><span>Domestic flight</span></li>
                        <li><img src={outerFlight} /><span>Foreign flight</span></li>
                        <li><img src={trainIcon} /><span>train</span></li>
                        <li><img src={busIcon} /><span>bus</span></li>
                        <li><img src={hotelIcon} /><span>hotel</span></li>
                        <li><img src={tourIcon} /><span>tour</span></li>
                        <li><img src={villaIcon} /><span>Villa & residence</span></li>
                    </ul>
                </div>
                <div className="search-bottom"></div>
            </div>
        </div>
    )
}