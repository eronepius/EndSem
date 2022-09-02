import React,{useState}from "react"
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from "./components/Tabnav";

const Stack = createNativeStackNavigator();

import Login from "./components/Login";
import NewStudent from "./components/NewStudent";
import RegistrationSucess from "./components/RegistrationSuccess";
import ProfileSetup from "./components/ProfileSetup";
import Home from "./components/Home";
import WifiForm from "./components/Wifiform";

function App(){
  const [user, setUser] = useState({});
  return(
    <NavigationContainer > 
      <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen name="Login">
        {(props) => <Login {...props} params={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="New Student" component={NewStudent} />
        <Stack.Screen name="RSuccess" component={RegistrationSucess} />
        <Stack.Screen name="Profile" component={ProfileSetup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WifiForm" component={WifiForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// style={Sheet.bottomNav}

export default App;

const Sheet = StyleSheet.create({
  bottomNav : {
    flex: 1,
    justifyContent: 'flex-end',
  }
})