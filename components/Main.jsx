import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { View, FlatList, ActivityIndicator, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { AboutIcon } from "./Icons";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
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
      <View className="flex-row justify-between mb-4 mx-2">
        <View>
          <Logo />
        </View>

        <Link asChild href="/about">
          <Pressable>
            {({ pressed }) => (
              <AboutIcon size={36} style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
          </Pressable>
        </Link>
      </View>

      {games.length === 0 ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : (
        <FlatList
          data={games}
          //keyExtractor={(game) => game.slug}
          keyExtractor={({ slug }) => slug}
          //renderItem={(game) => <GameCard game={game.item} />}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
