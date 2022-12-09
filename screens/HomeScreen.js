import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MenuOption from "../components/MenuOption";

const HomeScreen = ({ navigation }) => {
  const menuOptions = [
    "Create Record",
    "Customers",
    "Site Addresses",
    "Settings",
    "Help & Support",
  ];

  const iconNames = [
    "file-invoice",
    "users",
    "map-marker-alt",
    "toolbox",
    "info-circle",
  ];
  const screens = [
    "RecordSelection",
    "RecordSelection",
    "RecordSelection",
    "Settings",
    "Support",
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
    backgroundColor: "#9ca9fc",
    flexDirection: "column",
    justifyContent: "start",
    height: "100%",
  },
});

export default HomeScreen;
