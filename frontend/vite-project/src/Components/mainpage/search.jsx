import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import SearchBottom from "./searchBottom";
import { useTranslation } from "react-i18next";

//Styles
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
import InnerFlightIcon from "../../assets/icons/innerflight.svg?react";
import OuterFlightIcon from "../../assets/icons/foreignflight.svg?react";
import TrainIcon from "../../assets/icons/train.svg?react";
import BusIcon from "../../assets/icons/bus.svg?react";
import HotelIcon from "../../assets/icons/hotel.svg?react";
import TourIcon from "../../assets/icons/tour.svg?react";
import VillaIcon from "../../assets/icons/villa.svg?react";

export const Search = () => {
  const { t } = useTranslation();
  const params = useParams();
  const location = useLocation();

  let mode = params.mode;
  if (!mode && location.pathname.startsWith("/info/")) {
    const page = location.pathname.split("/")[2];
    if (page === "train") mode = "Train";
    if (page === "bus") mode = "Bus";
    if (page === "hotel") mode = "Hotel";
    if (page === "innerflight" || page === "foreignflight")
      mode = "DomesticFlight";
  }

  const imageMap = {
    DomesticFlight: DomesticFlight,
    InternationalFlight: ForeignFlight,
    Train: Train,
    Bus: Bus,
    Hotel: Hotel,
    tour: Tour,
    "Villas&Apartments": Villa,
    visa: Visa,
    TravelInsurance: TravelInsurance,
  };
  const underlinePositionX =
    {
      DomesticFlight: "-99px",
      InternationalFlight: "-245px",
      Train: "-390px",
      Bus: "-535px",
      tour: "-680px",
      Hotel: "-825px",
      "Villas&Apartments": "-970px",
    }[mode] || "-99px";

  const underlinePositionXCache = useRef(underlinePositionX);
  useEffect(() => {
    underlinePositionXCache.current = underlinePositionX;
  }, [underlinePositionX]);

  return (
    <div className="M-container">
      <div className="background-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageMap[mode] || DomesticFlight})`,
          }}
        ></div>
      </div>
      <div className="search-container">
        <div className="search-top">
          <ul className="search-top-items">
            <li>
              <InnerFlightIcon
                className="search-icon innerflight"
                style={{
                  fill:
                    mode === "DomesticFlight" || !mode ? "#0077DB" : "#555555",
                }}
              />
              <span
                style={{
                  color:
                    mode === "DomesticFlight" || !mode ? "#0077DB" : "#555555",
                }}
              >
                {t("search-items:domesticflight")}
              </span>
            </li>
            <li>
              <OuterFlightIcon
                className="search-icon outerflight"
                style={{
                  fill: mode === "InternationalFlight" ? "#0077DB" : "#555555",
                }}
              />
              <span
                style={{
                  color: mode === "InternationalFlight" ? "#0077DB" : "#555555",
                }}
              >
                {t("search-items:internationalflight")}
              </span>
            </li>
            <li>
              <TrainIcon
                className="search-icon train"
                style={{ fill: mode === "Train" ? "#0077DB" : "#555555" }}
              />
              <span style={{ color: mode === "Train" ? "#0077DB" : "#555555" }}>
                {t("search-items:train")}
              </span>
            </li>
            <li>
              <BusIcon
                className="search-icon bus"
                style={{ fill: mode === "Bus" ? "#0077DB" : "#555555" }}
              />
              <span style={{ color: mode === "Bus" ? "#0077DB" : "#555555" }}>
                {t("search-items:bus")}
              </span>
            </li>
            <li>
              <TourIcon
                className="search-icon tour"
                style={{ fill: mode === "tour" ? "#0077DB" : "#555555" }}
              />
              <span style={{ color: mode === "tour" ? "#0077DB" : "#555555" }}>
                {t("search-items:tour")}
              </span>
            </li>
            <li>
              <HotelIcon
                className="search-icon hotel"
                style={{ fill: mode === "Hotel" ? "#0077DB" : "#555555" }}
              />
              <span style={{ color: mode === "Hotel" ? "#0077DB" : "#555555" }}>
                {t("search-items:hotel")}
              </span>
            </li>
            <li>
              <VillaIcon
                className="search-icon villa"
                style={{
                  fill: mode === "Villas&Apartments" ? "#0077DB" : "#555555",
                }}
              />
              <span
                style={{
                  color: mode === "Villas&Apartments" ? "#0077DB" : "#555555",
                }}
              >
                {t("search-items:villa")}
              </span>
            </li>
          </ul>
          <motion.span
            initial={{ x: underlinePositionXCache }}
            animate={{ x: underlinePositionX }}
            transition={{
              type: "spring",
              stiffness: 1000,
              damping: 100,
            }}
            className="dynamic-underline"
            style={{ transform: `translatex(${underlinePositionX})` }}
          ></motion.span>
        </div>
        <SearchBottom params={mode} />
      </div>
    </div>
  );
};
