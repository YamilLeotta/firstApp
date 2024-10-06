import { Link } from "expo-router";
import { ScrollView, Text, Pressable } from "react-native";

export default function About() {
  return (
    <ScrollView>
      <Link asChild href="/">
        <Pressable>
          <Text className="text-blue-400 text-xl mt-24">Volver</Text>
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
