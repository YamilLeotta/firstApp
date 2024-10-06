import { Text, View } from "react-native";

export function Score({ score }) {
  return (
    <View
      className={`${getColor(score)} w-8 h-8 rounded-full justify-center items-center`}
    >
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
}

const getColor = (score) => {
  return `bg-${score > 98 ? "green" : score > 96 ? "yellow" : "red"}-500`;

  /*
  switch (score) {
    case (100, 99):
      return "bg-green-500";
    case (98, 97):
      return `bg-yellow-500`;
    default:
      return "bg-red-500";
  }
  */
};
