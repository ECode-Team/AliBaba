import SearchOptions from "./searchOptions";
import InputGroup from "../input/InputGroup";
import { useParams } from "react-router-dom";
import "../../styles/mainpage/searchBottom.scss";
import { useTranslation } from "react-i18next";

const SearchOptionsGroup = () => {
    const { t } = useTranslation();
    const { mode } = useParams();
    switch (mode) {
        case 'DomesticFlight':
        default:
            return (
                <>
                    <SearchOptions label={"یک طرفه"} marginRight={"22px"} />
                    <SearchOptions label={"کشور"} />
                </>
            )
        case 'InternationalFlight':
            return (
                <>
                    <SearchOptions label={"یک طرفه"} marginRight={"22px"} />
                    <SearchOptions label={"اکونومی"} />
                </>
            )
        case 'Train':
            return (
                <>
                    <SearchOptions label={"یک طرفه"} marginRight={"22px"} />
                    <SearchOptions label={"دربست نمیخواهم"} />
                    <SearchOptions label={"مسافرین عادی"} />
                    <SearchOptions label={"حمل خودرو نمیخواهم"} />
                </>
            )
        case 'tour':
            return (
                <>
                    <SearchOptions label={"تور هتل + بلیط"} marginRight={"22px"} />
                </>
            )
    }
}

const SearchInputGroup = () => {
    const { t } = useTranslation();
    const { mode } = useParams();
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
                            isDropdown={true} options={["تهران", "مشهد", "اصفهان"]}
                            borderLeft="0" width={"230px"} />
                        <InputGroup
                            label={t("search-inputs:destination")}
                            isDropdown={true} options={["شیراز", "تبریز", "اهواز"]}
                            borderRight="0" width={"230px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup
                            label={t("search-inputs:departure_date")}
                            isDropdown={true} options={["تهران", "مشهد", "اصفهان"]}
                            borderLeft="0" width={"140px"} />
                        <InputGroup
                            label={t("search-inputs:return_date")}
                            isDropdown={true} options={["شیراز", "تبریز", "اهواز"]}
                            borderRight="0" width={"140px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup
                            label={t("search-inputs:passengers")}
                            isDropdown={true} options={["تهران", "مشهد", "اصفهان"]}
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
                            isDropdown={true} options={["تهران", "مشهد", "اصفهان"]}
                            borderLeft="0" width={"280px"} />
                        <InputGroup
                            label={t("search-inputs:destination_bus")}
                            isDropdown={true} options={["شیراز", "تبریز", "اهواز"]}
                            borderRight="0" width={"280px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup
                            label={t("search-inputs:departure_date")}
                            isDropdown={true} options={["تهران", "مشهد", "اصفهان"]}
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
                            options={["تهران", "مشهد", "اصفهان"]}
                            width={"360px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup
                            label={t("search-inputs:departure_date")}
                            isDropdown={true}
                            options={["تهران", "مشهد", "اصفهان"]}
                            borderLeft="0"
                            width={"170px"} />
                        <InputGroup
                            label={t("search-inputs:return_date")}
                            isDropdown={true}
                            options={["شیراز", "تبریز", "اهواز"]}
                            borderRight="0"
                            width={"170px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup
                            label={t("search-inputs:passengers")}
                            isDropdown={true} options={["تهران", "مشهد", "اصفهان"]}
                            width={"220px"} />
                    </div>
                </>
            )
    }
}

const SearchBottom = () => {
    const { t } = useTranslation();
    return (
        <div className="search-bottom">
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