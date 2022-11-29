import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Colors } from "../utils/colors";
import { getFormattedName } from "../utils/utils";
import { LinearGradient } from "expo-linear-gradient";

const UserCard = ({ name, picture, login }) => {
  const navigation = useNavigation();

  const userCardPressHandler = () => {
    navigation.navigate("UserDetail", { userId: login.uuid });
  };

  return (
    <View style={styles.CardItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={userCardPressHandler}
      >
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          style={styles.imageBackground}
        />
        <View style={styles.InfoContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: picture.large }} />
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>{getFormattedName(name)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  imageBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 70,
  },

  CardItem: {
    margin: 8,
    flex: 1,
    borderRadius: 8,
    backgroundColor: Colors.primaryBackground,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    overflow: "hidden",
  },

  buttonPressed: {
    opacity: 0.5,
  },

  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginTop: 8,
    borderColor: "white",
    borderWidth: 2,
  },

  image: {
    height: "100%",
  },

  InfoContainer: {
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  details: {
    margin: 16,
    alignItems: "flex-start",
  },
});
