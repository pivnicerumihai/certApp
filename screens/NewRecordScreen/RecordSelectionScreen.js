import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "@react-native-material/core";

const RecordSelectionScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        label="Search Record"
        placeholder="Record Name"
        style={{ padding: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "start",
  },
});

export default RecordSelectionScreen;
