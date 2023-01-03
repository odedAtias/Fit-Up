//  RN Core components imports
import { StyleSheet, View, TextInput } from 'react-native';
//  Custom components imports
import InstructionText from '../ui/InstructionText';

//  TextInput component
const Input = ({ labelName }) => {
	return (
		<View style={styles.inputContainer}>
			<InstructionText text={`${labelName}`} />
			<TextInput
				style={styles.textInput}
				placeholder={`Enter your ${labelName}`}
				placeholderTextColor={'#a6a6a6'}
				secureTextEntry={labelName == 'Password' ? true : false}
			/>
		</View>
	);
};

//  TextInput StyleSheet
const styles = StyleSheet.create({
	textInput: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		fontSize: 16,
	},
	inputContainer: {
		width: '85%',
		marginBottom: '10%',
	},
});

export default Input;
