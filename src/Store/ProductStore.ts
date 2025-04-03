import { create } from "zustand"

type ProductInfo = {
    id: number
    name: string
    price: number
    image: string
    quantity: number
}

type ProductStore = {
    productsArray: ProductInfo[]
    cart: ProductInfo[]
    favourites: ProductInfo[]
    addToCart: (product: ProductInfo) => void
}

const useProductStore = create<ProductStore>((set) => ({
    productsArray: [
        { 
            id: 1,
            name: "Tent",
            price: 199.99,
            image: "/images/tent.jpg",
            quantity: 0
        },
        { 
            id: 2,
            name: "Sleeping Bag",
            price: 49.99,
            image: "/images/sleeping-bag.jpg",
            quantity: 0
        },
        { 
            id: 3,
            name: "Sleeping Bag",
            price: 49.99,
            image: "/images/sleeping-bag.jpg",
            quantity: 0
        },
    ],
    
    cart: [],
    favourites: [],

    addToCart: (product: ProductInfo) => set((state) => {
        const exists = state.cart.find((exist) => exist.id === product.id)
        
        if (exists) {
            exists.quantity += 1;
            return { cart: [...state.cart] };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] }
    }),
        // ({ cart: [...state.cart, product] })),

    // removeFromCart
}))

export default useProductStore
