import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home, VideoScreen } from './src/components/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="none" component={Home} />
        <Stack.Screen name="videoScreen" component={VideoScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;