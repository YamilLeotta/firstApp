import { Link, Stack } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import { getGameDetails } from "../lib/metacritic";
import { useEffect, useState } from "react";
import { Score } from "../components/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen className="justify-center items-center">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "yellow" },
          headerTintColor: "black",
          headerTitle: gameInfo ? gameInfo.title : "",
          headerLeft: null,
          headerRight: null,
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color="white" size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center">
              <Text className="text-white font-bold mb-8 text-2xl">
                Detalle del juego {gameInfo.title}
              </Text>
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />

              <Score score={gameInfo.score} />

              <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
