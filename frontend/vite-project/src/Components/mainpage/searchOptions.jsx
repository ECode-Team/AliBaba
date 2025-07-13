import "../../styles/mainpage/searchOptions.scss";
import { ChevronDown } from "lucide-react";

const SearchOptions = (props) => {
    return (
        <div className="search-options" style={{ marginRight: props.marginRight }}>
            <div className="option-button">{props.label}<ChevronDown /></div>
        </div>
    );
};

export default SearchOptions;