import { Entypo } from "@expo/vector-icons";
import { View, Text, Image, ImageSourcePropType } from "react-native";

type DashboardCardType = {
  teamName: string;
  responsible: string;
  members: string;
  objective: string;
  managerPhoto?: ImageSourcePropType;
};
interface DashboardCardProps {
  data: DashboardCardType;
}

export default function DashboardCard({ data }: DashboardCardProps) {
  return (
    <View className="border rounded m-2 p-2 border-blue-950">
      <View className="items-center mb-4">
        <Text className="text-white text-2xl font-bold">{data.teamName}</Text>
      </View>
      <View className="mb-4 flex-row items-center gap-3">
        <View className="rounded-full">
          {data.managerPhoto ? (
            <Image
              source={data.managerPhoto}
              className="w-16 h-16 rounded-full mt-2"
            />
          ) : (
            <Entypo name="user" size={40} color="white" />
          )}
        </View>
        <View className="flex-col">
          <Text className="text-white">Responsável: {data.responsible}</Text>
          <Text className="text-white">Membros: {data.members}</Text>
        </View>
      </View>
      <View>
        <Text className="text-white" numberOfLines={2} ellipsizeMode="tail">
          {data.objective}
        </Text>
      </View>
    </View>
  );
}
