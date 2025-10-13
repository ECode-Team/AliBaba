import SearchOptions from "./searchOptions";
import InputGroup from "../input/InputGroup";
import { useParams } from "react-router-dom";
import "../../styles/mainpage/searchBottom.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const SearchOptionsGroup = () => {
    const { t } = useTranslation();
    const { mode } = useParams();
    switch (mode) {
        case 'DomesticFlight':
        default:
            return (
                <>
                    <SearchOptions label={t("search-options:one_way")} marginRight={"22px"} />
                    <SearchOptions label={t("search-options:country")} />
                </>
            )
        case 'InternationalFlight':
            return (
                <>
                    <SearchOptions label={t("search-options:one_way")} marginRight={"22px"} />
                    <SearchOptions label={t("search-options:economy")} />
                </>
            )
        case 'Train':
            return (
                <>
                    <SearchOptions label={t("search-options:one_way")} marginRight={"22px"} />
                    <SearchOptions label={t("search-options:do_not_want_beds")} />
                    <SearchOptions label={t("search-options:regular_passengers")} />
                    <SearchOptions label={t("search-options:do_not_want_car_transport")} />
                </>
            )
        case 'tour':
            return (
                <>
                    <SearchOptions label={t("search-options:hotel_ticket_tour")} marginRight={"22px"} />
                </>
            )
    }
}

const SearchInputGroup = () => {
    const { t } = useTranslation();
    const { mode } = useParams();
    
    // State for dropdown values
    const [originValue, setOriginValue] = useState("");
    const [destinationValue, setDestinationValue] = useState("");
    const [departureDateValue, setDepartureDateValue] = useState("");
    const [returnDateValue, setReturnDateValue] = useState("");
    const [passengerValue, setPassengerValue] = useState("");
    const [originBusValue, setOriginBusValue] = useState("");
    const [destinationBusValue, setDestinationBusValue] = useState("");
    const [hotelDestinationValue, setHotelDestinationValue] = useState("");
    
    // Sample data for dropdowns
    const cities = [
        "تهران",
        "مشهد",
        "اصفهان",
        "شیراز",
        "تبریز",
        "اهواز",
        "کیش",
        "قم",
        "رشت",
        "یزد",
        "کرمان",
        "ارومیه"
    ];

    switch (mode) {
        case 'DomesticFlight':
        case 'InternationalFlight':
        case 'Train':
        case 'tour':
        default:
            return (
                <>
                    <div className="input-group destination">
                        <InputGroup
                            label={t("search-inputs:origin")}
                            isDropdown={true} 
                            options={cities}
                            value={originValue}
                            onChange={(val) => setOriginValue(val)}
                            borderLeft="0" 
                            width={"230px"} />
                        <InputGroup
                            label={t("search-inputs:destination")}
                            isDropdown={true} 
                            options={cities}
                            value={destinationValue}
                            onChange={(val) => setDestinationValue(val)}
                            borderRight="0" 
                            width={"230px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup
                            label={t("search-inputs:departure_date")}
                            isDropdown={true} 
                            options={cities}
                            value={departureDateValue}
                            onChange={(val) => setDepartureDateValue(val)}
                            borderLeft="0" 
                            width={"140px"} />
                        <InputGroup
                            label={t("search-inputs:return_date")}
                            isDropdown={true} 
                            options={cities}
                            value={returnDateValue}
                            onChange={(val) => setReturnDateValue(val)}
                            borderRight="0" 
                            width={"140px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup
                            label={t("search-inputs:passengers")}
                            isDropdown={true} 
                            options={cities}
                            value={passengerValue}
                            onChange={(val) => setPassengerValue(val)}
                            width={"180px"} />
                    </div>
                </>
            )
        case 'Bus':
            return (
                <>
                    <div className="input-group destination">
                        <InputGroup
                            label={t("search-inputs:origin_bus")}
                            isDropdown={true} 
                            options={cities}
                            value={originBusValue}
                            onChange={(val) => setOriginBusValue(val)}
                            borderLeft="0" 
                            width={"280px"} />
                        <InputGroup
                            label={t("search-inputs:destination_bus")}
                            isDropdown={true} 
                            options={cities}
                            value={destinationBusValue}
                            onChange={(val) => setDestinationBusValue(val)}
                            borderRight="0" 
                            width={"280px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup
                            label={t("search-inputs:departure_date")}
                            isDropdown={true} 
                            options={cities}
                            value={departureDateValue}
                            onChange={(val) => setDepartureDateValue(val)}
                            width={"370px"} />
                    </div>
                </>
            )
        case 'Hotel':
        case 'Villas&Apartments':
            return (
                <>
                    <div className="input-group destination">
                        <InputGroup
                            label={mode === 'Hotel' ? t("search-inputs:destination_hotel") : t("search-inputs:destination_villa")}
                            isDropdown={true}
                            options={cities}
                            value={hotelDestinationValue}
                            onChange={(val) => setHotelDestinationValue(val)}
                            width={"360px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup
                            label={t("search-inputs:departure_date")}
                            isDropdown={true}
                            options={cities}
                            value={departureDateValue}
                            onChange={(val) => setDepartureDateValue(val)}
                            borderLeft="0"
                            width={"170px"} />
                        <InputGroup
                            label={t("search-inputs:return_date")}
                            isDropdown={true}
                            options={cities}
                            value={returnDateValue}
                            onChange={(val) => setReturnDateValue(val)}
                            borderRight="0"
                            width={"170px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup
                            label={t("search-inputs:passengers")}
                            isDropdown={true} 
                            options={cities}
                            value={passengerValue}
                            onChange={(val) => setPassengerValue(val)}
                            width={"220px"} />
                    </div>
                </>
            )
    }
}

const SearchBottom = () => {
    const { t } = useTranslation();
    return (
        <div className="M-search-bottom">
            <div className="search-options-container">
                <SearchOptionsGroup />
            </div>
            <div className="input-group-container" >
                <SearchInputGroup />
                <button className="search-button">{t("search-inputs:search")}</button>
            </div>
        </div>
    )
}

export default SearchBottom;