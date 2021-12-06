import React from "react";
import PropTypes from "prop-types";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  return <div></div>;
}

export default InputField;