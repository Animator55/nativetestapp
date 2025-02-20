
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons/faAppleAlt";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function Top (){
    return <View style={styles.topBar}>
        <View style={styles.title}>
            <FontAwesomeIcon icon={faAppleAlt} style={{fontSize: 25}}/>
            <Text style={{fontSize: 17}}>UserList Test</Text>
        </View>
        <Pressable
            onPress={()=>{
                console.log("a")
            }}
        >
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    padding: 15,
    paddingHorizontal: 22,
    backgroundColor: '#fff',
    justifyContent: "space-between",
    alignItems: "center",
},
title: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    fontSize: 22
  }
});
