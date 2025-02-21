
import { Pressable, StyleSheet, View } from 'react-native';
import NavBar from '../components/NavBar';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Camera } from 'expo-camera'


export default function CameraPage() {
    const [cameraState, setCamera] = React.useState(false)
    const __startCamera = async () => {
        const { status } = await Camera.requestPermissionsAsync()
        if (status === 'granted') {
            setCamera(true)

        } else {
            Alert.alert("Access denied")
        }
    }
    const insets = useSafeAreaInsets()

    const currentPage = "camera"
    let camera
    return <View style={{
        ...styles.container, paddingTop: insets.top,
        //   paddingBottom: insets.bottom
    }}>
        {cameraState ?
            <Pressable onPress={()=>{
                __startCamera()
            }}>
                <Text>Activate Camera</Text>
            </Pressable>
            :
            <Camera
                style={{ flex: 1, width: "100%" }}
                ref={(r) => {
                    camera = r
                }}
            ></Camera>
        }
        <NavBar currentPage={currentPage} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});