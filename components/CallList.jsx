import { faArrowLeft, faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function CallList({ list }) {
    return !list ? 
    <ActivityIndicator color="fff" size="large"/>
    : <FlatList
        style={styles.userList}
        keyExtractor={item => item._id}
        data={list}
        renderItem={(el) => <UserItem data={el.item} />}
    /> 
}

const UserItem = ({ data }) => {
    return <Pressable style={styles.userItem}>
        <View style={{ ...styles.userImage, backgroundColor: data.image }}></View>
        <View>
            <Text style={{ color: "#000" }}>{data.name}</Text>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center", gap: 7}}>
                <FontAwesomeIcon color={data.duration === "" ? "red": "#2f3"} icon={data.madeBy !== "You" ? faArrowLeft : faArrowRight}/>
                <Text style={{opacity: .4}}>{data.phone}</Text>
            </View>
        </View>
        <View style={{opacity: .7,flex: 1, flexDirection: "column",justifyContent: "flex-start", alignItems: "flex-end", marginLeft: "auto"}}>
            <Text style={{fontSize: 13}}>{data.timestamp}</Text>
            <Text style={{fontSize: 13}}>{data.duration}</Text>
        </View>
        <Pressable style={{paddingHorizontal: 7}}>
            <FontAwesomeIcon icon={faPhone}/>
        </Pressable>
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