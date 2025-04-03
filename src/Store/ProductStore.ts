import { create } from "zustand"

export type ProductInfo = {
    id: number
    name: string
    price: number
    image: string
    quantity: number
    category: number
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
        category: 4,
        id: 1,
        name: "Foundation",
        price: 29.99,
        image: "/images/foundation.jpg",
        quantity: 0
    
      },
      { 
        category: 4,
        id: 2,
        name: "Mascara",
        price: 19.99,
        image: "/images/mascara.jpg",
        quantity: 0
      },
      { 
        category: 4,
        id: 3,
        name: "Lipstick",
        price: 15.99,
        image: "/images/lipstick.jpg",
        quantity: 0
      },
      { 
        category: 4,
        id: 4,
        name: "Blush",
        "price": 18.99,
        "image": "/images/blush.jpg",
        quantity: 0
      },
      { 
        "category": 4,
        "id": 5,
        "name": "Eyeshadow Palette",
        "price": 39.99,
        "image": "/images/eyeshadow-palette.jpg",
        quantity: 0
        
      },
      { 
        "category": 2,
        "id": 6,
        "name": "Makeup Primer",
        "price": 24.99,
        "image": "/images/makeup-primer.jpg",
        quantity: 0
      },
      { 
          "category": 1,
          "id": 1,
          "name": "Face Cleanser",
          "price": 19.99,
          "image": "/images/face-cleanser.jpg",
          quantity: 0
        },
        { 
          "category": 2,
          "id": 2,
          "name": "Moisturizer",
          "price": 24.99,
          "image": "/images/moisturizer.jpg",
          quantity: 0
        },
        { 
          "category": 1,
          "id": 3,
          "name": "Sunscreen",
          "price": 14.99,
          "image": "/images/sunscreen.jpg",
          quantity: 0
        },
        { 
          "category": 3,
          "id": 4,
          "name": "Exfoliating Scrub",
          "price": 18.99,
          "image": "/images/exfoliating-scrub.jpg",
          quantity: 0
        },
        { 
          "category": 3,
          "id": 5,
          "name": "Eye Cream",
          "price": 22.99,
          "image": "/images/eye-cream.jpg",
          quantity: 0
        },
        { 
          "category": 3,
          "id": 6,
          "name": "Night Cream",
          "price": 29.99,
          "image": "/images/night-cream.jpg",
          quantity: 0
        }
    ],
    
    cart: [],
    favourites: [],

    addToCart: (product: ProductInfo) => set((state) => {
        const exists = state.cart.find((p) => p.id === product.id)
        
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
