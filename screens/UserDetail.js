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
import { LinearGradient } from "expo-linear-gradient";

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
          <LinearGradient
            colors={[Colors.primary, Colors.secondary200]}
            style={styles.imageBackground}
          />
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
            <Text style={styles.subTitle}>Date Of Birth</Text>
            <Text style={styles.infoItem}>
              {getDateSubstring(selectedUser.dob.date)}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.subTitle}>Phone</Text>
            <Text style={styles.infoItem}>{selectedUser.phone}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.subTitle}>Email</Text>
            <Text style={styles.infoItem}>{selectedUser.email}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.subTitle}>Address</Text>
            <Text style={styles.infoItem}>
              {selectedUser.location.street.number}{" "}
              {selectedUser.location.street.name}
            </Text>
          </View>

          <OutlineButton
            title="View Location"
            onPress={viewLocationHandler}
            icon="map"
            color={Colors.primary}
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
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    marginVertical: 16,
    borderColor: Colors.primaryBackground,
    borderWidth: 2,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primaryBackground,
    margin: 18,
  },

  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 4,
    width: "90%",
    overflow: "hidden",
    padding: 12,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
  },
  subTitle: {
    fontSize: 18,
    color: Colors.primary,
  },
  infoItem: {
    fontSize: 16,
    color: Colors.primaryBackground,
  },
  imageBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "40%",
  },
});
