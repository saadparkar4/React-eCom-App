// ### **2. Create a ProductItem Component**

// - Build a reusable component `ProductItem` that receives product details as props.
// - This component should display:
//     - Product image
//     - Title
//     - Category
//     - Price (formatted with 2 decimal places)
//     - Two buttons: One for Add to Cart and one for Add to Favorites.

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ProductItemsProps {
	product: {
		id: number;
		title: string;
		price: number;
		category: string;
		image: string;
	};
}

const ProductItem = ({ product }: ProductItemsProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.productInfo}>
				<Image source={{ uri: product.image }} style={styles.image} />

				{/* <Text style={styles.price}>{product.id}</Text> */}
				<Text style={styles.name}>{product.title}</Text>
				<Text style={styles.price}>KWD {product.price} </Text>
				<Text style={styles.category}>{product.category}</Text>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.cartButton}>
					<Text style={styles.buttonText}>Add to Cart</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.favButton}>
					<Text style={styles.buttonText}>Add to Favorites</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		width: "60%",
		justifyContent: "flex-start",
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: "white",
		padding: 10,
		margin: 0,
		gap: 10,
	},
	productInfo: {
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "center",
		gap: 10,
		marginBottom: 20,
		width: "auto",
	},
	text: {
		fontSize: 16,
		fontWeight: "bold",
	},
	image: {
		width: 400,
		height: 200,
		borderRadius: 10,
		objectFit: "cover",
	},
	name: {
		fontSize: 18,
		textAlign: "center",
		color: "black",
		fontWeight: "bold",
	},
	price: {
		fontSize: 16,
		color: "black",
		fontWeight: "light",
	},
	category: {
		fontSize: 16,
		color: "black",
		fontWeight: "light",
	},
	buttonContainer: {
		flexDirection: "row",
		gap: 10,
		width: "80%",
	},
	cartButton: {
		backgroundColor: "blue",
		padding: 10,
		borderRadius: 10,
		width: "50%",
		marginBottom: 10,
	},
	buttonText: {
		color: "white",
		justifyContent: "center",
		textAlign: "center",
		fontWeight: "bold",
	},
	favButton: {
		backgroundColor: "red",
		padding: 10,
		borderRadius: 10,
		width: "50%",
		marginBottom: 10,
	},
});
