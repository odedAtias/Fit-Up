//  RN Core components & API imports
import { StyleSheet, View, TextInput } from 'react-native';

//  Custom components imports
import Logo from '../Components/ui/Logo';
import Input from '../Components/ui/Input';

//  Login component
const Login = () => {
	return (
		//  Login root container
		<View style={styles.loginContainer}>
			{/* Logo */}
			<Logo />
			{/* Sign in form */}
			<Input labelName='Username' />
			<Input labelName='Password' />
			{/* @todo - Forgot password link */}
			{/* Buttons: Login, SignUp */}
		</View>
	);
};

//  Login StyleSheet
const styles = StyleSheet.create({
	loginContainer: {
		flex: 1,
		alignItems: 'center',
	},
	textInput: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
	},
	inputContainer: {
		width: '85%',
		marginBottom: '10%',
	},
});

export default Login;
