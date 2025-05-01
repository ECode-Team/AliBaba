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


const UserContent = ({ activeSection }) => (
    <div className="content-section">
        {activeSection === 'user-dashboard' && <UserDashboard />}
        {activeSection === 'auto-purchase' && <AutoPurchase />}
        {activeSection === 'my-trips' && <MyTrips />}
        {activeSection === 'passengers-list' && <PassengersList />}
        {activeSection === 'favorites' && <Favorites />}
        {activeSection === 'request-support' && <RequestSupport />}
        {activeSection === 'account-balance' && <AccountBalance />}
    </div>
)

export default UserContent