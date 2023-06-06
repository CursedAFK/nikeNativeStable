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
import cart from '../../data/cart'

const ShoppingCartFooter = () => (
	<View style={styles.totalContainer}>
		<View style={styles.row}>
			<Text style={styles.text}>Subtotal</Text>
			<Text style={styles.text}>410,00 US$</Text>
		</View>

		<View style={styles.row}>
			<Text style={styles.text}>Delivery</Text>
			<Text style={styles.text}>10,00 US$</Text>
		</View>

		<View style={styles.row}>
			<Text style={styles.textBold}>Total</Text>
			<Text style={styles.textBold}>420,00 US$</Text>
		</View>
	</View>
)

const ShoppingCart = () => {
	return (
		<>
			<Stack.Screen options={{ title: 'Cart' }} />

			<View>
				<FlatList
					data={cart}
					renderItem={({ item }) => <CartListItem cartItem={item} />}
					keyExtractor={item => item.product.id}
					ListFooterComponent={<ShoppingCartFooter />}
				/>

				<TouchableOpacity style={styles.button} onPress={() => {}}>
					<Text style={styles.buttonText}>Checkout</Text>
				</TouchableOpacity>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
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
	}
})

export default ShoppingCart
