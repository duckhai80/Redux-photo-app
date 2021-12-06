import React from "react";
import PropTypes from "prop-types";

PhotoCard.propTypes = {
  photo: PropTypes.object,
  handleEditClick: PropTypes.func,
  handleRemoveClick: PropTypes.func,
};

function PhotoCard(props) {
  return (
    <div className="photo">
      <img src="" alt="" />
    </div>
  );
}

export default PhotoCard;
