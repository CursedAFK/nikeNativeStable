import { FontAwesome } from '@expo/vector-icons'
import { Stack, useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const RootLayout = () => {
	const router = useRouter()

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
						<Text style={styles.cartText}>1</Text>
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
