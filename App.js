import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  SafeAreaView,
  Pressable,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="light" />
        <Image
          source={{
            uri: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg",
          }}
          style={{
            width: 215,
            height: 294,
          }}
          fadeDuration={3000}
        />
      </View>

      <View>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="Press me"
          onPress={() => alert("Simple Button pressed")}
        />
      </View>

      <View>
        <TouchableHighlight
          underlayColor="lightblue"
          onPress={() => alert("Chau!!")}
          style={{
            backgroundColor: "red",
            width: 200,
            height: 200,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
          }}
        >
          <Text>Touch Here!</Text>
        </TouchableHighlight>
      </View>

      <View>
        <Pressable
          underlayColor="lightblue"
          onPress={() => alert("Buuuu!!")}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "red" : "blue",
          })}
        >
          {({ pressed }) => (
            <Text
              style={{
                color: pressed ? "yellow" : "white",
              }}
            >
              {pressed ? "Pressed!" : "Press me"}
            </Text>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightcyan",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
