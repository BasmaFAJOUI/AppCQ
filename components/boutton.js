import React from "react";
import { Text, StyleSheet, TouchableOpacity, View} from "react-native";

export default function Boutton({ text, onPress }){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor: '#FCF0DD',
        borderRadius: 10,
    },
    buttonText:{
        textAlign: 'center',
        fontFamily: 'Cairo_Bold',  
        fontSize: 18,
        color: '#415D29',
    },
})