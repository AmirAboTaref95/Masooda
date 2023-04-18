import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BtnAddStorage = () => {
  return (
    <View style={styles.BtnAddStorage}>
      <TouchableOpacity style={styles.btn} onPress={() => AddStorage()}>
        <Text style={styles.text}>+ Add Storage Unit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnAddStorage;

const styles = StyleSheet.create({
  BtnAddStorage: {
    paddingTop: 50,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#c1011e",
    alignItems: "center",
    color: "#FFF",
    borderRadius: 15,
    padding: 4,
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
});
