import React, {useState }from "react"
import {View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import axios from 'axios';

function NewStudent(){
    const navigation = useNavigation();
    const [newuser, setNewUser] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const handleUserIDChange = (e) => {
        setNewUser(e)
    }
    const handleUserPassChange = (e) => {
        setNewPassword(e)
    }
    const handleUserCpassChange = (e) => {
        setConfirmpassword(e)
    }
    const handleNewRegister = async() =>{
        const URL = "http://10.0.2.2:8000/api/register"
        let data = {
            "username": newuser,
            "newpassword" : newpassword,
            "confirmpassword" : confirmpassword
        };
        const resp = await axios.post(URL, data)
        navigation.navigate("Profile", {"registerid": newuser})
    }

    return(
        <View>
            <View style={Sheet.welcomeView}>
                <Text style={Sheet.welcomeText}>Welcome Student,</Text>
                <Text style={Sheet.welcomeTextStatement}>
                    We are excited as you are starting the journey with us.
                    Through out the next course of your Uni with us, we want to server
                    you the best, so register with us, so that we can personalize your journey.
                </Text>
            </View>
            <View style={Sheet.loginInputView}>
                <TextInput 
                style={Sheet.inputText}
                onChangeText={e=>{handleUserIDChange(e)}}
                placeholder="University ID"
                keyboardType="numeric"/>
                <TextInput 
                style={Sheet.inputText}
                onChangeText={e=>handleUserPassChange(e)}
                placeholder="New Password"
                secureTextEntry={true}
                keyboardType=""/>
                <TextInput 
                style={Sheet.inputText}
                onChangeText={e=>handleUserCpassChange(e)}
                placeholder="Confirm Password"
                secureTextEntry={true}/>
                <View style={Sheet.loginButtonView}>
                    <TouchableOpacity style={Sheet.loginButton} onPress={handleNewRegister}>
                        <Text style={Sheet.loginButtonText}>Register Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default NewStudent;


const Sheet = StyleSheet.create({
    welcomeView:{
        padding: 10,
        paddingRight: 20
    },
    welcomeText:{
        color:"#04A7A7",
        fontSize: 20,
        fontWeight:"bold",
        marginTop: 10,
    },
    welcomeTextStatement:{
        marginTop: 10,
        color:"#04A7A7",
        fontSize: 18,
        textAlign: "justify"
    },
    inputText:{
        borderBottomColor: "#000000",
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: 10,
        marginTop: 15
    },
    loginInputView:{
        padding: 25,
        
    },
    loginButtonView:{
        width: "50%",
        alignSelf: "center",
        padding: 15,
    },
    loginButton:{
        backgroundColor:"#04A7A7",
        height: "33%",
        borderRadius: 5
    },
    loginButtonText:{
        alignSelf:"center",
        color: "#FFFFFF",
        marginTop: 10,
        fontWeight:"900"
    }
})