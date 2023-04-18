import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Profile, Recipes, Storage, Suppliers } from "./screens";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator nitialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Recipes" component={Recipes} />
        <Stack.Screen name="Storage" component={Storage} />
        <Stack.Screen name="Suppliers" component={Suppliers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
