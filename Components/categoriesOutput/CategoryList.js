// RN core components
import { FlatList, StyleSheet, View } from 'react-native';
// Custom components imports
import CategoryItem from './CategoryItem';
// render category item function
const renderCategoryItem = itemData => (
	<CategoryItem
		categoryName={itemData.item.name}
		categoryImageUrl={itemData.item.imageUrl}
		handlePress={() => {
			console.log('Category pressed ...');
		}}
	/>
);

// CategoryList
const CategoryList = ({ categories }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={categories}
				keyExtractor={item => item.id}
				renderItem={renderCategoryItem}
				numColumns={2}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
});

export default CategoryList;
