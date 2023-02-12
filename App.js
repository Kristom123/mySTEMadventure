import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home_background from './assets/home_background.png';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={home_background} style={styles.background_image}>
        <Text style={styles.text}>Elements</Text>
        <Text style={styles.text}>in Front of</Text>
        <Text style={styles.text}>Background</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  background_image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
