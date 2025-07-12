import SearchOptions from "./searchOptions";
import InputGroup from "../input/InputGroup";
import { useParams } from "react-router-dom";
import "../../styles/mainpage/searchBottom.scss";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

const SearchOptionsGroup = () => {
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
                        <InputGroup label={"مبدا(شهر)"} isDropdown={true} options={["تهران", "مشهد", "اصفهان"]} borderLeft="0" width={"230px"} />
                        <InputGroup label={"مقصد(شهر)"} isDropdown={true} options={["شیراز", "تبریز", "اهواز"]} borderRight="0" width={"230px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup label={"تاریخ رفت"} isDropdown={true} options={["تهران", "مشهد", "اصفهان"]} borderLeft="0" width={"140px"} />
                        <InputGroup label={"تاریخ برگشت"} isDropdown={true} options={["شیراز", "تبریز", "اهواز"]} borderRight="0" width={"140px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup label={"مسافران"} isDropdown={true} options={["تهران", "مشهد", "اصفهان"]} width={"180px"} />
                    </div>
                </>
            )
        case 'Bus':
            return (
                <>
                    <div className="input-group destination">
                        <InputGroup label={"مبدا(شهر,پایانه)"} isDropdown={true} options={["تهران", "مشهد", "اصفهان"]} borderLeft="0" width={"280px"} />
                        <InputGroup label={"مقصد(شهر,پایانه)"} isDropdown={true} options={["شیراز", "تبریز", "اهواز"]} borderRight="0" width={"280px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup label={"تاریخ حرکت"} isDropdown={true} options={["تهران", "مشهد", "اصفهان"]} width={"370px"} />
                    </div>
                </>
            )
        case 'Hotel':
        case 'Villas&Apartments':
            return (
                <>
                    <div className="input-group destination">
                        <InputGroup
                            label={mode === 'Hotel' ? "مقصد یا هتل(داخلی و خارجی)" : "مقصد یا نوع اقامتگاه"}
                            isDropdown={true}
                            options={["تهران", "مشهد", "اصفهان"]}
                            width={"360px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup label={"تاریخ رفت"} isDropdown={true} options={["تهران", "مشهد", "اصفهان"]} borderLeft="0" width={"170px"} />
                        <InputGroup label={"تاریخ برگشت"} isDropdown={true} options={["شیراز", "تبریز", "اهواز"]} borderRight="0" width={"170px"} />
                    </div>
                    <div className="input-group date">
                        <InputGroup label={"مسافران"} isDropdown={true} options={["تهران", "مشهد", "اصفهان"]} width={"220px"} />
                    </div>
                </>
            )
    }
}

const SearchBottom = () => {
    return (
        <div className="search-bottom">
            <div className="search-options-container">
                <SearchOptionsGroup />
            </div>
            <div className="input-group-container" >
                <SearchInputGroup />
                <button className="search-button">جستجو</button>
            </div>
        </div>
    )
}

export default SearchBottom;