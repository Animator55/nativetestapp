
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function NavBar ({currentPage}){
    const style = {color: currentPage === "list" ? "blue" : "currentColor"}

    return <View style={styles.main}>
        <Pressable style={{...styles.routerButton,
            color: currentPage === "camera" ? "blue" : "currentColor"
        }}>
            <FontAwesomeIcon icon={faCamera}/>
            <Text>Upload</Text>
        </Pressable>
        <Pressable style={styles.routerButton}>
            <FontAwesomeIcon icon={faUsers} style={style}/>
            <Text style={style}>Contacts</Text>
        </Pressable>
        <Pressable style={{...styles.routerButton,
            color: currentPage === "phone" ? "blue" : "currentColor"
        }}>
            <FontAwesomeIcon icon={faPhone}/>
            <Text>Calls</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    main : {
        marginTop: "auto",
        flexDirection: "row",
        padding: 15,
        backgroundColor: '#fff',
        justifyContent: "space-between",
    },
    routerButton:{
        flex: 1,
        alignItems: "center",
        gap: 7,
        width: "fit-content"
    }
})