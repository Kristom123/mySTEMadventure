import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraFeature() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    const takePicture = async () => {
        if(cameraRef){
            try{
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.url);
            }
            catch(e){
                console.log(e);
            }
        }
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={takePicture}>
                        <Text style={styles.text}>Take Picture</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
