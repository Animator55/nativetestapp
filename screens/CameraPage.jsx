
import { StyleSheet, View } from 'react-native';
import NavBar from '../components/NavBar';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function CameraPage() {
    const insets = useSafeAreaInsets()

    const currentPage = "camera"

    return <View style={{
        ...styles.container, paddingTop: insets.top,
        //   paddingBottom: insets.bottom
    }}>
        <NavBar currentPage={currentPage} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});