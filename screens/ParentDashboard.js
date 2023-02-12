import * as React from 'react';
import { useCallback, useState } from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

// You can import from local files
import image from '../assets/parentdashboard.png';

// import style sheet and color palette
const styles = require('../config/style');
import colors from '../config/colors';

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

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background_image}>
      </ImageBackground>
    </View>
  );
}
