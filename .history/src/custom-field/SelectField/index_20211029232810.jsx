import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormGroup, Label } from "reactstrap";

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
  const { errors, touched } = form;
  const showErrors = errors[name] && touched[name];

  const selectedOption = options.find((option) => option.value === value);

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
        onChange={handleSelectedOptionChange}
        value={selectedOption}
        placeholder={placeholder}
        options={options}
      />
      <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
    </FormGroup>
  );
}

export default SelectField;
