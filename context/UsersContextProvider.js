import { useEffect, useState } from "react";
import { UsersContext } from "./UsersContext";
import axios from "axios";
import { getMultipleUserURL } from "../utils/utils";

const UsersContextProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([]);

  const getUsersList = async () => {
    const res = await axios.get(getMultipleUserURL());
    const { data } = res;
    return data;
  };

  useEffect(() => {
    (async () => {
      const usersData = await getUsersList();
      if (usersData && usersData.results.length) {
        setUsersList(usersData.results);
      }
    })();
  }, []);

  return (
    <UsersContext.Provider value={{ users: usersList }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
