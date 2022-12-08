import React from "react";
import react, { useState } from "react";
import { Text } from "react-native";
import CustomTextInput from "../../../components/CustomTextInput";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Divider } from "@react-native-material/core";

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

const EngineerDetails = ({}) => {
  const [engineerName, setEngineerName] = useState("123456");
  const [electricalNo, setElectricalNo] = useState("Test Engineer");
  const [phoneNumber, setPhoneNumber] = useState("01234567890");
  const [emailAddress, setEmailAddress] = useState("user@email.com");
  const [password, setPassword] = useState("Password12");
  const [confirmPassword, setConfirmPassword] = useState("Password12");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleEngineerNameChange = (text) => {
    setEngineerName(text);
  };

  const handleElectricalNoChange = (text) => {
    setElectricalNo(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleEmailAddressChange = (text) => {
    // Update the email address state variable with the new text entered by the user
    setEmailAddress(text);

    // Check if the email address is in the correct format using the regular expression
    if (emailRegex.test(text)) {
      // If the email address is in the correct format, clear the error message
      setEmailAddressError("");
    } else {
      // If the email address is not in the correct format, set the error message
      setEmailAddressError("Please enter a valid email address");
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);

    // Check if the password is valid using the regular expression
    if (passwordRegex.test(text)) {
      // If the password is valid, clear the error message
      setPasswordError("");
    } else {
      // If the password is not valid, set the error message
      setPasswordError(
        "Please enter a valid password (8 characters minimum, 1 capital letter, 1 number)"
      );
    }
  };
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);

    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords don't match");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Engineer Details */}
        <CustomTextInput
          style={{ margin: 10, width: "80%" }}
          helperText="Electrical Reg No"
          defaultValue={engineerName}
          onChangeText={handleEngineerNameChange}
          trailing={() => <Icon name="check-circle" color="green" size={18} />}
        />
        <CustomTextInput
          style={{ margin: 10, width: "80%" }}
          helperText="Phone Number"
          onChangeText={handlePhoneNumberChange}
          defaultValue={phoneNumber}
          trailing={() => <Icon name="check-circle" color="green" size={18} />}
        />
        <CustomTextInput
          style={{ margin: 10, width: "80%" }}
          helperText="Engineer Name   "
          defaultValue={electricalNo}
          onChangeText={handleElectricalNoChange}
          trailing={() => <Icon name="check-circle" color="green" size={18} />}
        />
      </div>
      {/* Divider */}
      <Divider style={{ marginTop: 20, height: 2.5 }} />

      {/* User Details */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CustomTextInput
          style={{ marginTop: 25, margin: 10, width: "80%" }}
          helperText="Email Address"
          defaultValue={emailAddress}
          onChangeText={handleEmailAddressChange}
          trailing={() =>
            emailAddressError ? (
              <Icon name="times-circle" color="red" size={18} />
            ) : (
              <Icon name="check-circle" color="green" size={18} />
            )
          }
        />
        {emailAddressError ? (
          <Text style={{ color: "red", alignSelf: "center" }}>
            {emailAddressError}
          </Text>
        ) : null}
        <CustomTextInput
          style={{ margin: 10, width: "80%" }}
          helperText="Password"
          defaultValue={password}
          onChangeText={handlePasswordChange}
          trailing={() =>
            passwordError ? (
              <Icon name="times-circle" color="red" size={18} />
            ) : (
              <Icon name="check-circle" color="green" size={18} />
            )
          }
        />
        {passwordError ? (
          <Text style={{ color: "red", width: "80%", textAlign: "center" }}>
            {passwordError}
          </Text>
        ) : null}
        <CustomTextInput
          style={{ margin: 10, width: "80%" }}
          helperText="Confirm Password"
          defaultValue={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          trailing={() =>
            confirmPasswordError ? (
              <Icon name="times-circle" color="red" size={18} />
            ) : (
              <Icon name="check-circle" color="green" size={18} />
            )
          }
        />
        {confirmPasswordError ? (
          <Text style={{ color: "red", width: "80%", textAlign: "center" }}>
            {confirmPasswordError}
          </Text>
        ) : null}
      </div>
    </>
  );
};

export default EngineerDetails;
