import MobileContentHelper from "../MobileContentHelper";

const MobileAccountBalance = ({ active , setActive }) => (
    <>
      <MobileContentHelper title="موجودی و اعتبار من"  />
      <div className="my-account-balance-mobile-container">
          <div className="account-balance-mobile">
              <h3>موجودی حساب</h3>
              <p><span>0</span>تومان</p>
          </div>
          <div className="transactions-transferRequest">
              <div className="transactions">
                  <h5>تراکنش ها</h5>
                  <img src="/icons/c.png" alt=""/>
              </div>
              <div className="separator"></div>
              <div className="transferRequest">
                  <h5>درخواست انتقال های موجودی</h5>
                  <img src="/icons/chevron-left.png" alt=""/>
              </div>
          </div>
      </div>
    </>
)

export default MobileAccountBalance;