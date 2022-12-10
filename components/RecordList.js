import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import RecordListItem from "./RecordListItem";

const customers = [
  {
    id: 1,
    firstName: "Mihai",
    surname: "Pivniceru",
    building: "12",
    street: "Sandhills",
    region: "Wallington",
    postcode: "SM6 8JE",
    town: "London",
  },
  {
    id: 2,
    firstName: "John",
    surname: "Doe",
    building: "34",
    street: "Maple Street",
    region: "New York",
    postcode: "10001",
    town: "New York",
  },
  {
    id: 3,
    firstName: "Jane",
    surname: "Doe",
    building: "56",
    street: "Park Avenue",
    region: "New York",
    postcode: "10002",
    town: "New York",
  },
  {
    id: 4,
    firstName: "Robert",
    surname: "Smith",
    building: "78",
    street: "Main Street",
    region: "Los Angeles",
    postcode: "90210",
    town: "Los Angeles",
  },
  {
    id: 5,
    firstName: "Sarah",
    surname: "Johnson",
    building: "90",
    street: "Sunset Boulevard",
    region: "Los Angeles",
    postcode: "90211",
    town: "Los Angeles",
  },
  {
    id: 6,
    firstName: "James",
    surname: "Williams",
    building: "12",
    street: "Oxford Street",
    region: "London",
    postcode: "WC1 1AA",
    town: "London",
  },
  {
    id: 7,
    firstName: "Emily",
    surname: "Jones",
    building: "34",
    street: "Bond Street",
    region: "London",
    postcode: "W1A 1AA",
    town: "London",
  },
  {
    id: 8,
    firstName: "Michael",
    surname: "Brown",
    building: "56",
    street: "Liverpool Street",
    region: "London",
    postcode: "EC2M 7PP",
    town: "London",
  },
  {
    id: 9,
    firstName: "Emily",
    surname: "Smith",
    building: "78",
    street: "Victoria Street",
    region: "London",
    postcode: "SW1E 5NN",
    town: "London",
  },
  {
    id: 10,
    firstName: "David",
    surname: "Jones",
    building: "90",
    street: "Park Lane",
    region: "London",
    postcode: "W1K 7AA",
    town: "London",
  },
];

const RecordList = ({ text }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <RecordListItem
        onPress={() => {
          setSelectedId(item.id);
          console.log(item);
        }}
        itemTitle={item.firstName + " " + item.surname}
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
        isAddress={true}
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
      />
    );
  };
  return (
    <FlatList
      data={
        text === "" || text === null
          ? customers
          : customers.filter(
              (customer) =>
                customer.firstName.includes(text) ||
                customer.surname.includes(text) ||
                customer.building.includes(text) ||
                customer.street.includes(text) ||
                customer.region.includes(text) ||
                customer.postcode.includes(text) ||
                customer.town.includes(text) ||
                customer.firstName.toLowerCase().includes(text) ||
                customer.surname.toLowerCase().includes(text) ||
                customer.building.toLowerCase().includes(text) ||
                customer.street.toLowerCase().includes(text) ||
                customer.region.toLowerCase().includes(text) ||
                customer.postcode.toLowerCase().includes(text) ||
                customer.town.toLowerCase().includes(text)
            )
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
