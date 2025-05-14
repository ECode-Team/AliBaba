import UserContentHelperComponent from "../UserContentHelperComponent";

const DesktopFavorites = () => (
    <UserContentHelperComponent
        title="علاقه مندی ها"
        editIcon=""
        editTitle=""
        editPasswordBtn=""
    >
        <div className="fav-parent">
            <div className="favorites">
                <img src="/images/4/fav-error.png" alt=""/>
                <h4>.لیست علاقه‌مندی‌های شما خالی است</h4>
            </div>
        </div>
    </UserContentHelperComponent>
)

export default DesktopFavorites;