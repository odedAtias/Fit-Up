//	Hooks imports
import { useFonts } from 'expo-font';
//  RN Core components & API imports
import { StyleSheet } from 'react-native';
//  Custom components imports
import Login from './Screens/Login';

//	App component
export default function App() {
	//	fonts loader
	const [fontsLoaded] = useFonts({
		Lato: require('./Assets/Fonts/Lato-Regular.ttf'),
	});

	return <Login />;
}

//	App StyleSheet
const styles = StyleSheet.create({});
