import { Accordion } from "../Components/mainpage/accordion";
import { Search } from "../Components/mainpage/search";


export const Homepage = () => {
    return (
        <div className="main-page-container">
            <Search/>
            <Accordion/>
        </div>
    )
}