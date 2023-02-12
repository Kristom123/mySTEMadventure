import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files
import SelectAccountTypeScreen from './screens/SelectAccountType';
import HomeScreen from './screens/Home';

{
  /* Create the stack for navigation */
}
const Stack = createNativeStackNavigator();

{
  /* App:
    Stack navigator to connect various screens
    Contains all the screens in the app
 */
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="path">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="SelectAccountType"
          options={{ headerShown: false }}
          component={SelectAccountTypeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}