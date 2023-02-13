//  RN Core components & API imports
import { StyleSheet, View, Image } from 'react-native';

//  Logo component
const Logo = () => {
	return (
		<View style={styles.logoContainer}>
			<Image
				style={styles.image}
				source={require('../../Assets/Images/FitUp-Logo.png')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	logoContainer: {},
	image: {
		width: 200,
		height: 140,
	},
});

export default Logo;
