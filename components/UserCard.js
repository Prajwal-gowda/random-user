import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Colors } from "../utils/colors";
import { getDateSubstring, getFormattedName } from "../utils/utils";

const UserCard = ({ name, location, email, dob, phone, picture, login }) => {
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
        <View style={styles.InfoContainer}>
          <Image style={styles.image} source={{ uri: picture.large }} />
          <View style={styles.details}>
            <Text style={styles.title}>{getFormattedName(name)}</Text>
            <Text style={[styles.detailItem]}>
              {getDateSubstring(dob.date)}
            </Text>
            <Text style={[styles.detailItem]}>
              {location.street.number} {location.street.name}
            </Text>
            <Text style={[styles.detailItem]}>{phone}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  CardItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  image: {
    height: "100%",
    flex: 1.5,
  },

  InfoContainer: {
    borderRadius: 8,
    overflow: "hidden",
    flexDirection: "row",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  details: {
    margin: 16,
    flex: 2,
    alignItems: "flex-start",
  },

  detailItem: {
    marginVertical: 4,
    fontSize: 14,
    color: Colors.grey700,
    fontWeight: "bold",
  },
});
