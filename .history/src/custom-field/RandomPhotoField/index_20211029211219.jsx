import React from "react";
import PropTypes from "prop-types";
import { FormGroup } from "reactstrap";
import RandomPhoto from "components/RandomPhoto";

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

  return (
    <FormGroup>
      <RandomPhoto></RandomPhoto>
    </FormGroup>
  );
}

export default RandomPhotoField;
