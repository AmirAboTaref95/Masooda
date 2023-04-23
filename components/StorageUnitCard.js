import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

import { StorageData } from "../constants/storageData";

const StorageUnitCard = () => {
  return StorageData.map((item) => {
    return (
      <View key={item.id} style={styles.cardsContainer}>
        <View style={styles.card}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image source={item.icon} />
            <View>
              <Text style={styles.foodName}>{item.foodName}</Text>
              <Text
                style={{ color: "#A2142C", fontSize: 14, fontWeight: "bold" }}
              >
                {item.cookingLevel}
              </Text>
              <Text>{item.description}</Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 50 }}>
            <Image
              source={require("../assets/Icons/arrow_forward_FILL1_wght700_GRAD200_opsz48.png")}
              resizeMode="contain"
              style={{ width: 25, tintColor: "#000000", paddingEnd: 10 }}
            />
          </View>
        </View>
      </View>
    );
  });
};

export default StorageUnitCard;

const styles = StyleSheet.create({
  cardsContainer: {
    alignItems: "center",
  },
  card: {
    height: 90,
    width: 400,
    borderColor: "#FFF",
    backgroundColor: "#FFF",
    paddingBottom: 30,
    paddingTop: 30,
    paddingEnd: 30,
    paddingStart: 30,
    borderRadius: 30,
    marginVertical: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: "#00000029",
  },
  foodName: {
    color: "black",
    width: 128,
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "flex-start",
  },
});
