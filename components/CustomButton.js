import React, { useState } from "react";
import { Stack, Button } from "@react-native-material/core";

const CustomButton = ({ title, style, color, onPress, leading }) => {
  return (
    <Stack fill center spacing={4}>
      <Button
        title={title}
        style={style}
        color={color}
        onPress={onPress}
        variant="outlined"
        leading={leading}
      />
    </Stack>
  );
};

export default CustomButton;
