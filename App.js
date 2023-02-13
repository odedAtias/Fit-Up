import { StatusBar } from 'expo-status-bar';

// Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//  RN Core components & API imports
import { StyleSheet, Text } from 'react-native';

//  Custom components imports

import Categories from './Screens/Categories';
import Logo from './Components/ui/Logo';

// Ionicons (from vector icons API) import
import { Ionicons } from '@expo/vector-icons';

// Navigators initiallization
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// Constants
import Colors from './Assets/Colors';

//	App component
export default function App() {
	return <Logo imageWidth={170} imageHeight={120} />;
}

//	App StyleSheet
const styles = StyleSheet.create({});
