import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

const UserCard = ({
  name,
  location,
  email,
  dob,
  phone,
  id,
  picture,
  login,
}) => {
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
            <Text style={styles.detailItem}>{name.first}</Text>
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
    height: 150,
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
    margin: 8,
    textAlign: "center",
  },

  details: {
    padding: 8,
    flex: 2,
  },

  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
