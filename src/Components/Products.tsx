
import { useEffect, useState } from 'react'
import useProductStore, {ProductInfo} from '../Store/ProductStore'
import '../style/Products.css'
import { MdAddShoppingCart } from 'react-icons/md'


function Products(props : ProductInfo) {
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        if (window.location.pathname.includes('cart')) {
            setIsShown(!isShown)
        }
    }, [])
    
    return (

                    <div  className="product-card">
                        <div className="product-badge">أصلي 100%</div>
                        
                        <div className="product-image">
                            <img src={props.image} alt={props.name} />
                        </div>
                        
                        <p>ريال سعودي {props.price}</p>
                        {isShown && <p>الكمية {props.quantity}</p>}
                        <button>
                                <MdAddShoppingCart />
                        </button>
                    </div>
        

    )
}

export default Products
