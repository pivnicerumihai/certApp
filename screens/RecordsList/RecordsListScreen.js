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
import RecordList from "../../components/RecordList";

const screenHeight = Dimensions.get("window").height;

const RecordsListScreen = ({ route, navigation }) => {
  const { placeholder, buttonTitle, data, recordType } = route.params;
  const [searchInput, setSearchInput] = useState(null);

  const handleChangeText = (text) => {
    setSearchInput(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.textInputContainer}>
          <CustomTextInput
            style={styles.textInput}
            onChangeText={handleChangeText}
            placeholder={placeholder}
            leading={<Icon name="search" color="680AEF" size={20} />}
          />
        </View>
        <CustomButton
          title={buttonTitle}
          style={styles.addRecordButton}
          titleStyle={styles.textButton}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.list}>
          <RecordList
            text={searchInput}
            data={data}
            recordType={recordType}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: "15%",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    height: screenHeight, // Container with defined height
  },
  textInput: {
    marginTop: "2%",
    width: "90%",
    marginLeft: "5%",
  },
  addRecordButton: {
    marginTop: 60,
  },
  textButton: {
    color: "white",
    fontSize: 15,
    fontWeight: 600,
  },
  list: {
    width: "100%",

    alignSelf: "center",
  },
  textInputContainer: {
    padding: 10,
    backgroundColor: "#9ca9fc",
  },
  scrollView: {
    marginTop: 65,
  },
});

export default RecordsListScreen;
