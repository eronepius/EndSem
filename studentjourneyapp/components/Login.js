import React, {useState} from "react";
import {View, Image, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView} from "react-native";
import Logo from "./assets/logo.png"
import { useNavigation } from "@react-navigation/native";
import axios from "axios"

const LOGO_IMAGE = Image.resolveAssetSource(Logo).uri

function Login(props){
    const [user, setTUser] = useState("");
    const [pass, setPass] = useState("");
    const navigation = useNavigation()
    const setUser = props.params;

    const handleUser =(e) =>{
        setTUser(e);
    }

    const handlePass = (e) =>{
        setPass(e)
    }

    const handleNewStudent = () => {
        navigation.navigate("New Student");
    }
    const handleLogin = () =>{
        navigation.navigate("Home", {"name": "Anton"})
    }
    return(
        <ScrollView>
            <Text style={Sheet.logoText}>Student Journey</Text>
            <Image style={Sheet.logoImage} source={{uri: LOGO_IMAGE}} />
            <View style={Sheet.loginInputView}>
                <View style={Sheet.uniView}>
                    <Text style={Sheet.labelText}>University ID</Text>
                    <Text 
                        style={Sheet.newStudText}
                        onPress={handleNewStudent}>New Student?</Text>
                </View>
                <TextInput
                onChangeText={e=>{handleUser}}
                style={Sheet.inputText}
                placeholder="University ID"
                keyboardType="numeric"/>
                <TextInput 
                onChangeText={e=>{handlePass}}
                style={Sheet.inputText}
                placeholder="Password"
                secureTextEntry={true}/>
                <View style={Sheet.loginButtonView}>
                    <TouchableOpacity style={Sheet.loginButton} onPress={handleLogin}>
                        <Text style={Sheet.loginButtonText}>My Journey</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login;

const Sheet = StyleSheet.create({

    logoImage: {
        width: 300,
        height: 300,
        alignSelf: "center",
        marginTop: 30
    },
    logoText:{
        fontSize: 40,
        alignSelf: "center",
        color: "#04A7A7",
        fontWeight: "800",
        marginTop: 10
    },
    uniView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding: 5
    },
    newStudText:{
        color:"#000000",
        fontSize:15,
        marginTop: 11
    },
    labelText:{
        fontSize: 25,
        color: "#04A7A7",
        fontWeight: "500",
        padding: 3,
    },
    inputText:{
        borderBottomColor: "#000000",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        marginTop: 5
    },
    loginInputView:{
        padding: 5,
        
    },
    loginButtonView:{
        width: "50%",
        alignSelf: "center",
        padding: 15,
    },
    loginButton:{
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

