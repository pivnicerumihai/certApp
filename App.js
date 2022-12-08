import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RecordSelectionScreen from "./screens/NewRecordScreen/RecordSelectionScreen";
import SettingsScreen, { Settings } from "./screens/Settings/SettingsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ title: "Electrical SoleTrader Software" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="RecordSelection"
          options={{ title: "Create New Record" }}
          component={RecordSelectionScreen}
        />
        <Stack.Screen
          name="Settings"
          options={{ title: "Settings" }}
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
