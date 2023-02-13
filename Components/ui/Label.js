// RN core components
import { View, StyleSheet } from 'react-native';
// Custom components imports
import InstructionText from './InstructionText';
// Ionicons imports
import { Ionicons } from '@expo/vector-icons';

// Label Component
const Label = ({ labelName, iconName }) => {
	return (
		<View style={styles.container}>
			<InstructionText labelName={labelName} />
			{iconName && <Ionicons name={iconName} size={30} />}
		</View>
	);
};

// Label StyleSheet
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default Label;
