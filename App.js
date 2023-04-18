import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Profile, Recipes, Storage, Suppliers } from "./screens";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          options={{
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
          name="Storage"
          component={Storage}
        />
        <Tab.Screen name="Recipes" component={Recipes} />
        <Tab.Screen name="Suppliers" component={Suppliers} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
