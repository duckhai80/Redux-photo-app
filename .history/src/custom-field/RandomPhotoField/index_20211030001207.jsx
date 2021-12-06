import RandomPhoto from "components/RandomPhoto";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  // imageUrl: PropTypes.string,
};

RandomPhotoField.defaultProps = {
  label: "",
  // imageUrl: "",
};

function RandomPhotoField(props) {
  const { field, form, label, imageUrl } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showErrors = errors[name] && touched[name];

  const handleImageChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageChange}
        onRandomButtonBlur={onBlur}
      ></RandomPhoto>
      <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
    </FormGroup>
  );
}

export default RandomPhotoField;
