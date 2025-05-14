import UserContentHelperComponent from "../UserContentHelperComponent";

const DesktopAutoPurchase = () => {
  return (
      <UserContentHelperComponent
          title="خریدهای خودکار"
          icon="/icons/calendar.png"
          editIcon=""
          editTitle=""
          editPasswordBtn=""
      >
          <div className="parent">
              <div className="auto-purchase">
                  <img src="/images/4/calendar01.svg" alt=""/>
                  <h4>هیچ خرید خودکاری فعالی وجود ندارد</h4>
              </div>
          </div>
      </UserContentHelperComponent>
  )
}

export default DesktopAutoPurchase