import * as React from 'react';
import { useCallback, useState } from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

// You can import from local files
import image from '../assets/camera_background.png';

// import style sheet and color palette
const styles = require('../config/style');
import colors from '../config/colors';

export default function IntroModule({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.background_image}>
                <View style={{ flex: 5.7 }} />
                <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', padding: 2 }}>
                    <Pressable
                        onPress={() => navigation.navigate('FactsModule')}>
                        <Image source={require('../assets/foundit.png')} style={{width: 240, resizeMode: 'contain',}}/>
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate('FactsModule')}>
                        <Image source={require('../assets/triedbest.png')} style={{width: 240, resizeMode: 'contain',}}/>
                    </Pressable>
                </View>
                <View style={{ flex: 0.5 }} />
            </ImageBackground>
        </View>
    );
}
