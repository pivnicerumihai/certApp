import { Divider } from "@react-native-material/core";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-web";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import Icon from "react-native-vector-icons/FontAwesome5";

const CustomerPreview = ({ navigation, route }) => {
  const {
    firstName,
    surname,
    building,
    street,
    town,
    region,
    postCode,
    mobile,
    email,
    notes,
  } = route.params.item;
  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomTextInput
          defaultValue={firstName}
          helperText={"First Name"}
          style={styles.textInput}
        />
        <CustomTextInput
          defaultValue={surname}
          helperText={"Last Name"}
          style={styles.textInput}
        />

        <Divider
          style={{
            marginTop: 20,
            height: 2.5,
            backgroundColor: "#6200EE",
            marginBottom: 10,
          }}
        />

        <CustomTextInput
          defaultValue={building}
          helperText={"Building"}
          style={styles.textInput}
        />
        <CustomTextInput
          defaultValue={street}
          helperText={"Street"}
          style={styles.textInput}
        />
        <CustomTextInput
          defaultValue={town}
          helperText={"Town"}
          style={styles.textInput}
        />
        <CustomTextInput
          defaultValue={region}
          helperText={"Region"}
          style={styles.textInput}
        />
        <CustomTextInput
          defaultValue={postCode}
          helperText={"Postcode"}
          style={styles.textInput}
        />

        <Divider
          style={{
            marginTop: 20,
            height: 2.5,
            color: "#9CA9FC",
            backgroundColor: "#6200EE",
            marginBottom: 10,
          }}
        />
        <CustomTextInput
          defaultValue={mobile}
          helperText={"Mobile"}
          style={styles.textInput}
        />
        <CustomTextInput
          defaultValue={email}
          helperText={"email"}
          style={styles.textInput}
        />
        <CustomTextInput
          defaultValue={notes}
          helperText={"Notes"}
          style={styles.textInput}
        />
      </View>

      <View style={styles.buttonsGroup}>
        <CustomButton
          title={"Job Addresses"}
          titleStyle={styles.titleStyle}
          style={styles.button}
          leading={<Icon name="map-marker-alt" size={14} color="white" />}
        />
        <CustomButton
          title={"Records"}
          titleStyle={styles.titleStyle}
          style={styles.button}
          leading={<Icon name="file-invoice" size={14} color="white" />}
        />
      </View>
      <View style={styles.buttonsGroup}>
        <CustomButton
          title={"Home"}
          titleStyle={styles.titleStyle}
          style={styles.button}
          leading={<Icon name="home" size={14} color="white" />}
        />
        <CustomButton
          title={"Save"}
          titleStyle={styles.titleStyle}
          style={styles.button}
          onPress={() => console.log("Customer Saved")}
          leading={<Icon name="save" size={14} color="white" />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#9CA9FC", padding: 15 },
  textInput: {
    width: "90%",
    marginLeft: "5%",
    padding: 5,
  },
  titleStyle: { color: "white" },
  buttonsGroup: {
    flexDirection: "row",
  },
  button: {
    width: "80%",
  },
});

export default CustomerPreview;
