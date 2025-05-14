import {useGlobalContext} from "./Context";

const useIsMobile = () => {
    const { isMobile } = useGlobalContext();
    return isMobile;
};

export default useIsMobile;
