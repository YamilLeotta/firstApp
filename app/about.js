import { Link } from "expo-router";
import { ScrollView, Text, Pressable } from "react-native";
import { HomeIcon } from "../components/Icons";
import { styled } from "nativewind";
import Screen from "../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className="active:opacity-30">
            {({ pressed }) => (
              <HomeIcon
                size={48}
                className={`${pressed ? "text-fuchsia-600" : ""}`}
              />
            )}
          </StyledPressable>
        </Link>

        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>

        <Text className="text-white/80 mb-4">
          dfsdf sdfsdfsdfasd fasdfsadfas dfasdfsadfasdf asdfasdffsadfsadf sdf
          sdf asdf af sdaf asdfasf
        </Text>
        <Text className="text-white/80 mb-4">
          dfsdf sdfsdfsdfasd fasdfsadfas dfasdfsadfasdf asdfasdffsadfsadf sdf
          sdf asdf af sdaf asdfasf
        </Text>
        <Text className="text-white/80 mb-4">
          dfsdf sdfsdfsdfasd fasdfsadfas dfasdfsadfasdf asdfasdffsadfsadf sdf
          sdf asdf af sdaf asdfasf
        </Text>
        <Text className="text-white/80 mb-4">
          dfsdf sdfsdfsdfasd fasdfsadfas dfasdfsadfasdf asdfasdffsadfsadf sdf
          sdf asdf af sdaf asdfasf
        </Text>
      </ScrollView>
    </Screen>
  );
}
