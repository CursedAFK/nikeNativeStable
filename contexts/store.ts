import { create } from 'zustand'

interface NikeStore {}

const useNikeStore = create<NikeStore>(set => ({}))

export default useNikeStore
