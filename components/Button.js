import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    backgroundColor: "#C3001F",
    borderWidth: 1,
    borderColor: "#C3001F",
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    width: 220,
    borderRadius: 15,
  },
};
