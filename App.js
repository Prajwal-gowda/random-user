import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllUsers from "./screens/AllUsers";
import UsersContextProvider from "./context/UsersContextProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <UsersContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="AllUsers" component={AllUsers} />
          </Stack.Navigator>
        </NavigationContainer>
      </UsersContextProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
