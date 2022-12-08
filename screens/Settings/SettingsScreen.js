import React, { useState } from "react";

import { ReactFragment } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomButton from "../../components/CustomButton";
import { View, Text, StyleSheet, Switch } from "react-native";
import {
  Divider,
  Snackbar,
  ActivityIndicator,
} from "@react-native-material/core";
import EngineerDetails from "./EngineerDetails/EngineerDetails";
import CompanyDetails from "./CompanyDetails/CompanyDetails";

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
    <View style={styles.container}>
      <React.Fragment>
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

        {showSnackbar ? (
          <Snackbar
            message="Changes were Saved Successfully"
            style={{
              position: "absolute",
              bottom: 20,
              alignSelf: "center",
              zIndex: 1,
            }}
          />
        ) : null}
        <CustomButton
          title={loading ? <ActivityIndicator color="white" /> : "Save"}
          color="white"
          style={{
            position: "absolute",
            bottom: 15,
            width: "90%",
          }}
          onPress={handleSaveChanges}
          leading={
            loading ? null : <Icon name="save" color="white" size={20} />
          }
        />
      </React.Fragment>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#687bfc",
    flexDirection: "column",
    justifyContent: "start",
    height: "100%",
  },
});

export default SettingsScreen;
