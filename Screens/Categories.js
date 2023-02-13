// Rn core components imports
import { View, FlatList, StyleSheet } from 'react-native';
// Custom components imports
import Input from '../Components/ui/Input';

// Categories component
const Categories = () => {
	return (
		<View>
			<View>
				<Input labelName='Search a category' />
				{/* Icon  */}
			</View>
			{/* List of categories */}
		</View>
	);
};

export default Categories;
