import React from "react"
import {Text, View, StyleSheet,ToastAndroid, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home({route},props){
    const navigation = useNavigation();
    const {name} = route.params || props.params;

    const handleWifi = () => {
        navigation.navigate("WifiForm")
        // {ToastAndroid.show("Wifi Registration Submitted", ToastAndroid.LONG)}
    }
    return(
        <View style={Sheet.homeView}>
            <Text style={Sheet.welcomeText}>Hello {name},</Text>
            <Text style={Sheet.thirukural}>இன்றைய திருக்குறள்: </Text>
            <Text style={Sheet.welcomeTextStatement}>{`கற்கக் கசடறக் கற்பவை கற்றபின் \nநிற்க அதற்குத் தக.`}</Text>
            <Text style={Sheet.thirukural}>விளக்கம்: </Text>
            <Text style={Sheet.welcomeTextStatement}>
            {`கற்பதற்குரிய தகுதியான நூல்களைப் பழுதில்லாமல் கற்க வேண்டும்; \nகற்றதன் பின்னர் கற்ற அக்கல்வியின் தகுதிக்குத் தகுந்தபடி நடக்கவும் வேண்டும்.`}
            </Text>
            <View>
                <Text style={Sheet.statement}>
                    Your have 6 hrs scheduled today.
                </Text>
                <Text style={Sheet.statement}>
                    4 Pending Assignments due date 5 Sept 2022.
                </Text>
            </View>
            <View style={Sheet.timetableview}>
                <Text style={Sheet.timetable}>Day : Thursday</Text>
                <Text style={Sheet.timetable}>8.30 AM - 9:30 AM : Big Data Using R</Text>
                <Text style={Sheet.timetable}>9.30 AM - 10:30 AM : Big Data Using R</Text>
                <Text style={Sheet.timetable}>10.30 AM - 11:30 AM : Advanced Java</Text>
                <Text style={Sheet.timetable}>11:30 AM - 12:30 PM : Data Analytics</Text>
                <Text style={Sheet.timetable}>1.30 PM - 2:30 PM : OS Lab</Text>
                <Text style={Sheet.timetable}>2.30 PM - 3:30 PM : OS Lab</Text>
                <Text style={Sheet.timetable}>3.30 PM - 4:30 PM : OS Lab</Text>
            </View>
            <View>
                <TouchableOpacity style={Sheet.loginButton} onPress={handleWifi}>
                        <Text style={Sheet.loginButtonText}>Wifi Registration</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Sheet = StyleSheet.create({
    homeView:{
        padding: 30
    },
    welcomeText:{
        color:"#04A7A7",
        fontSize: 22,
        fontWeight:"bold",
        marginTop: 10,
    },
    welcomeTextStatement:{
        marginTop: 10,
        color:"#04A7A7",
        fontSize: 16,
        textAlign: "justify"
    },
    thirukural:{
        color:"#000000",
        fontSize: 16,
        fontWeight:"bold",
        paddingTop:10
    },
    statement:{
        marginTop: 20,
        color:"#04A7A7",
        fontSize: 16,
        textAlign: "justify",
        fontSize: 16,
        fontWeight: "500"
    },
    timetableview : {
        padding: 10
    },
    timetable:{
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
        backgroundColor:"#04A7A7",
        height: "25%",
        borderRadius: 5
    },
    loginButtonText:{
        alignSelf:"center",
        color: "#FFFFFF",
        marginTop: 10,
        fontWeight:"900"
    }

})