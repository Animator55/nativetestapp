
import { Pressable, StyleSheet, View } from 'react-native';
import Top from '../components/Top';
import NavBar from '../components/NavBar';
import React from 'react';
import { userList } from '../defaults/userList';
import UserList from '../components/UserList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Chat from '../components/Chat';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


export default function Main() {
    const [list, setList] = React.useState(undefined)
    const [user, setUser] = React.useState(
        undefined
        // {
        //     "_id": "67b643fe72c80138de7cd22f",
        //     "status": "online",
        //     "image": "rgb(222, 28, 3)",
        //     "name": "Lupe Garrison",
        //     "phone": "+1 (998) 452-3392"
        // }
    )
    React.useEffect(() => {
        if (!list) setList(userList)
    }, [])
    const insets = useSafeAreaInsets()

    const currentPage = "list"

    return <View style={{
        ...styles.container, paddingTop: insets.top,
        //   paddingBottom: insets.bottom
    }}>
        {!user ? <>
            <Top />
            <View style={styles.content}>
                <UserList list={list} setUser={setUser} />
                <Pressable style={styles.AddContact}>
                    <FontAwesomeIcon style={styles.Plus} icon={faPlus} color='#fff'/>
                </Pressable>
            </View>
            <NavBar currentPage={currentPage} />
        </>
            :
            <Chat user={user} setUser={setUser} />
        }
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    AddContact: {
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