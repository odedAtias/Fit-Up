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
	logoContainer: {
		width: 250,
		height: 250,
	},
	image: {
		width: '100%',
		height: '100%',
	},
});

export default Logo;
