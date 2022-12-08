import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MenuOption from "../components/MenuOption";

const HomeScreen = ({ navigation }) => {
  const menuOptions = [
    "Create Record",
    "Customers",
    "Site Addresses",
    "Settings",
  ];

  const iconNames = ["file-invoice", "users", "map-marker-alt", "toolbox"];
  const screens = [
    "RecordSelection",
    "RecordSelection",
    "RecordSelection",
    "Settings",
  ];

  return (
    <View style={styles.container}>
      {menuOptions.map((el, index) => {
        return (
          <React.Fragment key={index}>
            <MenuOption
              iconName={iconNames[index]}
              text={el}
              onClick={() => {
                navigation.navigate(screens[index]);
              }}
            />
          </React.Fragment>
        );
      })}
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

export default HomeScreen;
