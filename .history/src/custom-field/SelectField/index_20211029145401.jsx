import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select/dist/declarations/src/Select";

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
  };

  return (
    <FormGroup>
      <Label for="categoryId">Category</Label>
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
