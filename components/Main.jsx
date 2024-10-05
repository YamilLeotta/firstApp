import { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { getLastestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";
import { Logo } from "./Logo";

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
      <View style={{ padding: 10 }}>
        <Logo />
      </View>

      {games.length === 0 ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : (
        <FlatList
          data={games}
          //keyExtractor={(game) => game.slug}
          keyExtractor={({ slug }) => slug}
          //renderItem={(game) => <GameCard game={game.item} />}
          renderItem={({ item }) => <GameCard game={item} />}
        />
      )}
    </View>
  );
}
