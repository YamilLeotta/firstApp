import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { FontAwesome } from "@expo/vector-icons";

export const HomeIcon = (props) => (
  <MaterialIcons name="home-filled" size={24} color="white" {...props} />
);
export const AboutIcon = (props) => (
  <FontAwesome5 name="info-circle" size={24} color="white" {...props} />
);
export const InfoIcon = (props) => (
  <FontAwesome name="info" size={24} color="white" {...props} />
);
