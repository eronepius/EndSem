import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dummy from "./Dummy";
import Home from "./Home";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home">
              {(props) => <Home {...props} params={"Anton"} />}
            </Tab.Screen>
            <Tab.Screen name="Settings">
            {(props) => <Home {...props} params={"Anton"} />}
            </Tab.Screen>
        </Tab.Navigator>
  );
}

export default MyTabs;