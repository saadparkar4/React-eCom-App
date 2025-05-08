import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import products from "@/data/products";
import ProductItem from "./ProductItem";

const ProductList = () => {
	const [query, setQuery] = useState("");
	const [type, setType] = useState("All");
	// const [highlight, setHighlight] = useState("white");

	const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
	const productList = filteredProducts.map((product) => <ProductItem key={product.id} product={product} />);

	const categoryProducts = filteredProducts
		.filter((product) => product.category.toLowerCase().includes(type.toLowerCase()))
		.map((product) => {
			return <ProductItem key={product.id} product={product} />;
		});
	return (
		<ScrollView contentContainerStyle={styles.container} style={styles.containerStyle}>
			{/* Products List */}
			<ScrollView horizontal contentContainerStyle={styles.filterContainer}>
				<TouchableOpacity
					style={styles.filterButton}
					onPress={() => {
						setType("All");
						// , setHighlight("red")
					}}>
					<Text>All</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.filterButton} onPress={() => setType("Stationary")}>
					<Text>Stationary</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.filterButton} onPress={() => setType("Safety")}>
					<Text>Safety</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.filterButton} onPress={() => setType("Sports")}>
					<Text>Sports</Text>
				</TouchableOpacity>
			</ScrollView>
			{/* {productList} */}
			{type === "All" ? productList : categoryProducts}
		</ScrollView>
	);
};

export default ProductList;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		width: "auto",
		gap: 10,
	},
	containerStyle: {
		backgroundColor: "#efefef",
		paddingRight: 0,
		paddingLeft: 0,
		paddingBottom: 0,
	},
	searchInput: {
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		marginBottom: 10,
		backgroundColor: "#fff",
		borderColor: "#000",
	},
	filterTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	filterContainer: {
		flexDirection: "row",
		// justifyContent: "space-between",
		alignItems: "center",
		padding: 0,
		margin: 0,
		gap: 10,
	},
	filterButton: {
		height: "auto",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		width: "auto",
		justifyContent: "center",
		alignItems: "center",
	},
});
