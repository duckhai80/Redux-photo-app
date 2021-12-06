import React from "react";
import PropTypes from "prop-types";

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onEditClick: null,
  onRemoveClick: null,
};

function PhotoCard(props) {
  const { photo, onEditClick, onRemoveClick } = props;

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />
    </div>
  );
}

export default PhotoCard;
