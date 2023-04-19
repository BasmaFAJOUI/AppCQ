//import "react-native-gesture-handler"; //this should be the first import in your code
//import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { createDrawerNavigator } from "@react-navigation/drawer";

import { NavigationContainer } from  '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import FirstScreen from './Screens/FirstScreen';
import HomeScreen from './Screens/Home';
//import Home from './Screens/Home';
import Article from './Screens/Article';
import ContactUs from "./components/about";
import { MainStackNavigator } from "./navigation";
import DrawerNavigatori from "./drawernavigation";



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>

<DrawerNavigatori />

    
    </NavigationContainer>

    
  )
};
