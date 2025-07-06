import { useParams } from "react-router-dom";
import "../../styles/mainpage/background.scss";
import DomesticFlight from "../../assets/images/domesticflight-light.webp";
import ForeignFlight from "../../assets/images/foreignflight-light.webp";
import Train from "../../assets/images/train-light.webp";
import Bus from "../../assets/images/bus-light.webp";
import Hotel from "../../assets/images/hotel-light.webp";
import Tour from "../../assets/images/tour-light.webp";
import Villa from "../../assets/images/villa-light.webp";
import Visa from "../../assets/images/visa-light.webp";
import TravelInsurance from "../../assets/images/insurance-light.webp";

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
        <div className="background-container">
            <div className="background-image" style={{ backgroundImage: `url(${imageMap[mode] || DomesticFlight})` }}>
            </div>
        </div>
    )
}