import { View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Header() {
  const userPhoto = "../../assets/images/userPhoto.jpeg";
  return (
    <View className="flex-row justify-between mx-5 border-b border-cyan-50">
      <Image
        source={require("../../assets/images/teamToolsIcon.png")}
        className="w-14 h-14"
        resizeMode="contain"
      />

      {userPhoto ? (
        <View className="mb-3">
          <Image
            source={require(userPhoto)}
            className="w-14 h-14 rounded-full"
            resizeMode="contain"
          />
        </View>
      ) : (
        <Entypo name="user" size={28} color="white" />
      )}
    </View>
  );
}
