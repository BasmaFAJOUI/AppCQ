//import { createDrawerNavigator } from "@react-navigation/drawer";

import { NavigationContainer } from  '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import FirstScreen from './Screens/FirstScreen';
import HomeScreen from './Screens/Home';
//import Home from './Screens/Home';
import Article from './Screens/Article';
import ContactUs from "./components/about";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
<Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FirstScreen} options={{headerShown:false}}/>
        <Stack.Screen name="destination" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="article" component={Article} options={{headerShown:false}}/>
        </Stack.Navigator>
  );
}

export { MainStackNavigator };