//  RN Core components & API imports
import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children, bgColor }) => {
	return (
		<View style={[style.loginButton, { backgroundColor: bgColor }]}>
			<Pressable>
				<Text style={style.textColor}>{children}</Text>
			</Pressable>
		</View>
	);
};

const style = StyleSheet.create({
	loginButton: {
		alignItems: 'center',
		width: '60%',
		margin: 5,
		paddingTop: 15,
		paddingBottom: 15,
		borderRadius: 25,
	},

	textColor: {
		color: 'white',
	},
});

export default PrimaryButton;
