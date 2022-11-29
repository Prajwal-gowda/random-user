import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../utils/colors";

const OutlineButton = ({ icon, color, size, onPress, title }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
      <Text style={styles.buttonText}>{title && title}</Text>
    </Pressable>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    padding: 12,
    margin: 24,
    width: 175,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 50,
    elevation: 4,
  },

  buttonText: {
    color: Colors.primary,
    fontSize: 16,
  },
});
