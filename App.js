import React, {useState, useEffect, useRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera,CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

// You can import from local files
import HomeScreen from './screens/Home';
import SelectAccountTypeScreen from './screens/SelectAccountType';
import LikesQuizScreen from './screens/LikesQuiz';
import { View } from 'react-native';
import TestPageCamera from './screens/TestPageCamera';

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
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const[image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash,setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  
  useEffect(() => {
    (async () => { 
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status == 'granted');
    })();
  },[])

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
        <Stack.Screen
          name="LikesQuiz"
          options={{ headerShown: false }}
          component={LikesQuizScreen}
        />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}