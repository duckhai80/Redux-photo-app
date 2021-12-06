import React from "react";
import PropTypes from "prop-types";

PhotoCard.propTypes = {
  photo: PropTypes.object,
  handleEditClick: PropTypes.func,
  handleRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  handleEditClick: null,
  handleRemoveClick: null,
};

function PhotoCard(props) {
  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />
    </div>
  );
}

export default PhotoCard;
