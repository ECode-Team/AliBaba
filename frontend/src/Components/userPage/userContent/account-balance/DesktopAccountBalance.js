
const DesktopAccountBalance = ({ active , setActive }) => (
    <div className="container">
        <div className="account-balance">
            <span>موجودی حساب</span>
            <div className="inventory-increase-decrease">
                <p>تومان<span>0</span></p>
                <button className="increase">
                    <img src="/icons/white-plus.png" alt=""/>
                    افزایش موجودی
                </button>
                <button className="decrease">
                    <img src="/icons/minus.png" alt=""/>
                    برداشت موجودی
                </button>
            </div>
        </div>
        <div className="payment-history">
            <h4>تاریخچه</h4>
            <div className="options">
                <div className="buttons">
                    <button
                        className="tab-button"
                        onClick={() => setActive("transaction")}>
                        <span className={`${active === 'transaction' && "active"}`}>تراکنش ها</span>
                    </button>
                    <button
                        className="tab-button"
                        onClick={() => setActive("transferRequest")}>
                        <span className={`${active === 'transferRequest' && "active"}`}>درخواست های انتقال موجودی</span>
                    </button>
                </div>
                {
                    active === "transaction" && (
                        <div className="export-filter">
                            <button className="filter-btn">
                                <img src="/icons/filter.png" alt=""/>
                                فیلتر
                            </button>
                            <button className="export-btn">
                                <img src="/icons/export.png" alt=""/>
                                خروجی اکسل
                            </button>
                        </div>
                    )
                }
            </div>
            <div className="no-payment">
                <img src="/images/4/payment-error.svg" alt=""/>
                <h4>هیچ تراکنش یافت نشد</h4>
            </div>
        </div>
    </div>
)

export default DesktopAccountBalance;