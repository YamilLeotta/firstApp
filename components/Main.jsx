import { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { getLastestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";

export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLastestGames().then((games) => setGames(games));
  }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {games.length === 0 ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : (
        <ScrollView>
          {games.map((game) => (
            <GameCard key={game.slug} game={game}></GameCard>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
