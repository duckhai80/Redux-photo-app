import React from "react";
import PropTypes from "prop-types";
import { FormGroup } from "reactstrap";

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
  label: "",
};

function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onChange, onBlur } = field;

  return <FormGroup></FormGroup>;
}

export default RandomPhotoField;
