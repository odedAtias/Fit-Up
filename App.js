import { StatusBar } from 'expo-status-bar';

// Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//  RN Core components & API imports
import { StyleSheet, View } from 'react-native';

//  Custom components imports
import Categories from './Screens/Categories';
import Logo from './Components/ui/Logo';

// Ionicons (from vector icons API) import
import { Ionicons } from '@expo/vector-icons';

// Navigators initiallization
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// Constants variables
import Colors from './Assets/Colors';

// BottomTab component (The nested navigator component)
const BottomTabsComponent = () => {
	return (
		<BottomTabs.Navigator>
			<BottomTabs.Screen
				name='Categories'
				component={Categories}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='search-sharp'
							size={size}
							color={Colors.SecondaryColor}
						/>
					),
					tabBarActiveTintColor: Colors.SecondaryColor,
				}}
			/>
		</BottomTabs.Navigator>
	);
};

// Header component
const Header = () => (
	<View
		style={{
			height: '10%',
			backgroundColor: Colors.PrimaryColor,
			padding: '20%',
			paddingBottom: '17%',
		}}>
		<Logo imageWidth={180} imageHeight={100} />
	</View>
);

//	App component
export default function App() {
	return (
		<>
			<StatusBar style='auto' />
			{/* Navigation configurations */}
			<NavigationContainer>
				{/* The main navigator */}
				<Stack.Navigator
					screenOptions={{
						header: Header,
					}}>
					{/* First Screen - Nested BottomTab Navigator*/}
					<Stack.Screen
						name='BottomTabsComponent'
						component={BottomTabsComponent}
						options={{}}></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
