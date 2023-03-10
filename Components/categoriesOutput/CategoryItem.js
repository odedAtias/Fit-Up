// RN core components imports
import {
	View,
	Pressable,
	ImageBackground,
	Text,
	StyleSheet,
} from 'react-native';

// Category component
const CategoryItem = ({ categoryName, categoryImageUrl, handlePress }) => {
	return (
		<View style={styles.container}>
			<Pressable
				onPress={handlePress}
				style={({ pressed }) => [
					styles.innerContainer,
					pressed && styles.buttonPressed,
				]}>
				{/* Category item image */}
				<ImageBackground source={categoryImageUrl} style={styles.image}>
					<Text style={styles.text}>{categoryName}</Text>
				</ImageBackground>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 12,
		marginTop: 0,
		height: 150,
		width: '100%',
		// Shadow for android
		elevation: 8,
		// Shadow for ios
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	innerContainer: {
		flex: 1,
	},
	image: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontWeight: 'bold',
		fontSize: 24,
		color: 'white',
	},
	buttonPressed: {
		opacity: 0.75,
	},
});

export default CategoryItem;
