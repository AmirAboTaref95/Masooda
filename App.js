import * as React from "react";

import { View, Image } from "react-native";

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
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image
                    source={require("./assets/Icons/home_FILL0_wght400_GRAD0_opsz48.png")}
                    resizeMode="contain"
                    style={{ width: 25, tintColor: "#000000" }}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Storage"
          component={Storage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image
                    source={require("./assets/Icons/shelves_FILL0_wght400_GRAD0_opsz48.png")}
                    resizeMode="contain"
                    style={{ width: 25, tintColor: "#000000" }}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Recipes"
          component={Recipes}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image
                    source={require("./assets/Icons/food_bank_FILL0_wght400_GRAD0_opsz48.png")}
                    resizeMode="contain"
                    style={{ width: 25, tintColor: "#000000" }}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Suppliers"
          component={Suppliers}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image
                    source={require("./assets/Icons/storefront_FILL0_wght400_GRAD0_opsz48.png")}
                    resizeMode="contain"
                    style={{ width: 25, tintColor: "#000000" }}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image
                    source={require("./assets/Icons/person_FILL0_wght400_GRAD0_opsz48.png")}
                    resizeMode="contain"
                    style={{ width: 25, tintColor: "#000000" }}
                  />
                </View>
              );
            },
            tabBarIconStyle: {},
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
