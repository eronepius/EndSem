import React from "react";
import {View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";


function ProfileSetup({route}){
    const navigation = useNavigation();
    const { registerid } = route.params;
    const handleOnPress = () =>{
        navigation.navigate("Home",{"name": "Anton"});
    }
    return(
        <View>
            <Text style={Sheet.profileText}>Setup Your Profile</Text>
           
            <View style={Sheet.registerNoView}>
                <View>
                    <Text style={Sheet.allText}>Register No : </Text>
                    <Text style={Sheet.allText}>Name :  </Text>
                    <Text style={Sheet.allText}>Course Enrolled : </Text>
                    <Text style={Sheet.allText}>Department : </Text>
                    <Text style={Sheet.allText}>Faculty Advisor :</Text>
                </View>
                <View>
                    <TextInput editable={false} style={Sheet.allInputText}>{registerid}</TextInput>
                    <TextInput style={Sheet.allInputText}>Anton Erone Pius </TextInput>
                    <TextInput style={Sheet.allInputText}>MCA</TextInput>
                    <TextInput style={Sheet.allInputText}>Department of Information Science & Tech</TextInput>
                    <TextInput style={Sheet.allInputText}>Dr. F. Kennedy </TextInput>
                </View>
            </View>
            <View style={Sheet.loginButtonView}>
                <TouchableOpacity style={Sheet.loginButton} onPress={handleOnPress}><Text style={Sheet.buttonText}>Take Me to Home</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileSetup;

const Sheet = StyleSheet.create({
    profileText:{
        fontSize: 40,
        alignSelf: "center",
        color: "#04A7A7",
        fontWeight: "800",
        marginTop: 10
    },
    profileView:{
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        color:"#04A7A7",
    },
    registerNoView:{
        marginTop: 30,
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        padding: 5
    },
    allText:{
        color:"#04A7A7",
        fontSize: 18,
        letterSpacing: 2,
        lineHeight: 51
    },
    allInputText:{
        fontSize: 18,
        borderBottomColor: "#000000",
        borderBottomWidth: 2,
        width: 200
    },
    loginButtonView:{
        width: "50%",
        alignSelf: "center",
        padding: 15,
    },
    loginButton:{
        alignSelf: "center",
        backgroundColor:"#04A7A7",
        height: "25%",
        width: '75%',
        borderRadius: 5,
        paddingTop: 5,
        paddingLeft: 5
    },
    buttonText:{
        fontWeight:"700",
        color: "#FFFFFF"
    }

})