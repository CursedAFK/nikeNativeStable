import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import products from '../data/products'

const Products = () => {
	const router = useRouter()

	return (
		<FlatList
			data={products}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<TouchableOpacity
					style={styles.container}
					onPress={() => router.push(`product-details/${item.id}`)}
				>
					<Image
						source={{
							uri: item.image
						}}
						style={styles.image}
					/>
				</TouchableOpacity>
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
