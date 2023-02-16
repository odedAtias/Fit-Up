import { StatusBar } from 'expo-status-bar';

// Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//  RN Core components & API imports
import { View } from 'react-native';

//  Custom components imports
import Categories from './Screens/Categories';
import Logo from './Components/ui/Logo';
import Login from './Screens/Login';
import RegisteredEvents from './Screens/RegisteredEvents';
import PersonalDetails from './Screens/PersonalDetails';
import Favorites from './Screens/Favorites';

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
		<BottomTabs.Navigator
			screenOptions={{
				tabBarActiveTintColor: Colors.SecondaryColor,
				tabBarActiveBackgroundColor: Colors.PrimaryColor,
			}}>
			{/* Search events screen */}
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
				}}
			/>

			{/* Favorites screen */}
			<BottomTabs.Screen
				name='Favorites'
				component={Favorites}
				options={{
					headerShown: false,
					tabBarIcon: ({ size }) => (
						<Ionicons
							name='star-sharp'
							size={size}
							color={Colors.SecondaryColor}
						/>
					),
				}}
			/>
			{/* My registered events sreen */}
			<BottomTabs.Screen
				name='RegisteredEvents'
				component={RegisteredEvents}
				options={{
					headerShown: false,
					tabBarIcon: ({ size }) => (
						<Ionicons
							name='calendar-sharp'
							size={size}
							color={Colors.SecondaryColor}
						/>
					),
				}}
			/>
			{/* Personal details screen */}
			<BottomTabs.Screen
				name='PersonalDetails'
				component={PersonalDetails}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='person-sharp'
							size={size}
							color={Colors.SecondaryColor}
						/>
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};

// Header component
const Header = () => (
	<View
		style={{
			backgroundColor: Colors.PrimaryColor,
			padding: '25%',
			paddingBottom: '17%',
		}}>
		<Logo imageWidth={200} imageHeight={120} />
	</View>
);

//	App component
export default function App() {
	let num = 2;
	if (num == 1)
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Login />
			</View>
		);
	return (
		<>
			<StatusBar style='light' />
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
						component={BottomTabsComponent}></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
