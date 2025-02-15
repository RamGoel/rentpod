import AppButton from "@/components/Button";
import Input from "@/components/Input";
import { SCREEN_STYLE } from "@/lib/styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, ToastAndroid, View } from "react-native";
import { Text } from "react-native-paper";
const images = [
  require("../../assets/images/onboarding/studio4.png"),
  require("../../assets/images/onboarding/studio5.png"),
  require("../../assets/images/onboarding/studio6.png"),
];

const OTP = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [code, setCode] = React.useState("");
  const router = useRouter();
  const { phone: phoneNumber } = useLocalSearchParams();

  const handleLogin = () => {
    if (code.length < 4) {
      ToastAndroid.show("Invalid OTP", ToastAndroid.SHORT);
      return;
    }
    router.push("/onboarding");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={SCREEN_STYLE.main}>
      <View style={styles.imageBox}>
        <Image style={styles.logo} source={images[currentImageIndex]} />
      </View>
      <View style={styles.loginForm}>
        <Text>
          We've sent an 4-digit OTP to {phoneNumber}. Please enter it below.
        </Text>
        <Input
          label="One Time Password"
          keyboardType="decimal-pad"
          textContentType="oneTimeCode"
          maxLength={4}
          onChangeText={(text) => setCode(text)}
        />
        <AppButton
          title="Continue"
          onClick={handleLogin}
          variant="solid"
          disabled={!code}
        />
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  loginForm: {
    width: "90%",
    gap: 10,
    height: 200,
    padding: 20,
  },
  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  imageBox: {
    flex: 1,
    width: "100%",
    padding: 40,
    paddingBottom: 0,
  },
  navLink: {
    color: "blue",
    textDecorationColor: "blue",
    textDecorationLine: "underline",
  },
});
