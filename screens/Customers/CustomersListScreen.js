import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomButton from "../../components/CustomButton";

const screenHeight = Dimensions.get("window").height;

const CustomersListScreen = () => {
  const [searchInput, setSearchInput] = useState(null);

  const handleChangeText = (text) => {
    setSearchInput(text);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.textInputContainer}>
            <CustomTextInput
              style={styles.textInput}
              onChangeText={handleChangeText}
              placeholder={"Tap to search for a customer"}
              leading={<Icon name="search" color="680AEF" size={20} />}
            />
          </View>
          <CustomButton
            title={"Add New Customer"}
            style={styles.addCustomerButton}
            titleStyle={styles.textButton}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#9ca9fc",
    height: "10%",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    height: screenHeight, // Container with defined height
  },
  textInput: {
    marginTop: "4%",
    width: "90%",
    marginLeft: "5%",
  },
  addCustomerButton: {
    marginTop: "25%",
  },
  textButton: {
    color: "white",
    fontSize: 15,
    fontWeight: 600,
  },
});

export default CustomersListScreen;
