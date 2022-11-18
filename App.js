import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllUsers from "./screens/AllUsers";
import UserDetail from "./screens/UserDetail";
import UsersContextProvider from "./context/UsersContextProvider";

import { Colors } from "./utils/colors";
import Map from "./screens/Map";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <UsersContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.grey100,
              },
              headerTintColor: Colors.grey700,
              contentStyle: { backgroundColor: Colors.grey700 },
            }}
          >
            <Stack.Screen
              name="AllUsers"
              component={AllUsers}
              options={{ title: "All Users" }}
            />
            <Stack.Screen name="UserDetail" component={UserDetail} />
            <Stack.Screen name="MapView" component={Map} />
          </Stack.Navigator>
        </NavigationContainer>
      </UsersContextProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
