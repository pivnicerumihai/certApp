import React, { useState } from "react";
import { TextInput } from "@react-native-material/core";

const CustomTextInput = ({
  style,
  helperText,
  defaultValue,
  trailing,
  onChangeText,
  secureTextEntry,
  placeholder,
  leading,
}) => {
  const [showTrailing, setShowTrailing] = useState(false);

  return (
    <TextInput
      leading={leading}
      secureTextEntry={secureTextEntry}
      style={style}
      helperText={helperText}
      defaultValue={defaultValue}
      trailing={showTrailing ? trailing : null}
      showTrailing={showTrailing}
      placeholder={placeholder}
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
