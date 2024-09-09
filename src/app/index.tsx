import { View, Text, TextInput, Image, Pressable } from "react-native";
import Constants from "expo-constants";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  const router = useRouter();

  function handleLogin() {
    router.push("/dashboard");
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          className="justify-start items-center gap-10"
          style={{ marginTop: statusBarHeight }}
        >
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: 350, height: 60, marginTop: 50 }}
          />
          <Text className="text-white text-3xl">Login page</Text>
          <View>
            <View>
              <Text className="text-white">Login</Text>
              <TextInput
                placeholder="Ex: samuelB"
                placeholderTextColor="gray"
                className="border border-gray-300 rounded px-2 w-full"
              />
            </View>
            <View>
              <Text className="text-white">Password</Text>
              <TextInput
                placeholder="Ex: 1234"
                placeholderTextColor="gray"
                className="border border-gray-300 rounded px-2 w-full"
              />
            </View>
            <Pressable
              className="mt-4 bg-blue-800 py-2 rounded"
              onPress={handleLogin}
            >
              <Text className="text-white text-center">Login</Text>
            </Pressable>
          </View>
        </View>
        <View className="absolute bottom-0 right-0">
          <Image
            source={require("../../assets/images/sbDevTeamLogoWhite.png")}
            style={{
              width: 120,
              height: 60,
              resizeMode: "contain",
              marginRight: 10,
              marginBottom: 3,
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
