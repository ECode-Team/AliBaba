import "../../styles/mainpage/dropdown.scss"

const Dropdown = (props) => {
    if (props.open) {
        return (
            <div className="dropdown-container" style={{ marginTop: props.marginTop, marginRight: props.marginLeft }}>
                <ul className="dropdown-menu">
                    {props.items.map(element => {
                        return <li key={element}>{element}</li>
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