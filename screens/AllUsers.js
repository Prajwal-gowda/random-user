import { useContext } from "react";
import { StyleSheet } from "react-native";
import UserList from "../components/UserList";
import { UsersContext } from "../context/UsersContext";

const AllUsers = () => {
  const { users } = useContext(UsersContext);

  return <UserList userListInfo={users} />;
};

export default AllUsers;

const styles = StyleSheet.create({});
