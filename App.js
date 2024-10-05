import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import { getLastestGames } from "./lib/metacritic";
import Constants from "expo-constants";

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {getLastestGames().then(games => setGames(games))}, []);

  return (
      <View style={styles.container}>
        <StatusBar style="light" />

          <ScrollView>
            {games.map(game => (
              <View key={game.slug} style={styles.card}>
                <Image
                  source={{uri: game.image}}
                  style={styles.image}
                />
                <Text style={styles.title}>{game.title}</Text>
                <Text style={styles.score}>{game.score}</Text>
                <Text style={styles.description}>{game.description}</Text>
              </View>
              ))}
          </ScrollView>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight
  },
  card: {
    marginBottom: 42
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "white"
  },
  description: {
    fontSize: 16,
    color: "#eee"
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10
  }
});
