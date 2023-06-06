import { create } from 'zustand'
import products from '../data/products'

interface NikeProduct {
	id: string
	image: string
	images: string[]
	name: string
	price: number
	sizes: number[]
	description: string
}

export interface CartItem extends NikeProduct {
	quantity: number
}

interface NikeStore {
	products: NikeProduct[]
	deliveryFee: 15
	freeDeliveryFrom: 200
	cartItems: CartItem[]
	addCartItem: (product: NikeProduct) => void
	removeCartItem: (id: string) => void
	changeQuantity: (id: string, quantity: -1 | 1) => void
}

const useNikeStore = create<NikeStore>(set => ({
	products,
	deliveryFee: 15,
	freeDeliveryFrom: 200,
	cartItems: [],
	addCartItem: (product: NikeProduct) =>
		set(state => ({
			...state,
			cartItems: state.cartItems.find(item => item.id === product.id)
				? state.cartItems.map(item =>
						item.id === product.id
							? { ...item, quantity: item.quantity + 1 }
							: item
				  )
				: [...state.cartItems, { ...product, quantity: 1 }]
		})),
	removeCartItem: (id: string) =>
		set(state => ({
			...state,
			cartItems: state.cartItems.filter(item => item.id !== id)
		})),
	changeQuantity: (id: string, quantity: -1 | 1) =>
		set(state => {
			if (
				quantity === -1 &&
				state.cartItems.find(item => item.id === id)?.quantity === 1
			) {
				return {
					...state,
					cartItems: state.cartItems.filter(item => item.id !== id)
				}
			} else {
				return {
					...state,
					cartItems: state.cartItems.map(item =>
						item.id === id
							? { ...item, quantity: item.quantity + quantity }
							: item
					)
				}
			}
		})
}))

export default useNikeStore
