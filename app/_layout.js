import { Pressable, View } from "react-native";
import { Link, Slot, Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { AboutIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <View className="flex-row justify-between mb-4 mx-2">
              <Link asChild href="/about">
                <Pressable>
                  {({ pressed }) => (
                    <AboutIcon
                      size={36}
                      style={{ opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
    </View>
  );
}
