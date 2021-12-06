import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photoList: [],
  onPhotoEditClick: null,
  onPhotoRemoveClick: null,
};

function PhotoList(props) {
  const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;

  return (
    <Row>
      {photoList.map((photo) => (
        <Col key={photo.id}></Col>
      ))}
    </Row>
  );
}

export default PhotoList;
