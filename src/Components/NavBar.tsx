import React from 'react'
import '../style/MenuStyle.css'
import { useNavigate } from 'react-router-dom'
export const categories = [
    { id: 1, name: 'العناية' },
    { id: 2, name: 'الأطفال' },
    { id: 3, name: 'العطور' },
    { id: 4, name: 'المكياج' },
]
const NavBar = () => {
    const navigate = useNavigate()
  return (
    <div className="main-menu">
      
        <ul className="main-menu">
          <li onClick={()=>{navigate('/home')}}>الرئيسية</li>
            {categories.map((category) => (
                <li key={category.id} onClick={() => navigate(`/category/${category.id}`)}>
                    {category.name}
                </li>
            ))}
        </ul>
    </div>

  )
}

export default NavBar