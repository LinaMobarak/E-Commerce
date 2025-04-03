import React from 'react'
import useProductStore from '../Store/ProductStore';

import Products from '../components/Products';

const Cart = () => {
    const cartyy = useProductStore((state) => state.cart);
    console.log(cartyy)
  return (
    <>
        <div className="cart">
            <h1 style={{ margin: '30px' }} className="category-title">
            سلة التسوق
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} className="product-grid">
            {cartyy.length === 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="../../Images/empty-cart.svg" style={{width: '200px' , height: '200px'}}/>
                    <h2>سلة التسوق فارغة</h2>
                </div>
            ) : (
                cartyy.map((p, idx) => (
                    <div key={idx} style={{ margin: '20px' }}>
                        <Products {...p} />
                    </div> 
                ))
            )}
            </div>
        </div>
    </>
  )
}

export default Cart