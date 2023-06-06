import { FontAwesome } from '@expo/vector-icons'
import { Stack, useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import useNikeStore from '../contexts/store'

const RootLayout = () => {
	const router = useRouter()

	const cartItems = useNikeStore(store => store.cartItems)

	return (
		<Stack
			screenOptions={{
				headerTitleAlign: 'center',
				headerRight: () => (
					<TouchableOpacity
						style={styles.cartContainer}
						onPress={() => router.push('shopping-cart')}
					>
						<FontAwesome name='shopping-cart' size={18} color='gray' />
						<Text style={styles.cartText}>
							{cartItems.reduce((acc, item) => acc + item.quantity, 0)}
						</Text>
					</TouchableOpacity>
				),
				contentStyle: { backgroundColor: 'white' }
			}}
		/>
	)
}

const styles = StyleSheet.create({
	cartContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5
	},
	cartText: {
		fontWeight: '500'
	}
})

export default RootLayout
