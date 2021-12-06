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
  const { photo, handleEditClick, handleRemoveClick } = props;

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />
      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>
      </div>
    </div>
  );
}

export default PhotoCard;
