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
  return (
    <FormGroup>
      {label && <Label for="categoryId">{label}</Label>}
      <Select
        id={name}
        {...field}
        placeholder="What's your photo category?"
        options={PHOTO_CATEGORY_OPTIONS}
      />
    </FormGroup>
  );
}

export default SelectField;
