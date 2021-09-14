import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home, VideoScreen, VideoRecorder } from './src/components/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from './src/utils'
const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name={ScreenNames.HOME} component={Home} />
        <Stack.Screen name={ScreenNames.VIDEOSCREEN} component={VideoScreen} />
        <Stack.Screen name={ScreenNames.VIDEOREORDING} component={VideoRecorder} />

      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;