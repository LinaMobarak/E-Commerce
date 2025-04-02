import useProductStore from '../Store/ProductStore';
import '../styles/Products.css'

function Products() {
    const products = useProductStore((state) => state.productsArray);

    return (
        <div className="featured-products">
            <h3 className="section-title">منتجاتنا المميزة</h3>
            
            <div className="product-grid">
                {products.map((product) => (

                    <div key={product.id} className="product-card">
                    <div className="product-badge">أصلي 100%</div>
                    
                    <div className="product-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <button>
                        Add to Cart
                    </button>
                </div>
            ))}
            </div>
            {/* {products.map((product) => (
                <Product key={product.id} {...product} />
            ))} */}
        </div>
// {/* 
//                     <div className="product-info">
//                         <div>مجموعة تيررا للعناية بالجلد حجم عائلي نسخة خاصة</div>
//                         <div className="product-price">189 ر.س</div>
//                     </div>
//                 </div>

//                 <div className="product-card">
//                     <div className="product-badge">أكثر مبيعاً</div>
//                     <div className="product-image">
//                         <img src="/api/placeholder/100/100" alt="Product" />
//                     </div>
//                     <div className="product-info">
//                         <div>مجموعة كريم الترطيب حجم كبير نسخة خاصة</div>
//                         <div className="product-price">189 ر.س</div>
//                     </div>
//                 </div>

//                 <div className="product-card">
//                     <div className="product-badge">أشكال متعددة</div>
//                     <div className="product-image">
//                         <img src="/api/placeholder/100/100" alt="Product" />
//                     </div>
//                     <div className="product-info">
//                         <div>باليت ظلال عيون 16 لون أدوات تجميل</div>
//                         <div className="product-price">189 ر.س</div>
//                     </div>
//                 </div>

//                 <div className="product-card">
//                     <div className="product-badge">آخر قطعة</div>
//                     <div className="product-image">
//                         <img src="/api/placeholder/100/100" alt="Product" />
//                     </div>
//                     <div className="product-info">
//                         <div>مجموعة كريم الترطيب حجم كبير نسخة خاصة</div>
//                         <div className="product-price">189 ر.س</div>
//                     </div>
//                 </div>

//                 <div className="product-card">
//                     <div className="product-badge">أصلي 100%</div>
//                     <div className="product-image">
//                         <img src="/api/placeholder/100/100" alt="Product" />
//                     </div>
//                     <div className="product-info">
//                         <div>مجموعة كريم الترطيب حجم كبير نسخة خاصة</div>
//                         <div className="product-price">189 ر.س</div>
//                     </div>
//                 </div>
//             </div>
//         </div>  */}
    );
}

export default Products;
