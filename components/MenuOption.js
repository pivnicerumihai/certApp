import React, { useState } from "react";

import { Button } from "@react-native-material/core";

import Icon from "react-native-vector-icons/FontAwesome5";

const MenuOption = ({ text, iconName, onClick }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Button
      title={text}
      style={{
        width: "90%",
        alignSelf: "center",
        borderWidth: 3,
        padding: 5,
        margin: 10,
        borderColor: "white",
      }}
      onPress={() => {
        setClicked(!clicked);
        onClick();
      }}
      leading={(props) => <Icon name={iconName} color="white" size={20} />}
    />
  );
};

export default MenuOption;
