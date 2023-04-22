import { View, Text } from "react-native";
import React from "react";
import { Button, FoodsList } from "../components";

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
      <View>
        <FoodsList />
      </View>
      <View style={{ alignItems: "center", paddingTop: 35 }}>
        <Button children={"+ Add Storage Unit"} />
      </View>
    </View>
  );
};

export default Storage;
