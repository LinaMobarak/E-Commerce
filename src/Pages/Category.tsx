import React from 'react'
import Menu from '../components/Menu'
import { useParams } from 'react-router-dom'
import { categories } from '../components/NavBar'
import useProductStore from '../Store/ProductStore'
// import { MdAddShoppingCart } from 'react-icons/md'
// import { FaRegHeart } from 'react-icons/fa'
import Products from '../components/Products'


const Category = () => {
  const products = useProductStore((state) => state.productsArray);
  const id = useParams().id;
  const categoryId = Number(id);


  return (
    <>
      
      <Menu />
      <div className="category">
        <h1 style={{ margin: '30px' }} className="category-title">
          {categories[categoryId - 1].name}
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} className="product-grid">
        {products.filter((product) => product.category === categoryId).map((p => <div onClick={() => {
                    const currentCart = useProductStore.getState().cart
                    useProductStore.setState({ cart: [...currentCart, p] })
                    }} ><Products {...p}/></div>

                  ))}
      
        </div>
        
        
      </div>
    </>
  );
};

export default Category;