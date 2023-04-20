import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StorageData } from "../constants/storageData";

const FoodsList = () => {
  return (
    <View style={styles.container}>
      {StorageData.map((item) => {
        return (
          <View key={item.id} style={styles.cardsContainer}>
            <View style={styles.card}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Image source={item.icon} />
                <View>
                  <Text style={styles.foodName}>{item.foodName}</Text>
                  <Text style={{ color: "#aa2343", fontWeight: "bold" }}>
                    {item.cookingLevel}
                  </Text>
                  <Text style={styles}>{item.description}</Text>
                </View>
              </View>
              <View>
                <Image source={item.icon} />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default FoodsList;

const styles = StyleSheet.create({
  cardsContainer: {
    alignItems: "center",
  },
  card: {
    width: "90%",
    height: 85,
    borderColor: "#FFF",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: "30",
    marginVertical: 4,
    overflow: "scroll",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  foodName: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
});
