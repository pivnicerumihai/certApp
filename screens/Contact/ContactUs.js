import react, { useState } from "react";
import { Text } from "react-native";
import { Snackbar } from "@react-native-material/core";
import { View, StyleSheet, Picker } from "react-native-web";
import { TextInput, ActivityIndicator } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CustomButton from "../../components/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome5";

const ContactUs = () => {
  const [items, setItems] = useState([
    { label: "Software Issue", value: "software_issue" },
    { label: "Payment Issue", value: "payment_issue" },
    { label: "Feature Request", value: "feature_request" },
    { label: "Feedback", value: "feedback" },
    { label: "Other Query", value: "other_query" },
  ]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [message, setMessage] = useState("");
  const [queryCooldown, setQueryCooldown] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formContents, setFormContents] = useState({
    query: null,
    message: null,
  });
  const [showQueryError, setShowQueryError] = useState(false);
  const [showMessageError, setShowMessageError] = useState(false);

  const handleSubmit = () => {
    if (selectedQuery === null || message.trim().length < 20) {
      if (selectedQuery === null) {
        setShowQueryError(true);
      }

      if (message.trim().length < 20) {
        setShowMessageError(true);
      }
    } else if (
      showMessageError === false &&
      showQueryError === false &&
      queryCooldown === 0
    ) {
      setLoading(true);
      setFormContents({ query: selectedQuery, message: message });
      setTimeout(() => {
        setShowSnackbar(true);
        setTimeout(() => {
          setShowSnackbar(false);
          setLoading(false);
        }, 1000);
      }, 1000);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>
            Please fill out the form below and email us with any questions or
            concerns.
          </Text>
          <View style={styles.dropdownContainer}>
            <DropDownPicker
              placeholder="Select a query"
              style={styles.picker}
              items={items}
              open={open}
              onPress={() => {
                setOpen((prevState) => !prevState);
              }}
              setValue={(value) => setSelectedQuery(value)}
              value={selectedQuery}
              onSelectItem={(value) => {
                setSelectedQuery(value);
                setOpen((prevState) => !prevState);
                setShowQueryError(false);
              }}
            />
          </View>
          <Text style={styles.errorText}>
            {showQueryError ? "Please select a query type" : null}
          </Text>
          <TextInput
            multiline
            numberOfLines={12}
            style={styles.textInput}
            placeholder="Type your query here"
            placeholderTextColor="gray"
            onChangeText={(value) => {
              setMessage(value);
              if (message.trim().length >= 20) {
                setShowMessageError(false);
              }
            }}
          />

          <Text style={styles.errorText}>
            {showMessageError
              ? "Text lenght must be at least 20 characters long"
              : null}
          </Text>
          <CustomButton
            style={styles.emailButton}
            title={loading ? <ActivityIndicator color="white" /> : "Submit"}
            titleStyle={styles.titleStyle}
            trailing={
              loading ? null : (
                <Icon name="paper-plane" color="white" size={20} />
              )
            }
            onPress={handleSubmit}
          />
          <Text style={styles.text}>
            We aim to get back to you within respond within 24 hours.
          </Text>
          {showSnackbar ? (
            <Snackbar
              message={
                queryCooldown === 0
                  ? "Message sent Successfully"
                  : "To prevent spam, you must wait 5 hours between queries made through the app."
              }
            />
          ) : null}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9ca9fc",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  innerContainer: {
    width: "90%",
  },
  dropdownContainer: {
    display: "flex",
    width: "70%",
    border: "1px solid black",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    justifyContent: "center",
  },
  textInput: {
    alignSelf: "center",
    width: "90%",
    padding: "10",
    backgroundColor: "white",
    padding: 7.5,
    marginTop: 20,
  },

  text: {
    textAlign: "center",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
    padding: 25,
    fontWeight: 600,
    color: "white",
  },
  dropdownText: {
    fontSize: 13,
    fontWeight: 650,
    marginRight: 20,
    color: "white",
  },
  titleStyle: {
    color: "white",
    fontSize: 16,
  },
  emailButton: {
    width: "40%",
  },
  errorText: {
    alignSelf: "center",
    color: "red",
    padding: 5,
  },
});

export default ContactUs;
