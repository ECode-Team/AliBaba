import "../../styles/mainpage/dropdown.scss"
import { useNavigate } from "react-router-dom";

const Dropdown = (props) => {
    const navigate = useNavigate();
    const nonDynamicItems = ["Account Information", "Notifications", "Request Support", "Log Out of Account", "AlibabaMagazine", 'en', 'de', 'fr', 'es', 'zh', 'fa', 'ar']
    if (props.open) {
        return (
            <div className="dropdown-container">
                <ul className="dropdown-menu">
                    {props.items.map((element, index) => {
                        return <li key={element} onClick={() => {
                            if (props.isLangDropdown) props.select(element);
                            if (nonDynamicItems.includes(props.path[index])) return;
                            navigate(props.path[index]);
                        }}>{element}</li>
                    })}
                </ul>
            </div>
        );
    }
    else {
        return null;
    }
}

export default Dropdown;