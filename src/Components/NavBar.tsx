import React from 'react'
import '../Styles/MenuStyle.css'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <ul className="main-menu" style={{width: 'fit-content' , margin: '0 auto'}}>
            <li className="active" onClick={()=>{navigate('/home')}}>الرئيسية</li>
            <li onClick={()=>{navigate('/care')}}>العناية</li>
            <li onClick={()=>{navigate('/children')}}>الأطفال</li>
            <li onClick={()=>{navigate('/perfumes')}}>العطور</li>
            <li onClick={()=>{navigate('/make-up')}}>المكياج</li>
        </ul>

  )
}

export default NavBar