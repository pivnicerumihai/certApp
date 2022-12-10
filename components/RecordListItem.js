import Icon from "react-native-vector-icons/FontAwesome5";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RecordListItem = ({
  itemTitle,
  itemSubtitle,
  itemContent,
  isAddress,
  onPress,
  subtitleStyle,
  titleStyle,
  itemContainerStyle,
  iconColor,
}) => {
  return (
    <View style={itemContainerStyle}>
      <TouchableOpacity onPress={onPress}>
        <Text style={titleStyle}>{itemTitle}</Text>

        <View style={styles.addressContainer}>
          {isAddress === true ? (
            <Icon
              style={styles.addressMarker}
              name="map-marker-alt"
              size={14}
              color={iconColor}
            />
          ) : null}
          <Text style={subtitleStyle}>{itemSubtitle}</Text>
        </View>
        <Text style={styles.itemContent}>{itemContent}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    flexDirection: "row",
  },
  addressMarker: {
    padding: 5,
  },
});

export default RecordListItem;
