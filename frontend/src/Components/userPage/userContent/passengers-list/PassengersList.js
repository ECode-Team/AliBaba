import UserContentHelperComponent from "../UserContentHelperComponent";
import "./PassengersList.scss"

const PassengersList = () => {
  return (
      <div className="passenger-container">
          <UserContentHelperComponent
              editTitle=""
              title="جستجوی مسافران"
              icon="/icons/search.png"
          >
              <input className="search" type="text" placeholder="جستجوی نام , نام خانوادگی , کدملی , شماره پاسپورت"/>
          </UserContentHelperComponent>
          <UserContentHelperComponent
              title="لیست مسافران"
              icon="/icons/seat.png"
              editIcon="/icons/plus01.png"
              editTitle="افزودن مسافر جدید"
          >
              <div className="no-passenger-wrapper">
                  <div className="no-passenger">
                      <img src="/images/4/no-passengers.svg" alt="" />
                      <h4>لیست مسافران شما خالی است</h4>
                      <p>
                          برای دسترسی راحت‌تر به اطلاعات مسافران خود در هنگام خرید،
                          <br />
                          مسافران خود را اضافه کنید
                      </p>
                      <button>
                          افزودن مسافر
                          <img src="/icons/user-add.png" alt="" />
                      </button>
                  </div>
              </div>
          </UserContentHelperComponent>

      </div>
  )
}

export default PassengersList