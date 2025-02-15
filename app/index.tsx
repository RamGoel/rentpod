import { axiosInstance } from "@/lib/axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default async function Index() {
  const [message, setMessage] = useState("Hello");

  useEffect(() => {
    fetchMessage()
      .then((message) => setMessage(message))
      .catch(console.error);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/onboarding"}>{message}</Link>
    </View>
  );
}

async function fetchMessage() {
  const response = await axiosInstance.get("/");
  const data = response.data;
  return data.message;
}
