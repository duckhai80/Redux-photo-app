import React from "react";
import PropTypes from "prop-types";

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
  return (
    <FormGroup>
      <Label for="categoryId">Category</Label>
      <Select
        id="categoryId"
        name="categoryId"
        placeholder="What's your photo category?"
        options={PHOTO_CATEGORY_OPTIONS}
      />
    </FormGroup>
  );
}

export default SelectField;
