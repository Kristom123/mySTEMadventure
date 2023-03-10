import * as React from 'react';
import { Image, ImageBackground, TouchableOpacity, Text, View } from 'react-native';

// You can import from local files
import square1 from '../assets/squares1.png';

// import style sheet and color palette
const styles = require('../config/style');
import colors from '../config/colors';

export default function LikesQuiz({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('SelectAccountType')}>
                <Image source={require('../assets/squares1.png')} />
            </TouchableOpacity>
        </View>
    );
}
