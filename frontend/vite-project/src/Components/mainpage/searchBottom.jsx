import SearchOptions from "./searchOptions";
import InputGroup from "../input/InputGroup";
import { useParams } from "react-router-dom";

const searchOptionsGroup = () => {
    const { mode } = useParams();
    switch (mode) {
        case 'DomesticFlight':
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

const SearchBottom = () => {
    return (
        <div className="search-bottom">
            <div className="search-options-container">
                {searchOptionsGroup()}
            </div>
            <div className="input-group-container" >
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
                <button className="search-button">جستجو</button>
            </div>
        </div>
    )
}

export default SearchBottom;