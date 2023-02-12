import * as React from 'react';
import { useCallback, useState , useEffect, useRef} from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';
import * as MediaLibrary from "expo-media-library"
import { useFonts } from 'expo-font';

// You can import from local files
import image from '../assets/home_background.png';

// import style sheet and color palette
const styles = require('../config/style');
import colors from '../config/colors';
import { Camera } from 'expo-camera';

export default function Home({ navigation }) {
  {
    /* load the custom fonts */
  }
  const [fontsLoaded] = useFonts({
    Urbanist_Regular: require('../assets/Urbanist/static/Urbanist-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const [hasCameraPermission,setHasCameraPermissions] = useState(null);
  const [image,setImage] = useState(null);
  const [type,setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermissions(cameraStatus.status =='granted');
      })();
  },[])
  
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background_image}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Pressable
          style={[
            styles.button, { padding: 60, },
          ]}
          onPress={() => navigation.navigate('SelectAccountType')}>
          <Text
            style={{
              fontFamily: 'Urbanist_Regular',
              fontSize: 26,
              paddingHorizontal: 30,
            }}>
            START!
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
