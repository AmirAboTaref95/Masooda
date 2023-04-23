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
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFFFF",
    alignSelf: "center",
  },
  buttonStyle: {
    backgroundColor: "#C3001F",
    borderWidth: 1,
    borderColor: "#C3001F",
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
    width: 248,
    borderRadius: 15,
  },
};
