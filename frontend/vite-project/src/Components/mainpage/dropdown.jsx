import "../../styles/mainpage/dropdown.scss"

const Dropdown = (props) => {
    
    
    if (props.open) {
        return (
            <div className="dropdown-container">
                <ul className="dropdown-menu">
                    {props.items.map(element => {
                        return <li key={element} onClick={() => props.select(element)}>{element}</li>
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