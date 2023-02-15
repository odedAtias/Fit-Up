// Rn core components imports
import { View, StyleSheet, TextInput } from 'react-native';
// Custom components imports

import CategoryList from '../Components/categoriesOutput/CategoryList';

// Const dummy date of categories
const CATEGORIES = [
	{
		id: 'c1',
		name: 'Yoga',
		imageUrl: require('../Assets/Images/Categories/Yoga.png'),
	},
	{
		id: 'c2',
		name: 'Pilates',
		imageUrl: require('../Assets/Images/Categories/Pilates.png'),
	},
	{
		id: 'c3',
		name: 'Spining',
		imageUrl: require('../Assets/Images/Categories/Spining.png'),
	},
	{
		id: 'c4',
		name: 'KickBoxing',
		imageUrl: require('../Assets/Images/Categories/KickBoxing.png'),
	},
	{
		id: 'c5',
		name: 'Swimming',
		imageUrl: require('../Assets/Images/Categories/Swiming.png'),
	},
	{
		id: 'c6',
		name: 'Strengh',
		imageUrl: require('../Assets/Images/Categories/Strengh.png'),
	},
	{
		id: 'c7',
		name: 'Dumbels',
		imageUrl: require('../Assets/Images/Categories/Dumbels.png'),
	},
	{
		id: 'c8',
		name: 'Zumba',
		imageUrl: require('../Assets/Images/Categories/Zumba.png'),
	},
	{
		id: 'c9',
		name: 'TRX',
		imageUrl: require('../Assets/Images/Categories/TRX.png'),
	},
	{
		id: 'c10',
		name: 'Other',
		imageUrl: require('../Assets/Images/Categories/Other.png'),
	},
];

// Categories component
const Categories = () => {
	return (
		<View style={styles.container}>
			<CategoryList categories={CATEGORIES} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 24,
	},
	inputContainer: {
		padding: 24,
	},
	inputText: {
		borderBottomColor: '#000',
		borderBottomWidth: 1,
	},
});

export default Categories;
