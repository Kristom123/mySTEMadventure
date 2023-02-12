import { CurrentRenderContext } from "@react-navigation/native";
import { Camera } from "expo-camera";
import { View } from "react-native";
import Button from "../assets/component/Button";

export default function CameraFeature({ navigation }) {
    {}
    const cameraRef = useRef(null);
    return (
       <View style = {styles.container}>
            <Camera
                styles = {styles.camera}
                type = {type}
                flashMode = {flash}
                ref = {cameraRef}
            />
            <View>
                <Button title = {'Take a picture'} icon = "camera"/>
            </View>
       </View>
      );
    }
    

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#000',
            justifyContent: 'center',
        },
        camera: {
            flex: .75,
            borderRadius: 20,
        }
    });