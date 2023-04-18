import React from "react";

import { View, Text, Button } from "react-native";

const BtnAddStorage = () => {
  return (
    <View>
      <Button title="+ Add Storage Unit" onPress={() => AddStorage()} />
    </View>
  );
};

export default BtnAddStorage;
