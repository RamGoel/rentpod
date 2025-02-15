import { COLORS } from "@/lib/colors";
import React from "react";
import { StyleSheet } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";

type InputProps = TextInputProps;

const Input = (props: InputProps) => {
  return <TextInput mode="outlined" {...props} style={styles.input} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "transparent",
    height: 45,
    outlineColor: COLORS.primary,
  },
});
