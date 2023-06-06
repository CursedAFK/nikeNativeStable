import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import {
	FlatList,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	useWindowDimensions
} from 'react-native'
import useNikeStore from '../../../contexts/store'

const ProductDetails = () => {
	const { width } = useWindowDimensions()

	const router = useRouter()

	const { id } = useLocalSearchParams()

	const { products } = useNikeStore(store => ({
		products: store.products
	}))

	const product = products.find(p => p.id === id)

	return (
		<>
			<Stack.Screen options={{ title: product?.name }} />

			<View style={styles.container}>
				<ScrollView>
					<FlatList
						data={product?.images}
						renderItem={({ item }) => (
							<Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
						)}
						keyExtractor={item => item}
						horizontal
						showsHorizontalScrollIndicator={false}
						pagingEnabled
					/>

					<View style={styles.info}>
						<Text style={styles.title}>{product?.name}</Text>

						<Text style={styles.price}>$ {product?.price}</Text>

						<Text style={styles.description}>{product?.description}</Text>
					</View>
				</ScrollView>

				<TouchableOpacity style={styles.button} onPress={() => {}}>
					<Text style={styles.buttonText}>Add to cart</Text>
				</TouchableOpacity>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	info: {
		padding: 20,
		gap: 10,
		paddingBottom: 80
	},
	title: {
		fontSize: 34,
		fontWeight: '500'
	},
	price: {
		fontSize: 16,
		fontWeight: '500',
		letterSpacing: 1.5
	},
	description: {
		fontSize: 18,
		lineHeight: 30,
		fontWeight: '300',
		textAlign: 'justify'
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

export default ProductDetails
