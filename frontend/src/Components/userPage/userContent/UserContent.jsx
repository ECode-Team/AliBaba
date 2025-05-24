import "./UserContent.scss"
import {
    UserDashboard ,
    Favorites ,
    RequestSupport ,
    PassengersList ,
    MyTrips ,
    AccountBalance ,
    AutoPurchase
} from "../userContent";
import {useGlobalContext} from "../../../context/Context";


const UserContent = () => {

    const {activeSection} = useGlobalContext()

    return (
        <div className="content-section">
            {activeSection === 'user-dashboard' && <UserDashboard />}
            {activeSection === 'auto-purchase' && <AutoPurchase />}
            {activeSection === 'my-trips' && <MyTrips/>}
            {activeSection === 'passengers-list' && <PassengersList />}
            {activeSection === 'favorites' && <Favorites />}
            {activeSection === 'request-support' && <RequestSupport />}
            {activeSection === 'account-balance' && <AccountBalance />}
        </div>
    )
}


export default UserContent