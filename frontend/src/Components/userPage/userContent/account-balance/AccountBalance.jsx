import "./AccountBalance.scss"
import {useState} from "react";
import DesktopAccountBalance from "./DesktopAccountBalance";
import useIsMobile from "../../../../context/useIsMobile";
import MobileAccountBalance from "./MobileAccountBalance";

const AccountBalance = () => {

  const [active, setActive] = useState("transaction")
  const isMobile = useIsMobile()

  return isMobile
      ? <MobileAccountBalance />
      : <DesktopAccountBalance active={active} setActive={setActive}/>
}

export default AccountBalance;