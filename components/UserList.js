import { StyleSheet, FlatList } from "react-native";
import UserCard from "./UserCard";

const UserList = ({ userListInfo }) => {
  const renderUserCard = (itemData) => <UserCard {...itemData.item} />;

  return (
    <FlatList
      data={userListInfo}
      keyExtractor={(item) => `${item.id.value}-${item.registered.date}`}
      renderItem={renderUserCard}
      numColumns={2}
    />
  );
};

export default UserList;

const styles = StyleSheet.create({});
