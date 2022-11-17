import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UsersContext } from "../context/UsersContext";

const AllUsers = () => {
  const { users } = useContext(UsersContext);

  return (
    <View>
      <Text>all users page</Text>
    </View>
  );
};

export default AllUsers;

const styles = StyleSheet.create({});
