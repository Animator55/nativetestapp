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
        <View style={{ ...styles.userImage, backgroundColor: data.image, borderColor:(data.status === "online" ? "#2f3" : "white") }}></View>
        {/* <View style={{}}></View> */}
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
        boxShadow: "0 0 3px black",
        borderRadius: "50%",
        borderWidth: 3,
        borderColor: "transparent"
    }
});