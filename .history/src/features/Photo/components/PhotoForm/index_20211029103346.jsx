import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  return <Formik></Formik>;
}

export default PhotoForm;
