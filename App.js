import * as React from "react";

import { View, Image, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Profile, Recipes, Storage, Suppliers } from "./screens";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          headerStyle: {
            height: 104,
          },
          footerStyle: {
            height: 100,
          },
        }}
      >
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
                    style={styles.image}
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
                    style={styles.image}
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
                    style={styles.image}
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
                    style={styles.image}
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
                    style={styles.image}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = (focused) =>
  StyleSheet.create({
    image: {
      width: 57,
      height: 44,
      paddingBottom: 15,
      paddingTop: 15,
      paddingEnd: 15,
      paddingStart: 15,
      backgroundColor: focused ? "#EDBABC" : null,
      tintColor: "#000000",
      borderRadius: 18,
    },
  });
