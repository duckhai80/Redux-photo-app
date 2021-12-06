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

  return (
    <FormGroup>
      <Label for="categoryId">Category</Label>
      <Select
        id={name}
        name={name}
        placeholder="What's your photo category?"
        options={PHOTO_CATEGORY_OPTIONS}
      />
    </FormGroup>
  );
}

export default SelectField;
