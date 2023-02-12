import * as React from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';

// You can import from local files
import image from '../assets/selectaccount_background.png';

// import style sheet and color palette
const styles = require('../config/style');
import colors from '../config/colors';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background_image}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              //fontFamily: 'Barlow_Regular',
              fontSize: 26,
            }}>
            Start
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
