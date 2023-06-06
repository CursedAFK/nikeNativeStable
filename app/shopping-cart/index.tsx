import { Stack } from 'expo-router'
import React from 'react'
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import CartListItem from '../../components/CartListItem'
import useNikeStore from '../../contexts/store'

const ShoppingCartFooter = () => {
	const { cartItems, deliveryFee } = useNikeStore(store => ({
		cartItems: store.cartItems,
		deliveryFee: store.deliveryFee
	}))

	return (
		<View style={styles.totalContainer}>
			<View style={styles.row}>
				<Text style={styles.text}>Subtotal</Text>
				<Text style={styles.text}>
					{cartItems
						.reduce((acc, item) => acc + item.price * item.quantity, 0)
						.toLocaleString('en-US')}{' '}
					US$
				</Text>
			</View>

			<View style={styles.row}>
				<Text style={styles.text}>Delivery</Text>
				<Text style={styles.text}>
					{deliveryFee.toLocaleString('en-US')} US$
				</Text>
			</View>

			<View style={styles.row}>
				<Text style={styles.textBold}>Total</Text>
				<Text style={styles.textBold}>
					{(
						cartItems.reduce(
							(acc, item) => acc + item.price * item.quantity,
							0
						) + deliveryFee
					).toLocaleString('en-US')}{' '}
					US$
				</Text>
			</View>
		</View>
	)
}

const ShoppingCart = () => {
	const { cartItems } = useNikeStore(store => ({
		cartItems: store.cartItems
	}))

	return (
		<>
			<Stack.Screen options={{ title: 'Cart' }} />

			<View style={cartItems.length === 0 && styles.container}>
				{cartItems.length === 0 ? (
					<Text style={styles.emptyCartText}>Your cart is empty</Text>
				) : (
					<>
						<FlatList
							data={cartItems}
							renderItem={({ item }) => <CartListItem cartItem={item} />}
							keyExtractor={item => item.id}
							ListFooterComponent={<ShoppingCartFooter />}
						/>

						<TouchableOpacity style={styles.button} onPress={() => {}}>
							<Text style={styles.buttonText}>Checkout</Text>
						</TouchableOpacity>
					</>
				)}
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	totalContainer: {
		margin: 20,
		paddingTop: 10,
		borderTopColor: 'gainsboro',
		borderTopWidth: 1,
		paddingBottom: 80
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 2
	},
	text: {
		fontSize: 16,
		color: 'gray'
	},
	textBold: {
		fontSize: 16,
		fontWeight: '500'
	},
	button: {
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#000',
		width: '90%',
		alignSelf: 'center',
		padding: 20,
		borderRadius: 999,
		alignItems: 'center'
	},
	buttonText: {
		color: '#fff',
		fontWeight: '500',
		fontSize: 16
	},
	emptyCartText: {
		textAlign: 'center',
		fontWeight: '500',
		fontSize: 22,
		fontStyle: 'italic',
		color: 'gray'
	}
})

export default ShoppingCart
