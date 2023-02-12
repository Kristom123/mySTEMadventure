import * as React from 'react';
import { useCallback, useState } from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

// You can import from local files
import image from '../assets/intro_background.png';

// import style sheet and color palette
const styles = require('../config/style');
import colors from '../config/colors';

export default function IntroModule({ navigation }) {
    {
        /* load the custom fonts */
    }
    const [fontsLoaded] = useFonts({
        Urbanist_Regular: require('../assets/Urbanist/static/Urbanist-Regular.ttf'),
        Urbanist_Semibold: require('../assets/Urbanist/static/Urbanist-SemiBold.ttf'),
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
                <View style={{ flex: 1.02 }} />
                <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', padding: 20 }}>
                    <Pressable
                        onPress={() => navigation.navigate('LikesQuiz')}>
                        <Image source={require('../assets/imready.png')} style={{width: 233, resizeMode: 'contain',}}/>
                    </Pressable>
                </View>
                <View style={{ flex: 0.5 }} />
            </ImageBackground>
        </View>
    );
}
