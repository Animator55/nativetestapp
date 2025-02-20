import { faArrowLeft, faEllipsisVertical, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React from "react"
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import fixNum from "../fixNum"
import { messagePh } from "../defaults/messagePh"

const newMessage = (value, owner) => {
    let date = new Date()
    return {
        _id: `${Math.random()}`, text: value,
        timestamp: fixNum(date.getHours()) +":"+fixNum(date.getMinutes()),
        owner: owner
    }
}

export default function Chat({ user, setUser }) {
    const [messages, setMessages] = React.useState([])
    const inputRef = React.useRef(null)

    const ChatHead = () => {
        return <View style={styles.chatTop}>
            <Pressable style={styles.backButton} onPress={() => { setUser(undefined) }}>
                <FontAwesomeIcon icon={faArrowLeft} />
                <View style={{ ...styles.userImage, backgroundColor: user.image }}></View>
            </Pressable>
            <Pressable>
                <Text>{user.name}</Text>
                <Text>{user.status}</Text>
            </Pressable>
            <Pressable style={{ marginLeft: "auto", paddingHorizontal: 7 }}>
                <FontAwesomeIcon icon={faPhone} />
            </Pressable>
            <Pressable style={{ paddingHorizontal: 7 }}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </Pressable>
        </View>
    }
    const handleTextChange = (text) => {
        inputRef.current.value = text;
    };

    const sendMessage = () => {
        if (!inputRef.current|| inputRef.current.value === "") return
        let value = inputRef.current.value
        let newValue = [...messages, newMessage(value, "user")]
        setMessages(newValue)
        if(user.status === "online") setTimeout(()=>{
            let random = Math.round(Math.random() * messagePh.length)
            setMessages([...newValue, newMessage(messagePh[random], "other")])
        }, 100)
    }

    const InputZone = () => {
        return <View style={styles.inputZone}>
            <TextInput style={styles.input} ref={inputRef} onChangeText={handleTextChange} defaultValue="" onSubmitEditing={sendMessage} placeholder="Type here" />
            <Pressable style={styles.send} onPress={sendMessage}>
                <FontAwesomeIcon icon={faPaperPlane} color="#fff" />
            </Pressable>
        </View>
    }

    const Message = ({ data }) => {
        return <View style={{...styles.message, marginLeft: data.owner === "user" ? "auto": "",marginRight: data.owner === "other" ? "auto": ""}}>
            <Text>{data.text}</Text>
            <Text style={styles.date}>{data.timestamp}</Text>
        </View>
    }

    const MessagesList = () => {
        return <FlatList
            style={styles.messageList}
            data={messages}
            keyExtractor={message => message._id}
            renderItem={(item) => <Message data={item.item} />}
        />
    }

    return <>
        <ChatHead />
        <MessagesList />
        <InputZone />
    </>
}

const styles = StyleSheet.create({
    chatTop: {
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        gap: 8,
        padding: 15,
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        width: "fit-content"
    },

    userImage: {
        width: 45,
        height: 45,
        boxShadow: "0 0 3px black",
        borderRadius: "50%",
        borderWidth: 3,
        borderColor: "transparent"
    },
    inputZone: {
        width: "100%",
        marginTop: "auto",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        padding: 8,
    },
    input: {
        backgroundColor: "lightgray",
        borderRadius: 7,
        padding: 9,
        fontSize: 13,
        width: "80%",
    },
    send: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        minWidth: "10%",
        padding: 10
    },

    messageList : {
        flex: 1,
    },

    message: {
        flex: 1,
        flexDirection: "row",
        padding: 8,
        alignItems: "flex-end",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        gap: 8,
        maxWidth: "70%",
        backgroundColor: "lightgray",
        borderRadius: 7,
        margin: 3,
        marginHorizontal: 8,
    },
    date: {
        fontSize: 11,
        opacity: .7,
    }
})