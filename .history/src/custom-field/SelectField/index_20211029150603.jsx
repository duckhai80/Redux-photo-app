import React from "react";
import PropTypes from "prop-types";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
};

function SelectField(props) {
  return <div></div>;
}

export default SelectField;
