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

  const handleImageChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <FormGroup>
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageChange}
        onRandomButtonClick={onBlur}
      ></RandomPhoto>
    </FormGroup>
  );
}

export default RandomPhotoField;
