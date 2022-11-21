import { useContext, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import OutlineButton from "../components/OutlineButton";
import { UsersContext } from "../context/UsersContext";
import { Colors } from "../utils/colors";
import {
  getDateSubstring,
  getFormattedName,
  getSelectedUserData,
} from "../utils/utils";

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
    <ScrollView contentContainerStyle={styles.rootContainer}>
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
          <View style={styles.infoContainer}>
            <Text style={styles.subTitle}>D.O.B : </Text>
            <Text style={styles.infoItem}>
              {getDateSubstring(selectedUser.dob.date)}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.subTitle}>Phone : </Text>
            <Text style={styles.infoItem}>{selectedUser.phone}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.subTitle}>Email : </Text>
            <Text style={styles.infoItem}>{selectedUser.email}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.subTitle}>Address : </Text>
            <Text style={styles.infoItem}>
              {selectedUser.location.street.number}{" "}
              {selectedUser.location.street.name}
            </Text>
          </View>

          <OutlineButton
            title="View Location"
            onPress={viewLocationHandler}
            icon="map"
            color={Colors.primary500}
            size={16}
          />
        </>
      )}
    </ScrollView>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    marginBottom: 12,
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
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },

  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: 400,
    marginVertical: 4,
    overflow: "hidden",
  },
  subTitle: {
    fontSize: 18,
    color: Colors.primary500,
  },
  infoItem: {
    fontSize: 16,
    color: Colors.grey100,
  },
});
