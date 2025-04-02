import { IoIosPhonePortrait } from 'react-icons/io'
import '../Styles/TopBarStyle.css'
import { IoMailUnreadOutline } from 'react-icons/io5'

const TopBar = () => {
  return (
    <div className="top-bar">
            <div className="top-bar-left">
                <span>خصومات خاصة فقط على موقعنا الإلكتروني</span>
            </div>
            <div className="top-bar-right">
                <IoIosPhonePortrait />
                <span className="span">+972344567890</span>
                <IoMailUnreadOutline />
                <span className="span">info@example.com</span>
            </div>
        </div>
  )
}

export default TopBar