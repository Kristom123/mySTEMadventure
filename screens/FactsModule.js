import * as React from 'react';
import { useCallback, useState } from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

// You can import from local files
import image from '../assets/facts_background.png';

// import style sheet and color palette
const styles = require('../config/style');
import colors from '../config/colors';

export default function IntroModule({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.background_image}>
            </ImageBackground>
        </View>
    );
}
