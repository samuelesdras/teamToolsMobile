const data = [
  {
    id: 1,
    teamName: "Team 1 Anápolis-GO",
    responsible: "Amorzinho Barbosa",
    members: "5",
    managerPhoto: require("../../../assets/images/amorzinho.jpeg"),
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 2,
    teamName: "Team 2 Anápolis-GO",
    responsible: "Filhinho Barbosa",
    members: "8",
    managerPhoto: require("../../../assets/images/filhinho.jpeg"),
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 3,
    teamName: "Team 3 Anápolis-GO",
    responsible: "João Silva",
    members: "4",
    managerPhoto: require("../../../assets/images/pai.jpeg"),
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 4,
    teamName: "Team 4 Brasilia",
    responsible: "João Silva",
    members: "3",
    managerPhoto: "",
    objective:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];
import { ScrollView, Text, View } from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Header from "@/src/components/header";
import DashboardCard from "@/src/components/dashboardCard";

const statusBarHeight = Constants.statusBarHeight;

export default function Dashboard() {
  return (
    <LinearGradient
      colors={["#040316", "#141f5c"]}
      start={{ x: 0.0, y: 0.5 }}
      end={{ x: 1.0, y: 0.5 }}
      style={{ flex: 1 }}
      className="flex-1"
    >
      <StatusBar style="light" />
      <View className="w-full" style={{ marginTop: statusBarHeight + 30 }}>
        <View className="mb-10">
          <Header />
        </View>

        <View className="items-center mb-5">
          <Text className="text-white text-4xl">Times ativos</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          {data ? (
            data.map((data) => (
              <View key={data.id} className="h-45">
                <DashboardCard data={data} />
              </View>
            ))
          ) : (
            <View>
              <Text>No active teams found.</Text>
            </View>
          )}
        </View>
        <View className="flex-1 justify-center items-center mb-10">
          <Link href={"/"} className="text-white">
            Logoff
          </Link>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
