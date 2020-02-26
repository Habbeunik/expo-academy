import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home';
import BrowserScreen from './src/screens/browser';
import { SplashScreen } from 'expo';
import MainScreen from './src/screens/main';

const Stack = createStackNavigator();

export default function App() {

  React.useEffect(() => {
    SplashScreen.preventAutoHide();
    setTimeout(SplashScreen.hide, 3000)
  }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Browser" component={BrowserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

