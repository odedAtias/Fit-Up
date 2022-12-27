//  RN Core components & API imports
import { StyleSheet, Text, View, Image } from 'react-native';
//  Custom components imports
import Logo from '../Components/ui/Logo';

//  Login component
const Login = () => {
	return (
		<View style={styles.loginContainer}>
			<Logo />
		</View>
	);
};

//  Login StyleSheet
const styles = StyleSheet.create({
	loginContainer: {
		flex: 1,
		alignItems: 'center',
	},
});

export default Login;
