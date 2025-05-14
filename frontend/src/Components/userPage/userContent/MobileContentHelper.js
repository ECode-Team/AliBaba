import {useGlobalContext} from "../../../context/Context";
import "./MobileContentHelper.scss"

const MobileContentHelper = ({ title , btn: Button , extraButtons = null }) => {
    const {setActiveSection} = useGlobalContext()

    return (
        <div className="mobile-content-helper">
            <div className="title">
                <img src="/icons/back-arrow.png" alt="" onClick={() => setActiveSection("user-dashboard")}/>
                <h3>{title}</h3>
            </div>
            {Button && <Button>افزودن مسافر جدید</Button>}
            <div className="extra-buttons">
                {extraButtons}
            </div>
        </div>
    )
}

export default MobileContentHelper;