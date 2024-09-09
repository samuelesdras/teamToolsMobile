import { View, Text } from "react-native";
import Constants from "expo-constants";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const statusBarHeight = Constants.statusBarHeight;

export default function User() {
  return (
    <LinearGradient
      colors={["#040316", "#141f5c"]}
      start={{ x: 0.0, y: 0.5 }}
      end={{ x: 1.0, y: 0.5 }}
      style={{ flex: 1 }}
      className="flex-1"
    >
      <View
        style={{ marginTop: statusBarHeight + 50 }}
        className="flex flex-1 justify-start items-center"
      >
        <Text className="text-3xl text-white">Users page</Text>
        <Link href={"/"} className="text-white">
          Logoff
        </Link>
      </View>
    </LinearGradient>
  );
}
