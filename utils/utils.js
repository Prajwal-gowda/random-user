import { BASE_USER_API_URL } from "./constants";

export const getMultipleUserURL = (numberOfUsers = 20) =>
  `${BASE_USER_API_URL}/?results=${numberOfUsers}`;

export const getSelectedUserData = (userList, id) =>
  userList.find((user) => user.login.uuid === id);

export const getDateSubstring = (isoDate) => isoDate.substr(0, 10);

export const getFormattedName = (name) =>
  `${name.title}. ${name.first} ${name.last}`;

export const getFormattedAddress = (location) =>
  `${location.street.number} ${location.street.name}`;
