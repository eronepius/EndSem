import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";


function RegistrationSucess(){
    const navigation = useNavigation();
    const handleNewLogin = () => {
        navigation.navigate("Login");
    }
    return(
        <View>
            <Text>
                Hey Student!
            </Text>
            <Text>
                Your Registration is Successful.
            </Text>
            <TouchableOpacity onPress={handleNewLogin}>
                <Text>Login Now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegistrationSucess;