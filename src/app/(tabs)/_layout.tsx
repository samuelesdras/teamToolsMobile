import { Tabs } from "expo-router";
import { AntDesign, Entypo, FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => (
          <LinearGradient
            colors={["#040316", "#141f5c"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1.0, y: 0.5 }}
            style={{ flex: 1 }}
            className="flex-1"
          />
        ),
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "Usuários",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="users" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="tool"
        options={{
          title: "Ferramentas",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="tools" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
