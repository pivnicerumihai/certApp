import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import RecordListItem from "./RecordListItem";

const RecordList = ({ text, data, recordType }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <RecordListItem
        onPress={() => {
          setSelectedId(item.id);
        }}
        itemTitle={
          recordType === "customer" ? item.firstName + " " + item.surname : null
        }
        itemSubtitle={
          item.building +
          " " +
          item.street +
          " " +
          item.region +
          " " +
          item.postcode +
          " " +
          item.town
        }
        titleStyle={
          selectedId === item.id ? styles.itemTitleSelected : styles.itemTitle
        }
        subtitleStyle={
          selectedId === item.id
            ? styles.itemSubtitleSelected
            : styles.itemSubtitle
        }
        itemContainerStyle={
          selectedId === item.id
            ? styles.itemContainerSelected
            : styles.itemContainer
        }
        iconColor={selectedId === item.id ? "white" : "#680AEF"}
        recordType={recordType}
      />
    );
  };
  return (
    <FlatList
      data={
        text === "" || text === null
          ? data
          : data.filter((record) => {
              if (recordType === "customer") {
                return (
                  record.firstName.includes(text) ||
                  record.surname.includes(text) ||
                  record.firstName.toLowerCase().includes(text) ||
                  record.surname.toLowerCase().includes(text) ||
                  record.building.includes(text) ||
                  record.street.includes(text) ||
                  record.region.includes(text) ||
                  record.postcode.includes(text) ||
                  record.town.includes(text) ||
                  record.building.toLowerCase().includes(text) ||
                  record.street.toLowerCase().includes(text) ||
                  record.region.toLowerCase().includes(text) ||
                  record.postcode.toLowerCase().includes(text) ||
                  record.town.toLowerCase().includes(text)
                );
              } else if (recordType === "property") {
                return (
                  record.building.includes(text) ||
                  record.street.includes(text) ||
                  record.region.includes(text) ||
                  record.postcode.includes(text) ||
                  record.town.includes(text) ||
                  record.building.toLowerCase().includes(text) ||
                  record.street.toLowerCase().includes(text) ||
                  record.region.toLowerCase().includes(text) ||
                  record.postcode.toLowerCase().includes(text) ||
                  record.town.toLowerCase().includes(text)
                );
              }
            })
      }
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
  );
};

const styles = StyleSheet.create({
  itemSubtitle: { color: "gray", padding: 3 },
  itemTitle: { fontWeight: 600, padding: 3 },
  itemContainer: {
    padding: 10,
    borderBottomColor: "#9CA9FC",
    borderBottomWidth: 0.2,
  },
  itemSubtitleSelected: { color: "white", padding: 3 },
  itemTitleSelected: { fontWeight: 600, padding: 3, color: "white" },
  itemContainerSelected: {
    padding: 10,
    borderBottomColor: "#9CA9FC",
    borderBottomWidth: 0.2,
    backgroundColor: "#9CA9FC",
  },
});

export default RecordList;
