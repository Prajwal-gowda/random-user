import { BASE_USER_API_URL } from "./constants";

export const getMultipleUserURL = (numberOfUsers = 50) =>
  `${BASE_USER_API_URL}/?results=${numberOfUsers}`;
