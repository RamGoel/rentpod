import AppButton from "@/components/Button";
import Input from "@/components/Input";
import { SCREEN_STYLE } from "@/lib/styles";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, ToastAndroid, View } from "react-native";

const images = [
  require("../../assets/images/onboarding/studio1.png"),
  require("../../assets/images/onboarding/studio2.png"),
  require("../../assets/images/onboarding/studio3.png"),
];

const Login = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [phone, setPhone] = React.useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (phone.length !== 10) {
      ToastAndroid.show("Invalid phone number", ToastAndroid.SHORT);
      return;
    }
    router.push({
      pathname: "/otp/index",
      params: { phone },
    });
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
        <Input
          label="Phone Number"
          maxLength={10}
          textContentType="telephoneNumber"
          onChangeText={(text) => setPhone(text)}
        />
        <AppButton
          title="Continue"
          onClick={handleLogin}
          variant="solid"
          disabled={!phone}
        />
      </View>
    </View>
  );
};

export default Login;

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
