import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

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
      <div className="photo__overlay">
        <div className="photo__title">{photo.title}</div>
        <div className="photo__actions">
          <div>
            <Button>Edit</Button>
          </div>
          <div>
            <Button>Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
