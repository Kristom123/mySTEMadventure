import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files
import IntroModuleScreen from './screens/IntroModule';
import TakePictureModuleScreen from './screens/TakePictureModule';
import CameraModuleScreen from './screens/CameraModule';
import FactsModuleScreen from './screens/FactsModule';

import HomeScreen from './screens/Home';
import SelectAccountTypeScreen from './screens/SelectAccountType';
import LikesQuizScreen from './screens/LikesQuiz';
import ParentDashboardScreen from './screens/ParentDashboard';

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
          name="IntroModule"
          options={{ headerShown: false }}
          component={IntroModuleScreen}
        />
        <Stack.Screen
          name="TakePictureModule"
          options={{ headerShown: false }}
          component={TakePictureModuleScreen}
        />
        <Stack.Screen
          name="CameraModule"
          options={{ headerShown: false }}
          component={CameraModuleScreen}
        />
        <Stack.Screen
          name="FactsModule"
          options={{ headerShown: false }}
          component={FactsModuleScreen}
        />
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
        <Stack.Screen
          name="LikesQuiz"
          options={{ headerShown: false }}
          component={LikesQuizScreen}
        />
        <Stack.Screen
          name="ParentDashboard"
          options={{ headerShown: false }}
          component={ParentDashboardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}