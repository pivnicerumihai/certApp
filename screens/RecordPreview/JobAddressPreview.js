import { Divider } from "@react-native-material/core";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-web";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import Icon from "react-native-vector-icons/FontAwesome5";

const JobAddressPreview = ({ navigation, route }) => {
  const {
    building,
    street,
    region,
    town,
    postcode,
    tenantName,
    tenantPhoneNumber,
    tenantEmailAddress,
    email,
    notes,
  } = route.params.item;
  return (
    <ScrollView>
      <View style={styles.container}>
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
          defaultValue={region}
          helperText={"Region"}
          style={styles.textInput}
        />
        <CustomTextInput
          defaultValue={town}
          helperText={"Town"}
          style={styles.textInput}
        />
        <CustomTextInput
          defaultValue={postcode}
          helperText={"Postcode"}
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
          defaultValue={tenantName}
          helperText={"Tenant Name"}
          style={styles.textInput}
        />
        <CustomTextInput
          defaultValue={tenantPhoneNumber}
          helperText={"Tenant Phone Number"}
          style={styles.textInput}
        />

        <CustomTextInput
          defaultValue={tenantEmailAddress}
          helperText={"Tenant Email Address"}
          style={styles.textInput}
        />
      </View>

      <View style={styles.buttonsGroup}>
        <CustomButton
          title={"Records"}
          titleStyle={styles.titleStyle}
          style={styles.button}
          leading={<Icon name="file-invoice" size={14} color="white" />}
        />
        <CustomButton
          title={"View Customer"}
          titleStyle={styles.titleStyle}
          style={styles.button}
          leading={<Icon name="user" size={14} color="white" />}
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

export default JobAddressPreview;
