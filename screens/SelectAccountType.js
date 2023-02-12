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
      <View style={{flex: 1}}/>
        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{
            fontFamily: 'Urbanist_Regular',
            fontSize: 26,
          }}>
            I am the...
          </Text>
          <Text style={{padding: 10}}></Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text
              style={{
                fontFamily: 'Urbanist_Regular',
                fontSize: 26,
              }}>
              Parent
            </Text>
          </Pressable>
          <Text style={{padding: 2}}></Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('LikesQuiz')}>
            <Text
              style={{
                fontFamily: 'Urbanist_Regular',
                fontSize: 26,
              }}>
              Child
            </Text>
          </Pressable>
        </View>
        <View style={{flex: 1}}/>
      </ImageBackground>
    </View>
  );
}
