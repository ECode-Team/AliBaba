import AccordionItem from "./accordion/AccordionItem";
import MobileContentHelper from "../../common/mobileContentHelper/MobileContentHelper";

const transactionFilters = [
    "همه",
    "افزایش شارژ بابت واریز",
    "کاهش اعتبار سفارشات / بابت خرید",
    "افزایش اعتبار سفارشات / بابت استرداد",
    "انتقال موجودی از سفارشات",
    "کاهش شارژ / بابت انتقال به سفارشات",
    "تخصیص اعتبار اولیه سفارشات",
    "کاهش شارژ / اعتبار بابت خرید خدمات",
    "افزایش شارژ / اعتبار بابت استرداد",
    "افزایش شارژ / اعتبار بابت خرید ناموفق",
    "کاهش شارژ بابت پرداخت",
    "افزایش اعتبار",
    "کاهش اعتبار",
    "افزایش شارژ",
    "کاهش شارژ",
    "کاهش شارژ / اعتبار بابت تغییرات خدمت",
    "افزایش شارژ / اعتبار بابت تغییرات خدمت"
];

const RemoveFilterButton = () => (
    <button className="remove-filter-button">
        حذف فیلترها
    </button>
)

const FilterTab = () => (
    <>
      <MobileContentHelper title="فیلترها" btn={RemoveFilterButton} />

        <AccordionItem title="نوع تراکنش ها">
            {
                transactionFilters.map((label , index) => (
                    <label key={index} className="transaction-filter">
                        <input type="radio" name="transaction-filter" value={label}/>
                        {label}
                    </label>
                ))
            }
        </AccordionItem>

        <AccordionItem title="تاریخ تراکنش">
            <div className="input-container-date">
                <input type="text" placeholder="پایان"/>
                <input type="text" placeholder="شروع"/>
            </div>
        </AccordionItem>

        <AccordionItem title="مبلغ تراکنش">
            <div className="input-container-transaction">
               <div className="input-item">
                   <input type="text" placeholder="تا"/>
                   <span>تومان</span>
               </div>
                <div className="input-item">
                    <input type="text" placeholder="از"/>
                    <span>تومان</span>
                </div>
            </div>
        </AccordionItem>

    </>
)

export default FilterTab;