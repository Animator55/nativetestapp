
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function NavBar ({currentPage}){
    const buttons = {
        "camera": {icon: faCamera, text: "Upload"},
        "list": {icon: faUsers, text: "Contacts"},
        "calls": {icon: faPhone, text: "Calls"},
    }

    return <View style={styles.main}>
        {Object.keys(buttons).map(el=>{
            const style = {color: currentPage === el ? "blue" : "black"}
            return <Link key={Math.random()} asChild href={el === "list" ? "/" : ("/"+el)}>
            <Pressable style={styles.routerButton}>
                <FontAwesomeIcon icon={buttons[el].icon} style={style}/>
                <Text style={style}>{buttons[el].text}</Text>
            </Pressable>
        </Link>
        })}
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