import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        placeholder={placeholder}
        name={name}
        type={type}
        disabled={disabled}
      />
      {showError && <p>{errors[name]}</p>}
      {showError && <FormFeedback>{errors[name]}</FormFeedback>}
    </FormGroup>
  );
}

export default InputField;
