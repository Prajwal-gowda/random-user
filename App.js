import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllUsers from "./screens/AllUsers";
import UserDetail from "./screens/UserDetail";
import UsersContextProvider from "./context/UsersContextProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <UsersContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="AllUsers" component={AllUsers} />
            <Stack.Screen name="UserDetail" component={UserDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </UsersContextProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
