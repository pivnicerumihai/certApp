import React, { useState } from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";

const CategoryListItem = ({ categoryName, onPress }) => {
  const [textColor, setTextColor] = useState("black");

  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.6}
      underlayColor="#9CA9FC"
      onShowUnderlay={() => {
        setTextColor("white");
      }}
      onHideUnderlay={() => {
        setTextColor("black");
      }}
    >
      <View>
        <Text style={[styles.text, { color: textColor }]}>
          {categoryName + "    >"}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    marginLeft: "5%",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#680AEF",
    padding: 15,
    textAlign: "center",
  },
  text: { fontSize: 14, fontWeight: 550 },
});

export default CategoryListItem;
