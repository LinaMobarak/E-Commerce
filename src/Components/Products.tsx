
import {ProductInfo} from '../Store/ProductStore'
import '../style/Products.css'
import { MdAddShoppingCart } from 'react-icons/md'

function Products(props : ProductInfo) {

    return (

                    <div  className="product-card">
                        <div className="product-badge">أصلي 100%</div>
                        
                        <div className="product-image">
                            <img src={props.image} alt={props.name} />
                        </div>
                        
                        <p>ريال سعودي {props.price}</p>
                        {/* <p>الكمية {props.quantity}</p> */}
                        <button>
                                <MdAddShoppingCart />
                        </button>
                    </div>
        

    );
}

export default Products;
