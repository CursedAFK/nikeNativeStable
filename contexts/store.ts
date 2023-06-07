import { produce } from 'immer'
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
		set(
			produce<NikeStore>(state => {
				const cartItem = state.cartItems.find(item => item.id === product.id)
				if (cartItem) {
					cartItem.quantity += 1
				} else {
					state.cartItems.push({ ...product, quantity: 1 })
				}
			})
		),
	removeCartItem: (id: string) =>
		set(
			produce<NikeStore>(state => {
				state.cartItems = state.cartItems.filter(item => item.id !== id)
			})
		),
	changeQuantity: (id: string, quantity: -1 | 1) =>
		set(
			produce<NikeStore>(state => {
				const cartItem = state.cartItems.find(item => item.id === id)
				if (cartItem) {
					if (cartItem.quantity === 1 && quantity === -1) {
						state.cartItems = state.cartItems.filter(item => item.id !== id)
					} else {
						cartItem.quantity += quantity
					}
				}
			})
		)
}))

export default useNikeStore
