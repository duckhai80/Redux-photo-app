import React from "react";
import PropTypes from "prop-types";

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

function RandomPhoto(props) {
  const {name. imageUrl, onImageUrlChange, onRandomButtonBlur} = props
  return <div></div>;
}

export default RandomPhoto;
