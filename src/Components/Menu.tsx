import { CgProfile } from 'react-icons/cg';
import '../Styles/MenuStyle.css'
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaRegHeart } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

const Menu = () => {
  return (
    <div className="logo-menu">
            <div className="user-actions">
                <div className="menu">سلة التسوق</div>
                <RiShoppingBag4Line />
                <CgProfile />
                <FaRegHeart />
                
                <IoSearch />
            </div>
            
            <ul className="main-menu">
                <li className="active">الرئيسية</li>
                <li>العناية</li>
                <li>الأطفال</li>
                <li>العطور</li>
                <li>المكياج</li>
            </ul>
            
            <div className="logo">
                LS
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" fill="#000"></path>
                </svg>
            </div>
        </div>
  )
}

export default Menu