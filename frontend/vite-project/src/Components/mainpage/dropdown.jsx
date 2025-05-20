import "../../styles/mainpage/dropdown.scss"

const Dropdown = (props) => {
    return (
        <div className="dropdown-container">
            <ul className="dropdown-menu">
                {props.items.map(element => {
                    return <li key={element}><button className="dropdown-button">{element}</button></li>
                })}
            </ul>
        </div>
    );
}

export default Dropdown;