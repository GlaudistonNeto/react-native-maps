import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from "./src/screen/MapScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: "Start",
            headerStyle: {
              backgroundColor: "#222",
            },
            headerTintColor: "#fff",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
