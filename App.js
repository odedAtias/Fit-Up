import { StatusBar } from 'expo-status-bar';

// Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//  RN Core components & API imports
import { StyleSheet, Text } from 'react-native';

//  Custom components imports
import Login from './Screens/Login';
import Categories from './Screens/Categories';
import Logo from './Components/ui/Logo';

// Ionicons (from vector icons API) import
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';

// Navigators initiallization
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// Constants
import Colors from './Assets/Colors';

// Bottom Tabs component
const BottomTabsComponent = () => {
	return (
		<BottomTabs.Navigator>
			{/* First screen - Search categories */}
			<BottomTabs.Screen
				name='searchCategories'
				component={Categories}
				options={{
					title: 'Search Categories',
					tabBarLabel: 'Explore new events',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='search-outline' size={size} color={color} />
					),
					// Omit the default header of the navigator
					headerShown: false,
				}}
			/>
			{/* Second screen -  */}
		</BottomTabs.Navigator>
	);
};

//	App component
export default function App() {
	return (
		<>
			<StatusBar style='auto' />
			{/* Navigation configurations */}
			<NavigationContainer>
				{/* The main navigator  */}
				<Stack.Navigator>
					{/* First Screen - Nested BottomTabs Navigator */}
					<Stack.Screen
						name='BottomTabsNavigation'
						component={BottomTabsComponent}
						options={{
							headerTitle: () => <Logo />,
							headerTitleAlign: 'center',
							headerStyle: {
								backgroundColor: Colors.PrimaryColor,
							},
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

//	App StyleSheet
const styles = StyleSheet.create({});
