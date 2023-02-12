import { CurrentRenderContext} from "@react-navigation/native";
import { Camera } from "expo-camera";
import { View } from "react-native";
import { StyleSheet,Text,View, Image } from "react-native";
import Button from "../assets/component/Button";
import  {useRef} from 'react';


export default function CameraFeature({ navigation }) {
    {}
    const cameraRef = useRef(null);
    
    if (hasCameraPermission ===false){
        return <Text> No access to Camera </Text>
    }
    return (
       <View style = {styles.container}>
        {!image ? 
            <Camera
                styles = {styles.camera}
                type = {type}
                flashMode = {flash}
                ref = {cameraRef}
            >  
            </Camera>
            :
            <Image source = {{url: image}} style = {styles.camera}/>
        }
            <View>
                {image ? 
                <View style = {{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 50
                }}>
                    <Button title = {'Save'} icon = "check" />  
                </View>
                :
                <Button title = {'Take a picture'} icon = "camera" onPress = {takePicture}/> 
            } 
            </View>
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