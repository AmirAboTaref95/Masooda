import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, FoodsList } from "../components";

const Storage = () => {
  return (
    <View style={{ paddingTop: 23 }}>
      <View style={styles.storageContainer}>
        <Text style={styles.text}>Manage Inventory</Text>
        <Text>Manage Inventory</Text>
      </View>
      <View>
        <FoodsList />
      </View>
      <View style={styles.button}>
        <Button children={"+ Add Storage Unit"} onPress={{}} />
      </View>
    </View>
  );
};

export default Storage;

const styles = StyleSheet.create({
  storageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  text: {
    fontSize: 17,
    color: "#000000",
    width: 145,
    height: 21,
  },
  button: {
    alignItems: "center",
    paddingTop: 35,
  },
});
