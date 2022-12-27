//  RN Core components & API imports
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import InstructionText from '../Components/ui/InstructionText';
//  Custom components imports
import Logo from '../Components/ui/Logo';

//  Login component
const Login = () => {
	return (
		//  Login root container
		<View style={styles.loginContainer}>
			{/* Logo */}
			<View>
				<Logo />
			</View>
			{/* Sign in form */}
			<View style={styles.inputContainer}>
				<InstructionText text={'Username: '} />
				<TextInput
					style={styles.textInput}
					placeholder='Enter your username'
					placeholderTextColor={'#a6a6a6'}
				/>
			</View>
			<View style={styles.inputContainer}>
				<InstructionText text={'Password: '} />
				<TextInput
					style={styles.textInput}
					placeholder='Enter your password'
					placeholderTextColor={'#a6a6a6'}
				/>
			</View>
		</View>
	);
};

const screenDevice = Dimensions.get('window');

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
		width: screenDevice.width < 400 ? '75%' : '85%',
		marginBottom: '10%',
	},
});

export default Login;
