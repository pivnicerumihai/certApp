import React, { useState } from "react";
import { TextInput } from "@react-native-material/core";

const CustomTextInput = ({
  style,
  helperText,
  defaultValue,
  trailing,
  onChangeText,
}) => {
  const [showTrailing, setShowTrailing] = useState(false);

  return (
    <TextInput
      style={style}
      helperText={helperText}
      defaultValue={defaultValue}
      trailing={showTrailing ? trailing : null}
      showTrailing={showTrailing}
      onChangeText={(text) => {
        // Show the trailing icon when the user inputs text
        setShowTrailing(true);
        // Update the engineerName state with the user input
        onChangeText(text);
      }}
    />
  );
};

export default CustomTextInput;
