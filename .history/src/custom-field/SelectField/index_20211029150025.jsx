import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { FormGroup, Label } from "reactstrap";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  option: [],
};

function SelectField(props) {
  const { field, form, label, placeholder, disabled, options } = props;
  const { name } = field;

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;
    const changeEvent = {
      target: {
        name: name,
      },
    };
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        onChange={handleSelectedOptionChange}
        disabled={disabled}
        placeholder={placeholder}
        options={options}
      />
    </FormGroup>
  );
}

export default SelectField;
