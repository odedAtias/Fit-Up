//  RN Core components & API imports
import { StyleSheet, View } from 'react-native';

//  Custom components imports
import Logo from '../Components/ui/Logo';
import Input from '../Components/ui/Input';
import PrimaryButton from '../Components/ui/PrimaryButton';

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
			{/* Login Button */}
			<PrimaryButton bgColor='#79AD94'>Sign in</PrimaryButton>
			{/* SignUp Button */}
			<PrimaryButton bgColor='#010101'>Sign up</PrimaryButton>
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
