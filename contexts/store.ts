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

interface NikeStore {
	products: NikeProduct[]
}

const useNikeStore = create<NikeStore>(set => ({
	products
}))

export default useNikeStore
