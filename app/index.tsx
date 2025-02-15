import { Redirect } from "expo-router";

export default async function Index() {
  Redirect({ href: "/login/index" });
}
