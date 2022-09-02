import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, ToastAndroid} from "react-native"
import { useNavigation } from "@react-navigation/native";

export default function WifiForm(){
    const navigation = useNavigation();

    const handleOkWifi = () => {
        {ToastAndroid.show("Wifi Registration Submitted", ToastAndroid.LONG)}
        navigation.navigate("Home", {"name": "Anton"});
    }
    return(
        <View style={Sheet.WifiView}>
            <Text style={Sheet.logoText}>Wifi Registration Form</Text>
            <Text style={Sheet.wifitext}>MAC Address : 68-07-15-19-72-93</Text>
            <Text style={Sheet.wifitext}>I hearby Certify that the information provided is true and can be 
                verified anything by any authorized authority</Text>
                <View>
                <TouchableOpacity style={Sheet.loginButton} onPress={handleOkWifi}>
                        <Text style={Sheet.loginButtonText}>Wifi Registration</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Sheet = StyleSheet.create({
    WifiView:{
        padding: 20
    },logoText:{
        fontSize: 30,
        alignSelf: "center",
        color: "#04A7A7",
        fontWeight: "800",
        marginTop: 10
    },
    wifitext:{
        color:"#000000",
        fontSize: 16,
        fontWeight:"bold",
        paddingTop:10
    },
    loginButtonView:{
        width: "50%",
        alignSelf: "center",
        padding: 15,
    },
    loginButton:{
        
        marginTop: 30,
        backgroundColor:"#04A7A7",
        height: "35%",
        borderRadius: 5
    },
    loginButtonText:{
        alignSelf:"center",
        color: "#FFFFFF",
        marginTop: 10,
        fontWeight:"900"
    }
})