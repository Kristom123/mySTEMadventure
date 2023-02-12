import * as React from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';

// You can import from local files
import square1 from '../assets/squares1.png';

// import style sheet and color palette
const styles = require('../config/style');
import colors from '../config/colors';

export default function LikesQuiz({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Pressable
                style={[
                    styles.button, { padding: 60, },
                ]}
                onPress={() => navigation.navigate('SelectAccountType')}>
                <ImageBackground source={square1} style={styles.background_image}>
                    <Text>yuh </Text>
                </ImageBackground>
            </Pressable>
        </View>
    );
}
