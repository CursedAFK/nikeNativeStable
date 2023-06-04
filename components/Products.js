import React from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'
import products from '../data/products'

const Products = () => {
	return (
		<FlatList
			data={products}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<View style={styles.container}>
					<Image
						source={{
							uri: item.image
						}}
						style={styles.image}
					/>
				</View>
			)}
			numColumns={2}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '50%',
		padding: 1
	},
	image: {
		width: '100%',
		aspectRatio: 1
	}
})

export default Products
