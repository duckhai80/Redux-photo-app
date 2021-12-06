import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

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
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;
  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button>Random a photo</Button>
      </div>
    </div>
  );
}

export default RandomPhoto;