//  RN Core components
import { View, Text, StyleSheet } from 'react-native';

//  InstructionsText component
const InstructionText = ({ labelName }) => {
	return (
		<View>
			<Text style={styles.text}>{labelName}</Text>
		</View>
	);
};

//	InstructionText StyleSheet
const styles = StyleSheet.create({
	text: {
		fontSize: 19,
		marginBottom: 10,
	},
});

export default InstructionText;
