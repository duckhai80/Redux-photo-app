import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  options: [],
  disabled: false,
};

function SelectField(props) {
  const { field, form, label, placeholder, options, disabled } = props;
  const { name, value } = field;

  const selectedOption = options.find((x) => x.value === value);

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for="categoryId">{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        options={options}
      />
    </FormGroup>
  );
}

export default SelectField;
