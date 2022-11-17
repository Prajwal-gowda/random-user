import { BASE_USER_API_URL } from "./constants";

export const getMultipleUserURL = (numberOfUsers = 20) =>
  `${BASE_USER_API_URL}/?results=${numberOfUsers}`;

export const getSelectedUserData = (userList, id) =>
  userList.find((user) => user.login.uuid === id);
