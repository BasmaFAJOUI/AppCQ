import { NavigationContainer } from  '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './Screens/FirstScreen';
import HomeScreen from './Screens/Home';
import Home from './Screens/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FirstScreen} options={{headerShown:false}}/>
        <Stack.Screen name="destination" component={HomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
