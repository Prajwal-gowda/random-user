import { useContext, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { UsersContext } from "../context/UsersContext";
import { getSelectedUserData } from "../utils/utils";

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

  return (
    <View style={styles.rootContainer}>
      {selectedUser && (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: selectedUser.picture.large }}
          />
        </View>
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
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
