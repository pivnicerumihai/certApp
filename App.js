import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RecordSelectionScreen from "./screens/NewRecordScreen/RecordSelectionScreen";
import SettingsScreen, { Settings } from "./screens/Settings/SettingsScreen";
import ContactUs from "./screens/Contact/contactus";
import { StyleSheet } from "react-native";
import RecordsListScreen from "./screens/RecordsList/RecordsListScreen";
import customers from "./sampleData/customers";
import properties from "./sampleData/properties";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: "Electrical SoleTrader Software",
            headerStyle: styles.navbar,
            headerTintColor: "white",
            headerTitleStyle: styles.headerTitle,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="RecordSelection"
          options={{
            title: "Create New Record",
            headerStyle: styles.navbar,
            headerTintColor: "white",
            headerTitleStyle: styles.headerTitle,
          }}
          component={RecordSelectionScreen}
        />
        <Stack.Screen
          name="CustomersList"
          options={{
            title: "Customers",
            headerStyle: styles.navbar,
            headerTintColor: "white",
            headerTitleStyle: styles.headerTitle,
          }}
          initialParams={{
            placeholder: "Tap to search for a customer",
            buttonTitle: "Add New Customer",
            data: customers,
            recordType: "customer",
          }}
          component={RecordsListScreen}
        />
        <Stack.Screen
          name="PropertiesList"
          options={{
            title: "Properties",
            headerStyle: styles.navbar,
            headerTintColor: "white",
            headerTitleStyle: styles.headerTitle,
          }}
          initialParams={{
            placeholder: "Tap to search for a property",
            buttonTitle: "Add New Property",
            data: properties,
            recordType: "property",
          }}
          component={RecordsListScreen}
        />
        <Stack.Screen
          name="Settings"
          options={{
            title: "Settings",
            headerStyle: styles.navbar,
            headerTintColor: "white",
            headerTitleStyle: styles.headerTitle,
          }}
          component={SettingsScreen}
        />
        <Stack.Screen
          name="Support"
          options={{
            title: "Help & Support",
            headerStyle: styles.navbar,
            headerTintColor: "white",
            headerTitleStyle: styles.headerTitle,
          }}
          component={ContactUs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#6200EE",
  },
  headerTitle: {
    fontWeight: 800,
  },
});
