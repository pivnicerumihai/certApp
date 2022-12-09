import React, { useState } from "react";
import { Stack, Button } from "@react-native-material/core";
import { Text } from "react-native-web";

const CustomButton = ({
  title,
  titleStyle,
  style,
  color,
  onPress,
  leading,
  trailing,
}) => {
  return (
    <Stack fill center spacing={4}>
      <Button
        title={<Text style={titleStyle}>{title}</Text>}
        style={{
          borderWidth: 3,
          margin: 10,
          backgroundColor: "#680AEF",
          borderColor: "white",
          ...style,
        }}
        color={color}
        onPress={onPress}
        variant="contained"
        leading={leading}
        trailing={trailing}
      />
    </Stack>
  );
};

export default CustomButton;
