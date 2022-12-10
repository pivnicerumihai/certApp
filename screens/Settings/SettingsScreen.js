import react, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomButton from "../../components/CustomButton";
import { View, Text, StyleSheet, Switch, Dimensions } from "react-native";
import {
  Divider,
  Snackbar,
  ActivityIndicator,
} from "@react-native-material/core";
import EngineerDetails from "./EngineerDetails/EngineerDetails";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import { ScrollView } from "react-native-web";

// get Screen Dimensions
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const SettingsScreen = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCompanySettings, setShowCompanySettings] = useState(false);

  const handleSaveChanges = () => {
    // save to DB
    setLoading(true);
    setTimeout(() => {
      // when confirmation from DB setLoading(false) and showSnackbar
      setLoading(false);
      setShowSnackbar(true);
      // hide Snackbar after 1 sec
      setTimeout(() => {
        setShowSnackbar(false);
      }, 1000);
    }, 1000);
  };
  const toggleSwitch = () => {
    setShowCompanySettings((previousState) => !previousState);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Switch */}
        <div style={{ alignSelf: "center", display: "flex", margin: 10 }}>
          <Text
            style={{
              paddingRight: 15,
              color: showCompanySettings ? "gray" : "white",
              fontWeight: !showCompanySettings ? 700 : 400,
            }}
          >
            User / Engineer
          </Text>
          <Switch
            onValueChange={toggleSwitch}
            thumbColor="white"
            trackColor={{ false: "#6200EE", true: "#6200EE" }}
            value={showCompanySettings}
          />
          <Text
            style={{
              paddingLeft: 15,
              color: showCompanySettings ? "white" : "gray",
              fontWeight: showCompanySettings ? 700 : 400,
            }}
          >
            Company
          </Text>
        </div>

        {/* Inputs to Show*/}
        {!showCompanySettings ? <EngineerDetails /> : <CompanyDetails />}
      </View>
      {showSnackbar ? (
        <Snackbar
          message="Your changes have been saved"
          style={styles.snackBar}
        />
      ) : null}
      <CustomButton
        title={loading ? <ActivityIndicator color="white" /> : "Save"}
        titleStyle={styles.titleStyle}
        style={{
          position: "absolute",
          bottom: 15,
          width: "90%",
        }}
        onPress={handleSaveChanges}
        leading={loading ? null : <Icon name="save" color="white" size={16} />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9ca9fc",
    flexDirection: "column",
    justifyContent: "start",
    height: screenHeight, // Container with defined height
  },
  titleStyle: {
    color: "white",
    fontSize: 16,
  },
  snackBar: {
    position: "absolute",
    start: 16,
    end: 16,
    bottom: "5%",
    zIndex: 1,
  },
});

export default SettingsScreen;
