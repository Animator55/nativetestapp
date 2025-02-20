import React from "react";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Chat from "./Chat";

export default function UserList({ list, setUser }) {
    return !list ? 
    <ActivityIndicator color="fff" size="large"/>
    : <FlatList
        style={styles.userList}
        keyExtractor={item => item._id}
        data={list}
        renderItem={(el) => <UserItem data={el.item} setUser={setUser} />}
    /> 
}

const UserItem = ({ data, setUser }) => {
    return <Pressable style={styles.userItem} onPress={()=>{setUser(data)}}>
        <View style={{ ...styles.userImage, backgroundColor: data.image }}>
            <View style={{...styles.userLine, opacity:(data.status === "online" ? 1:0)}}></View>
        </View>
        <Text style={{ color: "#000" }}>{data.name}</Text>
    </Pressable >
}


const styles = StyleSheet.create({
    userList: {
        width: "100%",
    },
    userItem: ({pressed})=>[{
        backgroundColor: pressed ? "#00000012": "transparent",
        flex: 1,
        flexDirection: "row",
        padding: 7,
        paddingHorizontal: 15,
        gap: 15,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray"
    }],
    userImage: {
        width: 45,
        height: 45,
        borderRadius: "50%",
        borderWidth: 3,
        position: "relative",
        borderColor: "transparent"
    },
    userLine : {
        flex: 1,
        borderWidth: 2,
        borderColor: "#fff",
        position: "absolute",
        right: -2,
        bottom: -2,
        zIndex:2,
        width: 15,
        height: 15,
        borderRadius: "50%",
        backgroundColor: "#2f3",
    }
});