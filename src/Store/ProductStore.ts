import { create } from "zustand"

type ProductInfo = {
    id: number
    name: string
    price: number
    image: string
    description: string
}

type ProductStore = {
    productsArray: ProductInfo[]
    cart: ProductInfo[]

}

const useProductStore = create<ProductStore>(() => ({
    productsArray: [
        { 
            id: 1,
            name: "Tent",
            price: 199.99,
            image: "/images/tent.jpg",
            description: "A high-quality camping tent." 
        },
        { 
            id: 2,
            name: "Sleeping Bag",
            price: 49.99,
            image: "/images/sleeping-bag.jpg",
            description: "Warm and comfortable." 
        },
    ],
    cart: [],

    // addProduct,

    // removeProduct
}))

export default useProductStore
