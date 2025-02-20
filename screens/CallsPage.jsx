
import { Pressable, StyleSheet, View } from 'react-native';
import Top from '../components/Top';
import NavBar from '../components/NavBar';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faPlus } from '@fortawesome/free-solid-svg-icons';
import { callList } from '../defaults/callList';
import CallList from '../components/CallList';


export default function CallsPage() {
    const [list, setList] = React.useState(undefined)
    React.useEffect(() => {
        if (!list) setList(callList)
    }, [])
    const insets = useSafeAreaInsets()

    const currentPage = "calls"

    return <View style={{
        ...styles.container, paddingTop: insets.top,
        //   paddingBottom: insets.bottom
    }}>
        <Top />
        <View style={styles.content}>
            <CallList list={list}/>
            <Pressable style={styles.call}>
                <FontAwesomeIcon style={styles.Plus} icon={faPhone} color='#fff'/>
            </Pressable>
        </View>
        <NavBar currentPage={currentPage} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    call: {
        flex: 1,
        backgroundColor: "#2f3",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 15,
        right: 15,
        width: 50,
        height: 50
    },
    content: {
        flex: 1,
        position: 'relative',
    },
    Plus: {
        width: 25,
        height: 25,
    }
});