import { COLORS } from "@/lib/colors";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, ButtonProps, Text } from "react-native-paper";

type AppButtonProps = Omit<ButtonProps, "children"> & {
  title: string;
  onClick: () => void;
  variant?: "outline" | "solid";
};

const AppButton = ({
  title,
  onClick,
  variant = "outline",
  disabled,
  ...rest
}: AppButtonProps) => {
  return (
    <Button
      {...rest}
      disabled={disabled}
      style={{
        ...styles.button,
        backgroundColor: variant === "solid" ? COLORS.primary : "white",
        borderColor: variant === "outline" ? COLORS.primary : "transparent",
        opacity: disabled ? 0.6 : 1,
      }}
      onPress={onClick}
    >
      <Text
        style={{
          color: variant === "solid" ? "white" : COLORS.primary,
        }}
      >
        {title}
      </Text>
    </Button>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    color: "white",
    width: "100%",
    borderRadius: 5,
    height: 40,
    borderWidth: 2,
  },
});
