import { IoIosMail, IoIosPhonePortrait } from 'react-icons/io'
import '../Styles/TopBarStyle.css'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { FaPhone } from 'react-icons/fa'

const TopBar = () => {
  return (
    <div className="top-bar">
            <div className="top-bar-left">
                <span>خصومات خاصة فقط على موقعنا الإلكتروني</span>
            </div>
            <div className="top-bar-right">
                <span className="span">+972344567890</span>
                <span className="icons">
                  <FaPhone />
                </span>
                <span className="span">info@example.com</span>
                <span className="icons">
                  <IoIosMail />
                </span>
            </div>
        </div>
  )
}

export default TopBar