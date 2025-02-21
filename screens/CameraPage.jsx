import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import NavBar from '../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function CameraPage () {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
      console.log('pic:', photo.uri);
    }
  };

  if (hasPermission === null) {
    return <View style={styles.container}>
        <Text>Requesting access...</Text>
    </View>
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>Access not granted</Text>
        <Pressable
          onPress={async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Allow Access</Text>
        </Pressable>
      </View>
    );
  }

  let currentPage = "camera"

  return (
    <View style={styles.container}>
      {/* <Camera ref={cameraRef} style={styles.camera} /> */}
      <Text style={styles.text}>Camera not available</Text>
      <NavBar currentPage={currentPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: "black", },
  camera: { flex: 1 },
  button: { backgroundColor: 'transparent', padding: 15, margin: 20, borderRadius: 10, alignItems: 'center' },
  text: { color: 'white', fontSize: 16, margin: "auto" },
  previewText: { textAlign: 'center', marginTop: 10, color: 'gray' },
});

