import { useContext, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { UsersContext } from "../context/UsersContext";
import { getFormattedName, getSelectedUserData } from "../utils/utils";

const UserDetail = ({ route, navigation }) => {
  const { users } = useContext(UsersContext);

  const [selectedUser, setSelectedUser] = useState();

  useLayoutEffect(() => {
    if (route.params.userId) {
      const user = getSelectedUserData(users, route.params.userId);
      navigation.setOptions({
        title: `${user.name.first} ${user.name.last}`,
      });
      setSelectedUser(user);
    }
  }, [route.params]);

  const viewLocationHandler = () => {
    navigation.navigate("MapView", {
      latitude: selectedUser.location.coordinates.latitude,
      longitude: selectedUser.location.coordinates.longitude,
    });
  };

  return (
    <View style={styles.rootContainer}>
      {selectedUser && (
        <>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: selectedUser.picture.large }}
            />
          </View>
          <Text style={styles.title}>
            {getFormattedName(selectedUser.name)}
          </Text>
          <Button title="View location" onPress={viewLocationHandler} />
        </>
      )}
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    marginVertical: 16,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
