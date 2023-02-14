//  RN Core components & API imports
import { View, Text, Pressable, StyleSheet } from 'react-native';

//  PrimaryButton component
const PrimaryButton = ({ children, bgColor, onPress }) => {
	return (
		<View style={[styles.buttonOuterContainer, { backgroundColor: bgColor }]}>
			<Pressable style={styles.buttonInnerContainer} onPress={onPress}>
				<Text style={styles.textColor}>{children}</Text>
			</Pressable>
		</View>
	);
};

//  PrimaryButton styleSheet
const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 25,
		margin: 10,
		overflow: 'hidden',
		width: '60%',
	},

	buttonInnerContainer: {
		alignItems: 'center',
		paddingVertical: 15,
	},

	textColor: {
		color: 'white',
	},
});

export default PrimaryButton;
