import { View, Text } from "react-native";
import React from "react";
import { BtnAddStorage, FoodsList } from "../components";

const Storage = () => {
  return (
    <View style={{ paddingTop: 25 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: "18", fontWeight: "bold" }}>
          Manage Inventory
        </Text>
        <Text style={{ fontSize: "18", fontWeight: "bold" }}>
          Manage Inventory
        </Text>
      </View>
      <FoodsList />
      <BtnAddStorage />
    </View>
  );
};

export default Storage;
