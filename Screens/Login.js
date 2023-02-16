//  RN Core components & API imports
import { StyleSheet, View, Pressable, Text } from 'react-native';

//  Custom components imports
import Logo from '../Components/ui/Logo';
import Input from '../Components/ui/Input';
import PrimaryButton from '../Components/ui/PrimaryButton';

//	Constant data imports
import Colors from '../Assets/Colors';

//  Login component
const Login = () => {
	return (
		//  Login root container
		<View style={styles.container}>
			{/* Logo */}
			<View style={styles.logoContainer}>
				<Logo imageWidth={260} imageHeight={220} />
			</View>
			{/* Inputs */}
			<View style={styles.inputsContainer}>
				<Input labelName='Username' iconName='person-sharp' />
				<Input labelName='Password' iconName='lock-closed' />
			</View>
			{/* Buttons */}
			<View style={styles.buttonsContainer}>
				<PrimaryButton
					bgColor={Colors.PrimaryColor}
					onPress={() => {
						console.log('Sign in button pressed ...');
					}}>
					Sign in
				</PrimaryButton>
				{/* SignUp Button */}
				<PrimaryButton
					bgColor={Colors.SecondaryColor}
					onPress={() => {
						console.log('Sign up button pressed ...');
					}}>
					Sign up
				</PrimaryButton>
			</View>
			{/* Forgot Password link */}
			<View style={styles.forgotPasswordOuterContainer}>
				<Text style={styles.forgotPasswordText}>Forgot password ?</Text>
				<Pressable
					onPress={() => {
						console.log('forgot password Pressed ...');
					}}>
					<Text style={[styles.forgotPasswordText, styles.forgotPasswordLink]}>
						click here
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

// Todo : touchAble toggle button to hide/display the password

//  Login StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center', //
		width: '100%', //
	},
	logoContainer: {
		height: '20%',
	},
	inputsContainer: {
		width: '100%',
		alignItems: 'center',
		marginBottom: '5%',
		marginTop: '5%',
	},
	buttonsContainer: {
		width: '100%',
		alignItems: 'center',
	},
	forgotPasswordOuterContainer: {
		marginTop: 15,
		flexDirection: 'row',
	},
	forgotPasswordText: {
		fontSize: 16,
	},
	forgotPasswordLink: {
		marginLeft: 3,
		color: '#4C00B0',
	},
});

export default Login;
