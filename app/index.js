import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Products from '../components/Products'

const Home = () => {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />

			<Products />
		</View>
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
