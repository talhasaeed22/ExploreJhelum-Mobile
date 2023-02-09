import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Login from './components/Auth/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './components/Auth/Signup';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Signup" component={Signup} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;