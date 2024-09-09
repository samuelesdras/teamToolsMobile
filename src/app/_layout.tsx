import { Slot } from "expo-router";
import "../styles/global.css";
import { LinearGradient } from "expo-linear-gradient";

export default function RootLayout() {
  return (
    <LinearGradient
      colors={["#040316", "#141f5c"]}
      start={{ x: 0.0, y: 0.5 }}
      end={{ x: 1.0, y: 0.5 }}
      style={{ flex: 1 }}
      className="flex-1"
    >
      <Slot />
    </LinearGradient>
  );
}
