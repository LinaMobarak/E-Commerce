import { CgProfile } from 'react-icons/cg';
import '../style/MenuStyle.css'
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaRegHeart } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import useProductStore, { ProductInfo } from '../Store/ProductStore.ts'
import Products from './Products.tsx';

const Menu = () => {

    const addtocart = useProductStore(s => s.addToCart)
    const [ishow , setIsShow] = useState('hidden');
    const [searchItem , setSearchItem] = useState('');
    const [filteredItems, setFilteredItems] = useState<ProductInfo[]>([]);

    const products = useProductStore((s)=>s.productsArray)
    const cart = useProductStore((s)=>s.cart)
    const handleSearch = (term: string) => {
        setSearchItem(term);
        if (term.trim() === '') {
          setFilteredItems([]); // Clear filtered items if search is empty
        } else {
          const filtered = products.filter((pro) =>
            pro.name.toLowerCase().includes(term.toLowerCase())
          );
          setFilteredItems(filtered);
        }
      };

    const navigate = useNavigate();
  return (
    <div className="logo-menu">
            <div className="user-actions">
                
                    <div className="menu"  style = {{position: 'relative'}}onClick={()=>{navigate('/cart')}}>سلة التسوق <RiShoppingBag4Line /> <p className='cart-quantity'>{cart.length}</p></div>
                    
               
                <CgProfile />
                <FaRegHeart />
                <IoSearch  
                    style={{ cursor: 'pointer' }}
                    onClick={() => setIsShow('text')}
                />
                <input
                    className="inputField"
                    placeholder="Search"
                    value={searchItem}
                    type={ishow}
                    onChange={(e) => handleSearch(e.target.value)}
                />  
            </div>
            {filteredItems.length > 0 && (
                <div className="search-results" style={{
                    display: 'flex',
                    position: 'absolute',
                    top: '700px',
                }}>
                {filteredItems.map((item) => (
                    <div
                    key={item.id}
                    style={{marginRight: '20px'
                    }}
                    className="search-item"
                    onClick={() => addtocart(item)}>
                    <Products {...item} />
                    </div>
            ))}
        </div>
        )}
            
            <NavBar />
            
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