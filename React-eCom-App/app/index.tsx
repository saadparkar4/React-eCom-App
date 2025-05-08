import { Text, View, StyleSheet } from "react-native";
import ProductItem from "@/components/ProductItem";
import ProductList from "@/components/ProductList";

export default function Index() {
	return (
		<View style={styles.container}>
			{/* // style={{
			// 	flex: 1,
			// 	justifyContent: "center",
			// 	alignItems: "center",
			// }} */}

			<Text style={styles.text}>FS SHOP</Text>

			<ProductList />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#efefef",
		padding: 10,
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
