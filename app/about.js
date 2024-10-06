import { Link } from "expo-router";
import { ScrollView, Text, Pressable } from "react-native";
import { HomeIcon } from "../components/Icons";

export default function About() {
  return (
    <ScrollView className="pt-10">
      <Link asChild href="/">
        <Pressable>
          {({ pressed }) => (
            <HomeIcon size={48} style={{ opacity: pressed ? 0.5 : 1 }} />
          )}
        </Pressable>
      </Link>

      <Text className="text-white font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>

      <Text className="text-white/80 mb-4">
        dfsdf sdfsdfsdfasd fasdfsadfas dfasdfsadfasdf asdfasdffsadfsadf sdf sdf
        asdf af sdaf asdfasf
      </Text>
      <Text className="text-white/80 mb-4">
        dfsdf sdfsdfsdfasd fasdfsadfas dfasdfsadfasdf asdfasdffsadfsadf sdf sdf
        asdf af sdaf asdfasf
      </Text>
      <Text className="text-white/80 mb-4">
        dfsdf sdfsdfsdfasd fasdfsadfas dfasdfsadfasdf asdfasdffsadfsadf sdf sdf
        asdf af sdaf asdfasf
      </Text>
      <Text className="text-white/80 mb-4">
        dfsdf sdfsdfsdfasd fasdfsadfas dfasdfsadfasdf asdfasdffsadfsadf sdf sdf
        asdf af sdaf asdfasf
      </Text>
    </ScrollView>
  );
}
