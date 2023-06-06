import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Products from '../components/Products'

const Home = () => {
	return (
		<>
			<Stack.Screen options={{ title: 'Home' }} />

			<View style={styles.container}>
				<Products />
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default Home
