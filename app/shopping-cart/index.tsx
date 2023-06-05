import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CartListItem from '../../components/CartListItem'
import cart from '../../data/cart'

const ShoppingCart = () => {
	return (
		<SafeAreaView>
			<FlatList
				data={cart}
				renderItem={({ item }) => <CartListItem cartItem={item} />}
				keyExtractor={item => item.product.id}
				ListFooterComponent={() => (
					<View style={styles}>
						<View style={styles}>
							<Text>Subtotal</Text>
							<Text>410,00 US$</Text>
						</View>
					</View>
				)}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({})

export default ShoppingCart
