import { Feather } from '@expo/vector-icons'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface CartListItemProps {
	cartItem: {
		product: {
			id: string
			image: string
			name: string
			price: number
		}
		size: number
		quantity: number
	}
}

const CartListItem = ({ cartItem }: CartListItemProps) => {
	const increaseQuantity = () => {}

	const decreaseQuantity = () => {}

	return (
		<View style={styles.container}>
			<Image source={{ uri: cartItem.product.image }} style={styles.image} />

			<View style={styles.contentContainer}>
				<Text style={styles.name}>{cartItem.product.name}</Text>

				<Text style={styles.size}>Size {cartItem.size}</Text>

				<View style={styles.footer}>
					<TouchableOpacity onPress={decreaseQuantity}>
						<Feather name='minus-circle' size={24} color='gray' />
					</TouchableOpacity>

					<Text style={styles.quantity}>{cartItem.quantity}</Text>

					<TouchableOpacity onPress={increaseQuantity}>
						<Feather name='plus-circle' size={24} color='gray' />
					</TouchableOpacity>
					<Text style={styles.itemTotal}>$320.0</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingHorizontal: 20,
		flexDirection: 'row'
	},
	contentContainer: {
		flex: 1,
		marginLeft: 10
	},
	image: {
		width: '40%',
		aspectRatio: 1
	},
	name: {
		fontWeight: '500',
		fontSize: 18
	},
	size: {
		fontSize: 16,
		color: 'gray'
	},
	quantity: {
		marginHorizontal: 10,
		fontWeight: 'bold',
		color: 'gray'
	},
	footer: {
		marginTop: 'auto',
		flexDirection: 'row',
		alignItems: 'center'
	},
	itemTotal: {
		fontSize: 16,
		marginLeft: 'auto',
		fontWeight: '500'
	}
})

export default CartListItem
