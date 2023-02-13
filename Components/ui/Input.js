//  RN Core components imports
import { StyleSheet, View, TextInput } from 'react-native';
//  Custom components imports
import Label from './Label';

//  TextInput component
const Input = ({ labelName, iconName }) => {
	return (
		<View style={styles.inputContainer}>
			{/* Label */}
			<Label labelName={labelName} iconName={iconName} />
			{/* Input  */}
			<TextInput
				style={styles.textInput}
				placeholder={`Enter your ${labelName}`}
				placeholderTextColor={'#a6a6a6'}
				secureTextEntry={labelName == 'Password' ? true : false}
			/>
		</View>
	);
};

// Todo : Omit the line under the value of the text input

//  TextInput StyleSheet
const styles = StyleSheet.create({
	inputContainer: {
		width: '85%',
		marginVertical: 20,
		padding: 0,
	},

	textInput: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		fontSize: 16,
	},
});

export default Input;
