import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryListItem from "../../components/CategoryListItem";

const CertificatesScreen = ({ navigation, route }) => {
  const { data, isCategory } = route.params;

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <CategoryListItem
        key={item.id}
        onPress={() => {
          setSelectedId(item.id);
          if (isCategory) {
            navigation.navigate("certTypes", { data: item.certs });
          }
        }}
        categoryName={isCategory ? item.categoryName : item.certName}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
  );
};

const styles = StyleSheet.create({
  list: {},
});

export default CertificatesScreen;
