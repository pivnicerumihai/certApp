import react, { useState, Fragment } from "react";
import CustomTextInput from "../../../components/CustomTextInput";
import Icon from "react-native-vector-icons/FontAwesome5";

const CompanyDetails = () => {
  const [companyName, setCompanyName] = useState("CompanyName");
  const [building, setBuilding] = useState("12");
  const [street, setStreet] = useState("Woodside");
  const [town, setTown] = useState("Croydon");
  const [region, setRegion] = useState("South");
  const [postcode, setPostcode] = useState("SE25 5HQ");
  const [companyRegistrationNumber, setCompanyRegistrationNumber] =
    useState("CRN123456");

  const handleCompanyNameChange = (text) => {
    setCompanyName(text);
  };

  const handleBuildingChange = (text) => {
    setBuilding(text);
  };

  const handleStreetChange = (text) => {
    setStreet(text);
  };

  const handleTownChange = (text) => {
    setTown(text);
  };

  const handleRegionChange = (text) => {
    setRegion(text);
  };

  const handlePostcodeChange = (text) => {
    setPostcode(text);
  };

  const handleCompanyRegistrationNumberChange = (text) => {
    setCompanyRegistrationNumber(text);
  };
  return (
    <div
      style={{
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CustomTextInput
        style={{ margin: 10, width: "80%" }}
        helperText="Company Name"
        defaultValue={companyName}
        onChangeText={handleCompanyNameChange}
        trailing={() => <Icon name="check-circle" color="green" size={18} />}
      />
      <CustomTextInput
        style={{ margin: 10, width: "80%" }}
        helperText="Building or house no."
        onChangeText={handleBuildingChange}
        defaultValue={building}
        trailing={() => <Icon name="check-circle" color="green" size={18} />}
      />
      <CustomTextInput
        style={{ margin: 10, width: "80%" }}
        helperText="Street"
        defaultValue={street}
        onChangeText={handleStreetChange}
        trailing={() => <Icon name="check-circle" color="green" size={18} />}
      />
      <CustomTextInput
        style={{ margin: 10, width: "80%" }}
        helperText="Town"
        defaultValue={town}
        onChangeText={handleTownChange}
        trailing={() => <Icon name="check-circle" color="green" size={18} />}
      />
      <CustomTextInput
        style={{ margin: 10, width: "80%" }}
        helperText="Region"
        defaultValue={region}
        onChangeText={handleRegionChange}
        trailing={() => <Icon name="check-circle" color="green" size={18} />}
      />
      <CustomTextInput
        style={{ margin: 10, width: "80%" }}
        helperText="Postcode"
        defaultValue={postcode}
        onChangeText={handlePostcodeChange}
        trailing={() => <Icon name="check-circle" color="green" size={18} />}
      />
      <CustomTextInput
        style={{ margin: 10, width: "80%" }}
        helperText="Company Registration Number"
        defaultValue={companyRegistrationNumber}
        onChangeText={handleCompanyRegistrationNumberChange}
        trailing={() => <Icon name="check-circle" color="green" size={18} />}
      />
    </div>
  );
};

export default CompanyDetails;
